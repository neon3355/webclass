/* 화면구현 연습실 — 서버 (Google Apps Script)
   구글 시트에 학생 명단·활동 기록·과제 배포 상태를 저장합니다.
   설치 방법은 README.md 의 「서버 설정」을 보세요. */

var ADMIN_PW = "admin1234";   // ★ 관리자 비밀번호 — 반드시 다른 것으로 바꾸세요.

function doGet() { return ContentService.createTextOutput("화면구현 연습실 서버가 켜져 있습니다."); }

function doPost(e) {
  var out;
  try { out = route(JSON.parse(e.postData.contents)); }
  catch (err) { out = { ok: false, msg: "서버 오류: " + err.message }; }
  return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(ContentService.MimeType.JSON);
}

/* ───── 시트 ───── */
var HEAD = {
  students: ["학번", "이름", "비번", "반", "가입한 때", "마지막 로그인"],
  log: ["시각(ms)", "학번", "반", "활동ID", "구분", "활동", "점수", "단위", "달성", "자세히", "시각"],
  assign: ["반", "과제ID", "배포한 때"],
  sheets: ["학번", "반", "과제ID", "출력한 때", "제출", "제출 확인한 때"]
};
function sheet(name) {
  var ss = SpreadsheetApp.getActiveSpreadsheet(), sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.getRange("A:K").setNumberFormat("@");      // 학번·비번·날짜가 멋대로 바뀌지 않게 글자 형식으로
    sh.appendRow(HEAD[name]);
  }
  return sh;
}
function rows(name) { var v = sheet(name).getDataRange().getValues(); v.shift(); return v; }
function secret() {
  var p = PropertiesService.getScriptProperties(), s = p.getProperty("secret");
  if (!s) { s = Utilities.getUuid() + Utilities.getUuid(); p.setProperty("secret", s); }
  return s;
}
function sign(text) {
  var b = Utilities.computeHmacSha256Signature(text, secret()), h = "";
  for (var i = 0; i < b.length; i++) { var x = (b[i] + 256) % 256; h += (x < 16 ? "0" : "") + x.toString(16); }
  return h;
}
function clsOf(sid) { return String(sid).slice(0, 3); }
function when(ms) { return Utilities.formatDate(new Date(ms), "Asia/Seoul", "yyyy-MM-dd HH:mm"); }
function locked(fn) {
  var lock = LockService.getScriptLock(); lock.waitLock(25000);
  try { return fn(); } finally { lock.releaseLock(); }
}

/* ───── 요청 나누기 ───── */
function route(d) {
  var a = d.a;
  if (a === "signup") return locked(function () { return signup(d); });
  if (a === "login") return locked(function () { return login(d); });
  if (a === "adminLogin") return String(d.pw) === ADMIN_PW ? { ok: true, token: sign("admin:" + ADMIN_PW) } : { ok: false, msg: "관리자 비밀번호가 맞지 않습니다." };
  if (a.indexOf("admin") === 0) {
    if (d.token !== sign("admin:" + ADMIN_PW)) return { ok: false, auth: true, msg: "관리자 로그인이 필요합니다." };
    if (a === "adminData") return adminData(d);
    if (a === "adminAssign") return locked(function () { return adminAssign(d); });
    if (a === "adminDelete") return locked(function () { return adminDelete(d); });
    if (a === "adminResetPw") return locked(function () { return adminResetPw(d); });
    if (a === "adminSheetAdd") return locked(function () { return adminSheetAdd(d); });
    if (a === "adminSheetSet") return locked(function () { return adminSheetSet(d); });
    return { ok: false, msg: "알 수 없는 요청" };
  }
  var sid = String(d.sid || "");
  if (d.token !== sign("s:" + sid)) return { ok: false, auth: true, msg: "다시 로그인하세요." };
  if (a === "me") return { ok: true, assign: assignOf(clsOf(sid)), log: logOf(function (r) { return String(r[1]) === sid; }) };
  if (a === "log") return locked(function () { return addLog(sid, d.items || []); });
  if (a === "changePw") return locked(function () { return changePw(sid, d); });
  return { ok: false, msg: "알 수 없는 요청" };
}

