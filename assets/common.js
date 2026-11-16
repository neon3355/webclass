/* 화면구현 연습실 공통 스크립트
   - 학번·이름(브라우저에 저장)과 오른쪽 위 표시
   - 활동 기록 저장 (내 과제 현황에서 사용)
   - 기존 형성평가 페이지: 학번·이름 자동 입력, 결과 점수 자동 기록 */
(function () {
  var script = document.currentScript;
  var ROOT = script.src.replace(/assets\/common\.js.*$/, "");
  var CFG = window.WC_CONFIG || { siteName: "화면구현 연습실", apiUrl: "" };
  var store = {
    get: function (k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } }
  };
  var mem = {};   // localStorage를 쓸 수 없을 때 대신 쓰는 임시 저장

  function lsGet(k) { return store.get(k) || mem[k] || null; }
  function lsSet(k, v) { mem[k] = v; store.set(k, v); }

  var WC = window.WC = {
    root: ROOT, config: CFG, online: !!CFG.apiUrl,
    user: function () { return lsGet("wc_user"); },
    setUser: function (u) { lsSet("wc_user", u); return u; },   // u = {sid, name, token, assign}
    clearUser: function () { mem.wc_user = null; try { localStorage.removeItem("wc_user"); } catch (e) {} },
    /* 학번 20401 → 반 코드 "204", 표시 "2-4" */
    clsOf: function (sid) { return String(sid).slice(0, 3); },
    clsName: function (cls) { cls = String(cls); return cls.charAt(0) + "-" + parseInt(cls.slice(1), 10); },
    today: function (d) { d = d ? new Date(d) : new Date(); return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); },
    stamp: function (d) { d = new Date(d); return WC.today(d) + " " + pad(d.getHours()) + ":" + pad(d.getMinutes()); },
    mmss: function (ms) { var s = Math.floor(ms / 1000); return pad(Math.floor(s / 60)) + ":" + pad(s % 60); },

    /* 서버(구글 시트) 호출 */
    api: function (action, data) {
      data = data || {}; data.a = action;
      return fetch(CFG.apiUrl, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(data) })
        .then(function (r) { return r.json(); });
    },

    /* 활동 기록: 한 번 끝낼 때마다 한 줄씩 쌓고, 거기서 최고·최근·횟수를 계산 */
    log: function () { var u = WC.user(); return u ? (lsGet("wc_log:" + u.sid) || []) : []; },
    summarize: function (log) {
      var all = {};
      log.slice().sort(function (a, b) { return a.ts - b.ts; }).forEach(function (x) {
        if (x.group === "접속") return;
        if (x.id.indexOf("quiz:") === 0) return;      // 형성평가를 다시 구성하기 전의 기록은 세지 않음
        var o = all[x.id];
        if (!o) o = all[x.id] = { best: -1, count: 0, pass: false };
        o.group = x.group; o.title = x.title; o.unit = x.unit || "점"; o.last = x.score; o.lastDetail = x.detail || ""; o.lastTs = x.ts; o.count++;
        if (x.score > o.best) { o.best = x.score; o.bestDetail = x.detail || ""; o.bestTs = x.ts; }
        if (x.pass) o.pass = true;
      });
      return all;
    },
    records: function () { return WC.summarize(WC.log()); },
    addRecord: function (id, r) {     // r = {group, title, score, unit, detail, pass}
      var u = WC.user(); if (!u) return;
      var x = { ts: Date.now(), id: id, group: r.group, title: r.title, score: r.score, unit: r.unit || "점", pass: !!r.pass, detail: r.detail || "" };
      var log = WC.log(); log.push(x); lsSet("wc_log:" + u.sid, log);
      if (WC.online && !u.demo) { var q = lsGet("wc_q:" + u.sid) || []; q.push(x); lsSet("wc_q:" + u.sid, q); WC.flush(); }
    },
    /* 아직 서버에 못 보낸 기록 보내기 */
    flush: function () {
      var u = WC.user(); if (!u || !WC.online || u.demo) return Promise.resolve();
      var q = lsGet("wc_q:" + u.sid) || []; if (!q.length) return Promise.resolve();
      return WC.api("log", { sid: u.sid, token: u.token, items: q }).then(function (res) {
        if (!res.ok) { if (res.auth) WC.toast("로그인이 풀렸습니다. 다시 로그인하세요."); return; }
        var sent = {}; q.forEach(function (x) { sent[x.ts + "|" + x.id] = 1; });
        lsSet("wc_q:" + u.sid, (lsGet("wc_q:" + u.sid) || []).filter(function (x) { return !sent[x.ts + "|" + x.id]; }));
        if (res.assign) { u.assign = res.assign; WC.setUser(u); }
      }).catch(function () {});
    },
    /* 서버 기록과 배포된 과제를 내려받기 */
    sync: function () {
      var u = WC.user(); if (!u || !WC.online || u.demo) return Promise.resolve(false);
      return WC.flush().then(function () { return WC.api("me", { sid: u.sid, token: u.token }); }).then(function (res) {
        if (!res.ok) return false;
        var q = lsGet("wc_q:" + u.sid) || [], have = {};
        res.log.forEach(function (x) { have[x.ts + "|" + x.id] = 1; });
        lsSet("wc_log:" + u.sid, res.log.concat(q.filter(function (x) { return !have[x.ts + "|" + x.id]; })));
        u.assign = res.assign; WC.setUser(u);
        return true;
      }).catch(function () { return false; });
    },
    /* 이 학생에게 보이는 과제 목록 (서버가 없으면 전부) */
    assignments: function () {
      var all = window.WC_ASSIGNMENTS || [], u = WC.user();
      if (!WC.online && !(u && u.demo)) return all;
      var on = (u && u.assign) || [];
      return on.map(function (id) { return all.filter(function (a) { return a.id === id; })[0]; }).filter(Boolean);
    },
    /* 이 학생에게 열린 형성평가 단원 (서버가 없으면 전부). 배포 목록에는 "q:단원id" 로 저장됨 */
    quizUnits: function () {
      var all = window.WC_QUIZ_UNITS || [], u = WC.user();
      if (!WC.online && !(u && u.demo)) return all;
      var on = (u && u.assign) || [];
      return all.filter(function (x) { return on.indexOf("q:" + x.id) >= 0; });
    },
    /* 완주 현황: 배포된 과제(파일마다 보고·외워·백지)와 형성평가 단원, 종합 복습을 얼마나 끝냈는지.
       rec = 기록 요약, assign = 배포 목록(없으면 전부). 돌려주는 값: { done, total, pct, groups:[{name, parts:[{label, done, total}]}] } */
    progress: function (rec, assign) {
      /* 파일 하나의 점수 = 도달한 가장 높은 단계. 백지 쓰기를 통과하면 보고·외워 쓰기를 안 했어도 100점 */
      var SC = CFG.fileScore || { see: 40, mem: 70, blank: 100 };
      var As = window.WC_ASSIGNMENTS || [], Us = window.WC_QUIZ_UNITS || [], groups = [], done = 0, total = 0, asg = {};
      if (assign) { As = assign.map(function (id) { return As.filter(function (a) { return a.id === id; })[0]; }).filter(Boolean); Us = Us.filter(function (x) { return assign.indexOf("q:" + x.id) >= 0; }); }
      As.forEach(function (A) {
        var cnt = [0, 0, 0], sum = 0;
        A.files.forEach(function (f) {
          var r1 = rec["code:" + A.id + ":" + f.id + ":1"], r2 = rec["code:" + A.id + ":" + f.id + ":2"], r3 = rec["code:" + A.id + ":" + f.id + ":3"];
          var p1 = !!r1 || !!r2 || !!r3, p2 = !!(r2 && r2.pass), p3 = !!(r3 && r3.pass);   // 도움 받아 끝낸 외워·백지 쓰기는 보고 쓰기 단계로 계산
          if (p3) p2 = true;        // 백지 쓰기를 통과한 파일은 아래 단계도 끝낸 것으로 센다
          if (p1) cnt[0]++; if (p2) cnt[1]++; if (p3) cnt[2]++;
          sum += p3 ? SC.blank : p2 ? SC.mem : p1 ? SC.see : 0;
        });
        done += sum / 100; total += A.files.length;
        asg[A.id] = Math.round(sum / A.files.length);
        groups.push({ name: A.name, pct: asg[A.id], parts: [{ label: "백지 쓰기", done: cnt[2], total: A.files.length }, { label: "외워 쓰기", done: cnt[1], total: A.files.length }, { label: "보고 쓰기", done: cnt[0], total: A.files.length }] });
      });
      if (Us.length) {
        var n = 0; Us.forEach(function (x) { var r = rec["quiz2:" + x.id]; if (r && r.pass) n++; });
        var parts = [{ label: "단원 통과", done: n, total: Us.length }], qd = n, qt = Us.length;
        if (Us.some(function (x) { return x.kind === "mcq"; })) { var rv = rec["quiz2:review"], ok = rv && rv.pass ? 1 : 0; parts.push({ label: "종합 복습", done: ok, total: 1 }); qd += ok; qt += 1; }
        done += qd; total += qt;
        groups.push({ name: "형성평가", pct: Math.round(qd / qt * 100), parts: parts });
      }
      return { total: total, pct: total ? Math.round(done / total * 100) : 0, groups: groups, asg: asg, score: SC };
    },
    /* 시연 모드: 선생님이 학생 화면을 미리 보거나 수업에서 보여 줄 때. 기록은 이 브라우저에만 남고 서버로 가지 않는다 */
    startDemo: function (assign) {
      ["wc_log:", "wc_q:", "wc_wrong:", "wc_write:"].forEach(function (k) { mem[k + "00000"] = null; try { localStorage.removeItem(k + "00000"); } catch (e) {} });
      WC.setUser({ sid: "00000", name: "선생님", demo: true, assign: assign });
    },
    /* 틀린 문제 기억 (종합 복습에서 먼저 출제) */
    wrong: function () { var u = WC.user(); return u ? (lsGet("wc_wrong:" + u.sid) || {}) : {}; },
    setWrong: function (m) { var u = WC.user(); if (u) lsSet("wc_wrong:" + u.sid, m); },
    /* 붙여넣기·끌어다 놓기 차단 */
    blockPaste: function () {
      function block(e) { e.preventDefault(); WC.toast("복사·붙여넣기는 쓸 수 없습니다. 직접 입력하세요."); }
      ["copy", "cut", "paste", "drop", "dragstart"].forEach(function (t) { document.addEventListener(t, block, true); });
      document.addEventListener("beforeinput", function (e) { if (/^insertFrom(Paste|Drop|Yank)/.test(e.inputType || "")) block(e); }, true);
    },
    toast: function (msg) {
      var t = document.getElementById("wcToast");
      if (!t) { t = document.createElement("div"); t.id = "wcToast"; t.className = "wc-toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
      t.textContent = msg; t.hidden = false;
      clearTimeout(WC._tt); WC._tt = setTimeout(function () { t.hidden = true; }, 2400);
    }
  };
  function pad(n) { return (n < 10 ? "0" : "") + n; }

  /* ───── 상단 바 ───── */
  var css = "" +
    ".wc-bar{position:sticky;top:0;z-index:30;display:flex;align-items:center;gap:6px 14px;flex-wrap:wrap;padding:8px 16px;background:#16324f;color:#fff;font:14px/1.4 -apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo','Malgun Gothic','Noto Sans KR',sans-serif}" +
    ".wc-bar a{color:#fff;text-decoration:none}" +
    ".wc-bar .wc-home{font-weight:800;font-size:15px;margin-right:6px}" +
    ".wc-bar nav{display:flex;gap:4px;flex-wrap:wrap}" +
    ".wc-bar nav a{padding:4px 10px;border-radius:999px;color:#cfe0f2}" +
    ".wc-bar nav a:hover,.wc-bar nav a[aria-current=page]{background:#274a70;color:#fff}" +
    ".wc-bar .wc-user{margin-left:auto;display:flex;align-items:center;gap:8px}" +
    ".wc-bar .wc-chip{background:#fff;color:#16324f;font-weight:800;padding:4px 12px;border-radius:999px;font-variant-numeric:tabular-nums}" +
    ".wc-bar button{font:inherit;font-size:12px;color:#cfe0f2;background:transparent;border:1px solid #5d7b9c;border-radius:999px;padding:3px 9px;cursor:pointer}" +
    ".wc-bar a:focus-visible,.wc-bar button:focus-visible{outline:2px solid #ffd166;outline-offset:2px}" +
    ".wc-toast{position:fixed;left:50%;bottom:90px;transform:translateX(-50%);background:#c93a3a;color:#fff;padding:8px 14px;border-radius:8px;font:14px/1.4 sans-serif;z-index:60;max-width:calc(100% - 32px)}" +
    ".wc-toast[hidden]{display:none}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  function bar() {
    var u = WC.user();
    var b = document.createElement("div"); b.className = "wc-bar";
    var here = location.pathname;
    function link(href, text) {
      var a = document.createElement("a"); a.href = ROOT + href; a.textContent = text;
      if (href && here.indexOf("/" + href.replace(/index\.html$/, "")) >= 0) a.setAttribute("aria-current", "page");
      return a;
    }
    var home = link("index.html", CFG.siteName); home.className = "wc-home"; home.removeAttribute("aria-current");
    b.appendChild(home);
    var nav = document.createElement("nav"); nav.setAttribute("aria-label", "메뉴");
    [["typing/index.html", "타자 연습"], ["code/index.html", "코드 연습"], ["quiz/index.html", "형성평가"], ["report/index.html", "내 과제"]].forEach(function (x) { nav.appendChild(link(x[0], x[1])); });
    b.appendChild(nav);
    var right = document.createElement("div"); right.className = "wc-user";
    if (u) {
      var chip = document.createElement("span"); chip.className = "wc-chip"; chip.id = "wcUserChip"; chip.textContent = u.demo ? "시연 중 · " + u.name : u.sid + " " + u.name;
      var out = document.createElement("button"); out.type = "button"; out.textContent = u.demo ? "시연 끝내기" : WC.online ? "로그아웃" : "바꾸기";
      out.addEventListener("click", function () { WC.clearUser(); location.href = ROOT + (u.demo ? "admin/index.html" : "index.html"); });
      right.appendChild(chip); right.appendChild(out);
    }
    b.appendChild(right);
    document.body.insertBefore(b, document.body.firstChild);
  }

  /* ───── 기존 형성평가 페이지 연결 ───── */
  function legacy() {
    var u = WC.user(); if (!u) return;
    var sid = document.getElementById("sid"), sname = document.getElementById("sname");
    if (sid && sname && !document.body.hasAttribute("data-wc-page")) {
      sid.value = u.sid; sname.value = u.name; sid.readOnly = true; sname.readOnly = true;
      [sid, sname].forEach(function (x) { x.dispatchEvent(new Event("input", { bubbles: true })); });
    }
    if (document.body.hasAttribute("data-wc-page")) return;   // 새 페이지는 스스로 기록함
    var seen = {};
    function scan() {
      var nodes = document.querySelectorAll(".score, .big2");
      Array.prototype.forEach.call(nodes, function (sc) {
        if (!sc.offsetParent || !sc.textContent.trim()) return;      // 화면에 보이는 결과만
        var res = sc.closest ? (sc.closest(".result") || sc.parentNode) : sc.parentNode;
        var score = sc.classList.contains("big2") ? 100 : parseInt(sc.textContent, 10);
        if (isNaN(score)) return;
        var rt = res.querySelector(".rtitle"), title = rt ? rt.textContent.replace(/\s*결과\s*/, " ").trim() : "";
        if (title.length < 8) title = document.title;                 // "형성평가 결과"처럼 짧은 제목은 문서 제목 사용
        var unit = document.body.getAttribute("data-wc-quiz");
        var id = unit ? "quiz2:" + unit : "quiz2:" + location.pathname.replace(/index\.html$/, "") + "#" + (res.id || "r");
        var passAt = Number(document.body.getAttribute("data-wc-pass") || 100);
        var sig = id + "|" + score + "|" + res.textContent.length;
        if (seen[sig]) return; seen[sig] = true;
        WC.addRecord(id, { group: "형성평가", title: title, score: score, unit: "점", pass: score >= passAt, detail: "" });
      });
    }
    var t = null;
    new MutationObserver(function () { clearTimeout(t); t = setTimeout(scan, 400); }).observe(document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ["hidden"] });
  }

  function init() {
    var isHome = document.body.hasAttribute("data-wc-home");
    if (!WC.user() && !isHome) { location.replace(ROOT + "index.html"); return; }
    bar(); legacy(); WC.flush();
    document.dispatchEvent(new Event("wc-ready"));
  }
  if (document.body) init(); else document.addEventListener("DOMContentLoaded", init);
})();
