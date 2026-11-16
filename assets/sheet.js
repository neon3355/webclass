/* 수기 작성 과제지 만들기 (관리자 화면에서 사용)
   A4 한 쪽씩 직접 나누어 담고, 쪽마다 아래에 "학번 이름 · 과제 · 1 / 4" 를 찍습니다.
   종이 여백을 0으로 해서 브라우저가 주소·날짜를 찍지 못하게 합니다. */
function wcSheetHtml(A, students, dateText) {
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  var out = "";
  students.forEach(function (st) {
    function fill(s) { return s.replace(/\{sid\}/g, st.sid).replace(/\{name\}/g, st.name); }
    function row(l, n) {
      if (l.auto) return '<div class="r auto"><code>' + esc(l.auto) + '</code></div>';
      return '<div class="r"><i>' + n + '</i><div><code style="padding-left:' + (l.in || 0) * 1.2 + 'em">' + esc(fill(l.t)) + '</code><span class="w"></span></div></div>';
    }
    out += '<div class="src" data-foot="' + esc(st.sid + " " + st.name + " · " + A.name) + '">';
    out += '<header class="top"><div><p class="k">수기 작성 과제지 · ' + esc(A.name) + '</p><h1>' + esc(A.title) + '</h1></div>' +
      '<table class="who"><tr><th>학번</th><td>' + esc(st.sid) + '</td><th>이름</th><td>' + esc(st.name) + '</td></tr><tr><th>날짜</th><td>' + esc(dateText) + '</td><th>확인</th><td></td></tr></table></header>' +
      '<p class="how">인쇄된 코드를 보고 바로 아래 줄에 <b>똑같이</b> 손으로 옮겨 쓰세요. 기호( &lt; &gt; " = ; : { } )와 띄어쓰기, 대소문자까지 그대로 씁니다. 회색 줄은 Eclipse가 자동으로 만들어 주는 줄이라 쓰지 않습니다.</p>';
    A.files.forEach(function (f) {
      var n = 0, lines = f.lines.filter(function (l) { return !l.blank; });
      var head = '<h2 class="fh">' + esc(f.name) + ' <span>' + esc(f.desc) + ' · 쓰는 줄 ' + lines.filter(function (l) { return l.t; }).length + '개</span></h2>';
      var body = lines.map(function (l) { if (l.t) n++; return row(l, n); });
      if (f.id === "style") out += '<div class="file two">' + head + '<div class="rows">' + body.join("") + '</div></div>';   // 2단, 한 덩어리
      else out += head + body.join("");
    });
    out += '</div>';
  });
  var css = '@page { size: A4; margin: 0; }' +
    '* { box-sizing: border-box; } html, body { margin: 0; padding: 0; } body { font-family: "Malgun Gothic", "Noto Sans KR", "Noto Sans CJK KR", sans-serif; font-size: 10pt; color: #000; }' +
    '.page { width: 210mm; height: 296mm; padding: 12mm 12mm 0; break-after: page; overflow: hidden; display: flex; flex-direction: column; }' +
    '.page:last-child { break-after: auto; }' +
    '.page .body { flex: 1 1 auto; height: 0; overflow: hidden; }' +
    '.page .foot { flex: 0 0 11mm; border-top: 1px solid #000; padding-top: 1.2mm; font-size: 9pt; display: flex; justify-content: space-between; }' +
    '.page .foot b { font-size: 10.5pt; }' +
    '.src { width: 186mm; }' +
    '.top { display: flex; justify-content: space-between; align-items: flex-end; gap: 10mm; border-bottom: 2px solid #000; padding-bottom: 2mm; }' +
    '.top .k { margin: 0; font-size: 9pt; } .top h1 { margin: 0; font-size: 15pt; }' +
    '.who { border-collapse: collapse; font-size: 9.5pt; } .who th, .who td { border: 1px solid #000; padding: 1mm 2.5mm; } .who th { background: #eee; font-weight: 700; } .who td { min-width: 24mm; height: 7mm; }' +
    '.how { margin: 2mm 0 0; font-size: 8.5pt; }' +
    '.fh { margin: 4mm 0 1mm; font-size: 11.5pt; font-family: Consolas, "D2Coding", "DejaVu Sans Mono", monospace; background: #000; color: #fff; padding: 1mm 3mm; -webkit-print-color-adjust: exact; print-color-adjust: exact; }' +
    '.body > .fh:first-child { margin-top: 0; }' +
    '.fh span { font-family: "Malgun Gothic", "Noto Sans KR", "Noto Sans CJK KR", sans-serif; font-size: 8.5pt; font-weight: 400; margin-left: 2mm; }' +
    '.file.two .rows { column-count: 2; column-gap: 8mm; column-rule: 1px solid #999; }' +
    '.file.two .r { padding-top: .5mm; break-inside: avoid; } .file.two .r .w { height: 5.9mm; }' +
    '.r { display: grid; grid-template-columns: 6mm 1fr; padding-top: 1mm; }' +
    '.r i { font-style: normal; font-size: 7.5pt; color: #555; text-align: right; padding-right: 1.5mm; padding-top: .6mm; }' +
    '.r code { display: block; font-family: Consolas, "D2Coding", "DejaVu Sans Mono", monospace; font-size: 9.5pt; white-space: pre-wrap; word-break: break-all; }' +
    '.r .w { display: block; height: 6.6mm; border-bottom: 1px solid #000; }' +
    '.r.auto { display: block; padding: .3mm 0 0 6mm; } .r.auto code { color: #888; font-size: 7.5pt; font-style: italic; line-height: 1.15; }';
  /* 쪽 나누기: 한 덩어리씩 담아 보고 넘치면 다음 쪽으로 */
  var js = '(function(){var srcs=[].slice.call(document.querySelectorAll(".src"));srcs.forEach(function(src){' +
    'var units=[].slice.call(src.children),pages=[],cur=null;' +
    'function np(){var p=document.createElement("div");p.className="page";var b=document.createElement("div");b.className="body";var f=document.createElement("div");f.className="foot";p.appendChild(b);p.appendChild(f);document.body.insertBefore(p,src);pages.push(p);cur=b;}' +
    'np();units.forEach(function(u){cur.appendChild(u);if(cur.scrollHeight>cur.clientHeight+1&&cur.children.length>1){cur.removeChild(u);' +
    /* 파일 제목만 쪽 끝에 남지 않게: 제목 뒤에 쓰는 줄이 하나도 없으면 제목부터 다음 쪽으로 */
    'var kids=[].slice.call(cur.children),k=kids.length-1,carry=[];while(k>=0&&!kids[k].classList.contains("fh")&&kids[k].classList.contains("auto"))k--;' +
    'if(k>0&&kids[k].classList.contains("fh")){carry=kids.slice(k);carry.forEach(function(c){cur.removeChild(c);});}' +
    'np();carry.forEach(function(c){cur.appendChild(c);});cur.appendChild(u);}});' +
    'pages.forEach(function(p,i){p.querySelector(".foot").innerHTML="<span>"+src.getAttribute("data-foot").replace(/&/g,"&amp;").replace(/</g,"&lt;")+"</span><b>"+(i+1)+" / "+pages.length+"</b>";});' +
    'src.parentNode.removeChild(src);});})();';
  return '<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><title>수기 작성 과제지</title><style>' + css + '</style></head><body>' + out + '<script>' + js + '<\/script></body></html>';
}
if (typeof module !== "undefined") module.exports = wcSheetHtml;
