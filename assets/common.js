/* 화면구현 연습실 공통 스크립트
   - 학번·이름(브라우저에 저장)과 오른쪽 위 표시
   - 활동 기록 저장 (내 과제 현황에서 사용)
   - 기존 형성평가 페이지: 학번·이름 자동 입력, 결과 점수 자동 기록 */
(function () {
  var script = document.currentScript;
  var ROOT = script.src.replace(/assets\/common\.js.*$/, "");
  var CFG = window.WC_CONFIG || { siteName: "화면구현 연습실", submitUrl: "" };
  var store = {
    get: function (k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } }
  };
  var mem = {};   // localStorage를 쓸 수 없을 때 대신 쓰는 임시 저장

  var WC = window.WC = {
    root: ROOT, config: CFG,
    user: function () { return store.get("wc_user") || mem.user || null; },
    setUser: function (sid, name) { var u = { sid: sid, name: name }; mem.user = u; store.set("wc_user", u); return u; },
    clearUser: function () { mem.user = null; try { localStorage.removeItem("wc_user"); } catch (e) {} },
    today: function (d) { d = d || new Date(); return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); },
    stamp: function (d) { d = new Date(d); return WC.today(d) + " " + pad(d.getHours()) + ":" + pad(d.getMinutes()); },
    mmss: function (ms) { var s = Math.floor(ms / 1000); return pad(Math.floor(s / 60)) + ":" + pad(s % 60); },

    /* 기록: id별로 최고 점수·최근 점수·횟수를 보관 */
    records: function () { var u = WC.user(); if (!u) return {}; return store.get("wc_rec:" + u.sid) || mem["rec:" + u.sid] || {}; },
    addRecord: function (id, r) {     // r = {group, title, score, unit, detail, pass}
      var u = WC.user(); if (!u) return;
      var all = WC.records(), old = all[id], now = Date.now();
      var rec = { group: r.group, title: r.title, unit: r.unit || "점", last: r.score, lastDetail: r.detail || "", lastTs: now,
        best: old && old.best > r.score ? old.best : r.score,
        bestDetail: old && old.best > r.score ? old.bestDetail : (r.detail || ""),
        bestTs: old && old.best > r.score ? old.bestTs : now,
        pass: !!(r.pass || (old && old.pass)), count: (old ? old.count : 0) + 1 };
      all[id] = rec; mem["rec:" + u.sid] = all; store.set("wc_rec:" + u.sid, all);
      return rec;
    },
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
      var chip = document.createElement("span"); chip.className = "wc-chip"; chip.id = "wcUserChip"; chip.textContent = u.sid + " " + u.name;
      var out = document.createElement("button"); out.type = "button"; out.textContent = "바꾸기";
      out.addEventListener("click", function () { WC.clearUser(); location.href = ROOT + "index.html"; });
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
        var id = "quiz:" + location.pathname.replace(/index\.html$/, "") + "#" + (res.id || "r");
        var sig = id + "|" + score + "|" + res.textContent.length;
        if (seen[sig]) return; seen[sig] = true;
        WC.addRecord(id, { group: "형성평가", title: title, score: score, unit: "점", pass: score >= 100, detail: "" });
      });
    }
    var t = null;
    new MutationObserver(function () { clearTimeout(t); t = setTimeout(scan, 400); }).observe(document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ["hidden"] });
  }

  function init() {
    var isHome = document.body.hasAttribute("data-wc-home");
    if (!WC.user() && !isHome) { location.replace(ROOT + "index.html"); return; }
    bar(); legacy();
    document.dispatchEvent(new Event("wc-ready"));
  }
  if (document.body) init(); else document.addEventListener("DOMContentLoaded", init);
})();