/* ───── 학생 ───── */
function findStudent(sid) {
  var v = rows("students");
  for (var i = 0; i < v.length; i++) if (String(v[i][0]) === sid) return { row: i + 2, name: String(v[i][1]), pw: String(v[i][2]) };
  return null;
}
function signup(d) {
  var sid = String(d.sid || "").trim(), name = String(d.name || "").trim(), pw = String(d.pw || "");
  if (!/^[0-9]{5}$/.test(sid)) return { ok: false, msg: "학번은 숫자 5자리로 입력하세요. (예: 20101)" };
  if (!name) return { ok: false, msg: "이름을 입력하세요." };
  if (pw.length < 4) return { ok: false, msg: "비밀번호는 4글자 이상으로 정하세요." };
  if (findStudent(sid)) return { ok: false, msg: "이미 가입된 학번입니다. 로그인하세요. 내 학번이 맞는데 가입한 적이 없다면 선생님께 말하세요." };
  var now = Date.now();
  var sh = sheet("students");
  sh.appendRow([sid, name, pw, clsOf(sid), when(now), when(now)]);
  setText(sh, sh.getLastRow(), 3, pw);        // 0으로 시작하는 비번(0123 등)이 숫자로 바뀌지 않게 글자로 다시 저장
  writeLog(sid, [{ ts: now, id: "login", group: "접속", title: "회원가입", score: 0, unit: "", pass: false, detail: "" }]);
  return { ok: true, sid: sid, name: name, token: sign("s:" + sid), assign: assignOf(clsOf(sid)) };
}
function login(d) {
  var sid = String(d.sid || "").trim(), name = String(d.name || "").trim(), pw = String(d.pw || "");
  var s = findStudent(sid);
  if (!s) return { ok: false, msg: "가입되지 않은 학번입니다. 먼저 회원가입을 하세요." };
  if (squeeze(s.name) !== squeeze(name)) return { ok: false, msg: "이름이 가입할 때 쓴 이름과 다릅니다. 띄어쓰기 없이 정확히 입력하세요." };
  if (!samePw(s.pw, pw)) return { ok: false, msg: "비밀번호가 맞지 않습니다. 대문자(Caps Lock)가 켜져 있는지 확인하세요. 계속 안 되면 선생님께 말하세요." };
  var now = Date.now();
  sheet("students").getRange(s.row, 6).setValue(when(now));
  writeLog(sid, [{ ts: now, id: "login", group: "접속", title: "로그인", score: 0, unit: "", pass: false, detail: "" }]);
  return { ok: true, sid: sid, name: name, token: sign("s:" + sid), assign: assignOf(clsOf(sid)) };
}

function squeeze(t) { return String(t).replace(/\s+/g, ""); }
/* 시트가 0123 을 123 으로 바꿔 저장한 경우에도 로그인되게 함 */
function samePw(saved, typed) {
  saved = String(saved); typed = String(typed);
  if (saved === typed) return true;
  return /^[0-9]+$/.test(saved) && /^[0-9]+$/.test(typed) && saved.replace(/^0+/, "") === typed.replace(/^0+/, "");
}
function setText(sh, row, col, value) { var r = sh.getRange(row, col); r.setNumberFormat("@"); r.setValue(String(value)); }
function changePw(sid, d) {
  var s = findStudent(sid), now = String(d.oldPw || ""), next = String(d.newPw || "");
  if (!s) return { ok: false, msg: "가입 정보를 찾지 못했습니다. 선생님께 말하세요." };
  if (!samePw(s.pw, now)) return { ok: false, msg: "지금 비밀번호가 맞지 않습니다." };
  if (next.length < 4) return { ok: false, msg: "새 비밀번호는 4글자 이상으로 정하세요." };
  setText(sheet("students"), s.row, 3, next);
  return { ok: true };
}
function adminResetPw(d) {
  var s = findStudent(String(d.sid));
  if (!s) return { ok: false, msg: "그 학번의 학생이 없습니다." };
  setText(sheet("students"), s.row, 3, "1234");
  return { ok: true, pw: "1234" };
}

