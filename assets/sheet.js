/* 수기 작성 과제지 만들기 — 관리자 화면에 그대로 넣을 함수 */
function wcSheetHtml(A, students, dateText) {
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  var out = "";
  students.forEach(function (st) {
    function fill(s) { return s.replace(/\{sid\}/g, st.sid).replace(/\{name\}/g, st.name); }
    /* 쪽 여백을 0으로 하고(브라우저가 주소·쪽 번호를 찍지 못하게) 여백은 표의 머리·꼬리 칸으로 쪽마다 넣음 */
    out += '<table class="stu"><thead><tr><td class="gap"></td></tr></thead><tfoot><tr><td class="gap"></td></tr></tfoot><tbody><tr><td class="pg">';
    out += '<header class="top"><div><p class="k">수기 작성 과제지 · ' + esc(A.name) + '</p><h1>' + esc(A.title) + '</h1></div>' +
      '<table class="who"><tr><th>학번</th><td>' + esc(st.sid) + '</td><th>이름</th><td>' + esc(st.name) + '</td></tr><tr><th>날짜</th><td>' + esc(dateText) + '</td><th>확인</th><td></td></tr></table></header>' +
      '<p class="how">인쇄된 코드를 보고 바로 아래 줄에 <b>똑같이</b> 손으로 옮겨 쓰세요. 기호( &lt; &gt; " = ; : { } )와 띄어쓰기, 대소문자까지 그대로 씁니다. 회색 줄은 Eclipse가 자동으로 만들어 주는 줄이라 쓰지 않습니다.</p>';
    A.files.forEach(function (f) {
      var n = 0;
      out += '<div class="file' + (f.id === "style" ? " two" : "") + (f.lines.filter(function (l) { return l.t; }).length <= 8 ? " small" : "") + '"><h2>' + esc(f.name) + ' <span>' + esc(f.desc) + ' · 쓰는 줄 ' + f.lines.filter(function (l) { return l.t; }).length + '개</span></h2><div class="rows">';
      f.lines.forEach(function (l) {
        if (l.blank) return;
        if (l.auto) { out += '<div class="r auto"><code>' + esc(l.auto) + '</code></div>'; return; }
        n++;
        out += '<div class="r"><i>' + n + '</i><div><code style="padding-left:' + (l.in || 0) * 1.2 + 'em">' + esc(fill(l.t)) + '</code><span class="w"></span></div></div>';
      });
      out += '</div></div>';
    });
    out += '</td></tr></tbody></table>';
  });
  return '<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><title>수기 작성 과제지</title><style>' +
    '@page { size: A4; margin: 0; }' +
    '* { box-sizing: border-box; } body { margin: 0; font-family: "Malgun Gothic", "Noto Sans KR", "Noto Sans CJK KR", sans-serif; font-size: 10pt; color: #000; }' +
    '.stu { break-after: page; width: 100%; border-collapse: collapse; table-layout: fixed; } .stu:last-child { break-after: auto; }' +
    '.stu td.gap { height: 12mm; padding: 0; } .stu td.pg { padding: 0 12mm; vertical-align: top; }' +
    '.top { display: flex; justify-content: space-between; align-items: flex-end; gap: 10mm; border-bottom: 2px solid #000; padding-bottom: 2mm; }' +
    '.top .k { margin: 0; font-size: 9pt; } .top h1 { margin: 0; font-size: 15pt; }' +
    '.who { border-collapse: collapse; font-size: 9.5pt; } .who th, .who td { border: 1px solid #000; padding: 1mm 2.5mm; } .who th { background: #eee; font-weight: 700; } .who td { min-width: 24mm; height: 7mm; }' +
    '.how { margin: 2mm 0 0; font-size: 8.5pt; }' +
    '.file { margin-top: 4mm; } .file.small { break-inside: avoid; } .file h2 { margin: 0 0 1mm; font-size: 11.5pt; font-family: Consolas, "D2Coding", "DejaVu Sans Mono", monospace; background: #000; color: #fff; padding: 1mm 3mm; break-after: avoid; }' +
    '.file h2 span { font-family: "Malgun Gothic", "Noto Sans KR", "Noto Sans CJK KR", sans-serif; font-size: 8.5pt; font-weight: 400; margin-left: 2mm; }' +
    '.file.two .rows { column-count: 2; column-gap: 8mm; column-rule: 1px solid #999; }' +
    '.file.two .r { padding-top: .5mm; } .file.two .r .w { height: 5.9mm; }' +
    '.r { display: grid; grid-template-columns: 6mm 1fr; break-inside: avoid; padding-top: 1mm; }' +
    '.r i { font-style: normal; font-size: 7.5pt; color: #555; text-align: right; padding-right: 1.5mm; padding-top: .6mm; }' +
    '.r code { display: block; font-family: Consolas, "D2Coding", "DejaVu Sans Mono", monospace; font-size: 9.5pt; white-space: pre-wrap; word-break: break-all; }' +
    '.r .w { display: block; height: 6.6mm; border-bottom: 1px solid #000; }' +
    '.r.auto { display: block; padding: .3mm 0 0 6mm; } .r.auto code { color: #888; font-size: 7.5pt; font-style: italic; line-height: 1.15; }' +
    '</style></head><body>' + out + '</body></html>';
}
if (typeof module !== "undefined") module.exports = wcSheetHtml;