/* ───── 활동 기록 ───── */
function logOf(test) {
  return rows("log").filter(test).map(function (r) {
    return { ts: Number(r[0]), sid: String(r[1]), id: String(r[3]), group: String(r[4]), title: String(r[5]), score: Number(r[6]), unit: String(r[7]), pass: r[8] === true || r[8] === "TRUE" || r[8] === "true", detail: String(r[9]) };
  });
}
function writeLog(sid, items) {
  var sh = sheet("log"), cls = clsOf(sid);
  items.forEach(function (x) {
    sh.appendRow([Number(x.ts), sid, cls, String(x.id), String(x.group), String(x.title), Number(x.score) || 0, String(x.unit || ""), !!x.pass, String(x.detail || ""), when(Number(x.ts))]);
  });
}
function addLog(sid, items) {
  var have = {};
  rows("log").forEach(function (r) { if (String(r[1]) === sid) have[r[0] + "|" + r[3]] = 1; });
  var fresh = items.slice(0, 200).filter(function (x) { return x && x.id && x.ts && !have[Number(x.ts) + "|" + x.id]; });
  writeLog(sid, fresh);
  return { ok: true, saved: fresh.length, assign: assignOf(clsOf(sid)) };
}

/* ───── 과제 배포 ───── */
function assignOf(cls) {
  return rows("assign").filter(function (r) { return String(r[0]) === String(cls); }).map(function (r) { return String(r[1]); });
}
function adminAssign(d) {
  var cls = String(d.cls), aid = String(d.aid), sh = sheet("assign"), v = rows("assign"), at = -1;
  for (var i = 0; i < v.length; i++) if (String(v[i][0]) === cls && String(v[i][1]) === aid) at = i + 2;
  if (d.on && at < 0) sh.appendRow([cls, aid, when(Date.now())]);
  if (!d.on && at > 0) sh.deleteRow(at);
  return { ok: true, assign: assignOf(cls) };
}

/* ───── 관리자 ───── */
function adminData(d) {
  var st = rows("students"), set = {}, classes = [];
  st.forEach(function (r) { var c = String(r[3]); if (!set[c]) { set[c] = 1; classes.push(c); } });
  rows("assign").forEach(function (r) { var c = String(r[0]); if (!set[c]) { set[c] = 1; classes.push(c); } });
  classes.sort();
  var cls = String(d.cls || classes[0] || "");
  return { ok: true, classes: classes, cls: cls, assign: assignOf(cls),
    students: st.filter(function (r) { return String(r[3]) === cls; }).map(function (r) { return { sid: String(r[0]), name: String(r[1]), pw: String(r[2]), created: String(r[4]), lastLogin: String(r[5]) }; }),
    log: logOf(function (r) { return String(r[2]) === cls; }), sheets: sheetsOf(cls) };
}

/* ───── 수기 작성 과제지 (누구에게 출력해 줬는지, 제출했는지) ───── */
function sheetsOf(cls) {
  return rows("sheets").filter(function (r) { return String(r[1]) === String(cls); }).map(function (r) {
    return { sid: String(r[0]), aid: String(r[2]), printed: String(r[3]), done: String(r[4]) === "제출", doneAt: String(r[5]) };
  });
}
function adminSheetAdd(d) {
  var aid = String(d.aid), sh = sheet("sheets"), have = {}, now = when(Date.now());
  rows("sheets").forEach(function (r) { have[r[0] + "|" + r[2]] = 1; });
  (d.sids || []).forEach(function (sid) { sid = String(sid); if (!have[sid + "|" + aid]) sh.appendRow([sid, clsOf(sid), aid, now, "", ""]); });
  return { ok: true, sheets: sheetsOf(String(d.cls)) };
}
function adminSheetSet(d) {
  var sid = String(d.sid), aid = String(d.aid), sh = sheet("sheets"), v = rows("sheets");
  for (var i = 0; i < v.length; i++) if (String(v[i][0]) === sid && String(v[i][2]) === aid) {
    if (d.remove) sh.deleteRow(i + 2);
    else { sh.getRange(i + 2, 5).setValue(d.done ? "제출" : ""); sh.getRange(i + 2, 6).setValue(d.done ? when(Date.now()) : ""); }
    break;
  }
  return { ok: true, sheets: sheetsOf(clsOf(sid)) };
}
function adminDelete(d) {
  var s = findStudent(String(d.sid));
  if (s) sheet("students").deleteRow(s.row);
  return { ok: true };
}
