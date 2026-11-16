/* 형성평가 문제 은행 — 단원(u): html / css / jsp
   문제 하나 = { id, u, lv, q(질문), code(보여 줄 코드), codeOpts(보기를 코드 글꼴로), opts(보기 4개), ans(정답 번호 0~3), basis(정답 근거), why(보기별 오답 이유) }
   id 는 바꾸지 마세요(틀린 문제 기록에 쓰입니다). */
window.WC_QUIZ_UNITS = [
  { id: "html", name: "HTML 태그와 입력 화면", desc: "form · table · tr · th · td · input · a · h2", kind: "mcq", count: 16 },
  { id: "css", name: "style.css", desc: "position · top · width · height · background-color · text-align · class", kind: "mcq", count: 20 },
  { id: "jsp", name: "JSP 페이지 구성", desc: "header.jsp · footer.jsp · jsp:include · link · 파일 이름", kind: "mcq", count: 11 },
  { id: "write", name: "코드 직접 쓰기", desc: "한 줄씩 직접 쓰는 20문제 · 힌트와 해설", kind: "page", href: "write/index.html" },
  { id: "devenv", name: "개발환경 구축", desc: "Eclipse · Tomcat · Oracle 연결 · 낱말로 답하는 20문제", kind: "page", href: "devenv/index.html", optional: true }
];
window.WC_QUIZ_PASS = 90;        // 통과 점수
window.WC_QUIZ_REVIEW = 20;      // 종합 복습 문제 수
window.WC_QUIZ = [
 {
  "id": "basic-1",
  "u": "jsp",
  "lv": "쉬움",
  "q": "모든 페이지의 위쪽에 공통 파일 header.jsp를 불러오려고 한다. 올바른 코드는?",
  "code": null,
  "codeOpts": true,
  "opts": [
   "<jsp:include page=\"header.jsp\"></jsp:include>",
   "<jsp:include href=\"header.jsp\"></jsp:include>",
   "<include page=\"header.jsp\"></include>",
   "<jsp:include page=\"header\"></jsp:include>"
  ],
  "ans": 0,
  "basis": "공통 파일은 jsp:include 태그를 쓰고, page 속성에 불러올 파일 이름을 확장자 .jsp까지 정확하게 적는다.",
  "why": [
   null,
   "href는 a 태그(페이지 이동)와 link 태그(CSS 연결)에서 쓰는 속성이다. jsp:include는 page 속성을 사용한다.",
   "태그 이름 앞의 jsp: 가 빠졌다. 공통 파일을 불러오는 태그는 반드시 jsp:include로 써야 한다.",
   "파일 이름에 .jsp가 빠졌다. page에는 실제 파일 이름과 똑같이 header.jsp라고 적어야 한다."
  ]
 },
 {
  "id": "basic-2",
  "u": "html",
  "lv": "쉬움",
  "q": "등록 화면에서 여러 입력칸과 버튼을 하나의 입력 양식으로 묶으려고 한다. ????? 자리에 들어갈 태그는?",
  "code": "<?????>\n    <table border=\"1\">\n        <tr>\n            <th>성명</th>\n            <td><input type=\"text\" name=\"name\"></td>\n        </tr>\n        ...\n    </table>\n</?????>",
  "codeOpts": true,
  "opts": [
   "section",
   "table",
   "form",
   "input"
  ],
  "ans": 2,
  "basis": "form은 여러 입력칸(input)과 버튼을 하나의 입력 양식으로 묶어 주는 태그이다. 등록 화면과 수정 화면은 form 안에 table을 넣어 만든다.",
  "why": [
   "section은 header, nav, footer와 구분되는 본문 영역을 나누는 태그이다. 입력 양식을 묶지는 않는다.",
   "table은 이미 form 안쪽에 있다. table은 입력칸을 표 모양으로 배치할 뿐, 입력 양식으로 묶는 역할은 form이 한다.",
   null,
   "input은 입력칸이나 버튼 하나를 만드는 태그이고, 닫는 태그가 없어 다른 태그를 감쌀 수 없다."
  ]
 },
 {
  "id": "basic-3",
  "u": "html",
  "lv": "쉬움",
  "q": "목록조회 화면에서 수험번호 2026001을 클릭하면 update.jsp로 이동하게 하려고 한다. 올바른 코드는?",
  "code": null,
  "codeOpts": true,
  "opts": [
   "<td><a link=\"update.jsp\">2026001</a></td>",
   "<td><a href=\"update.jsp\">2026001</a></td>",
   "<td href=\"update.jsp\">2026001</td>",
   "<td><a src=\"update.jsp\">2026001</a></td>"
  ],
  "ans": 1,
  "basis": "페이지 이동은 a 태그의 href 속성에 이동할 파일 이름을 적는다. a 태그는 nav뿐 아니라 td 안에도 쓸 수 있다.",
  "why": [
   "a 태그에는 link라는 속성이 없다. 이동할 주소는 href에 적는다.",
   null,
   "td 태그에 href를 써도 클릭해서 이동하지 않는다. 클릭으로 이동하려면 td 안에 a 태그를 넣어야 한다.",
   "src는 페이지 이동에 쓰는 속성이 아니다. a 태그로 이동할 때는 href를 쓴다."
  ]
 },
 {
  "id": "basic-4",
  "u": "jsp",
  "lv": "쉬움",
  "q": "header.jsp에서 디자인 파일 style.css를 연결하려고 한다. 올바른 코드는?",
  "code": null,
  "codeOpts": true,
  "opts": [
   "<link src=\"style.css\" rel=\"stylesheet\">",
   "<style href=\"style.css\">",
   "<link href=\"style.jsp\" rel=\"stylesheet\">",
   "<link href=\"style.css\" rel=\"stylesheet\">"
  ],
  "ans": 3,
  "basis": "CSS 파일은 link 태그로 연결하며, href=\"style.css\"(파일 위치)와 rel=\"stylesheet\"(디자인 파일이라는 뜻)를 함께 쓴다.",
  "why": [
   "link 태그는 파일 위치를 src가 아니라 href에 적는다.",
   "style 태그는 CSS 코드를 직접 적는 태그이고, href로 파일을 연결하지 않는다. 외부 CSS 파일은 link 태그로 연결한다.",
   "디자인 파일의 이름은 style.css이다. 확장자를 .jsp로 쓰면 파일을 찾지 못해 CSS가 적용되지 않는다.",
   null
  ]
 },
 {
  "id": "basic-5",
  "u": "html",
  "lv": "보통",
  "q": "목록에서 2026001(김하늘)을 클릭해 update.jsp로 이동했다. 성명 입력칸에 '김하늘'이 미리 표시되도록 하는 코드는?",
  "code": null,
  "codeOpts": true,
  "opts": [
   "<input type=\"text\" name=\"김하늘\">",
   "<input type=\"text\" name=\"name\" value=\"김하늘\">",
   "<input type=\"text\" name=\"name\">김하늘</input>",
   "<input type=\"김하늘\" name=\"name\">"
  ],
  "ans": 1,
  "basis": "value는 입력칸에 초기값을 미리 표시하는 속성이다. 수정 화면에서는 기존 데이터를 value에 넣어 보여 준다. name은 입력칸을 구분하는 이름이다.",
  "why": [
   "name은 입력칸을 구분하는 이름일 뿐 화면에 보이지 않는다. 그래서 입력칸은 비어 있게 된다.",
   null,
   "input은 닫는 태그가 없는 태그이다. 뒤에 적은 '김하늘'은 입력칸 안이 아니라 입력칸 바깥에 일반 글자로 나타난다.",
   "type은 입력칸의 종류(text, submit, reset)를 정하는 속성이다. 엉뚱한 값을 쓰면 빈 일반 입력칸이 될 뿐 '김하늘'은 표시되지 않는다."
  ]
 },
 {
  "id": "basic-6",
  "u": "html",
  "lv": "보통",
  "q": "등록 화면 마지막 줄에 [등록] 버튼(입력 내용 보내기)과 [다시쓰기] 버튼(입력 내용 모두 지우기)을 만들려고 한다. 올바른 코드는?",
  "code": null,
  "codeOpts": true,
  "opts": [
   "<input type=\"submit\" value=\"등록\"> <input type=\"reset\" value=\"다시쓰기\">",
   "<input type=\"reset\" value=\"등록\"> <input type=\"submit\" value=\"다시쓰기\">",
   "<input type=\"submit\" name=\"등록\"> <input type=\"reset\" name=\"다시쓰기\">",
   "<submit value=\"등록\"> <reset value=\"다시쓰기\">"
  ],
  "ans": 0,
  "basis": "type=\"submit\"은 입력 내용을 보내는 버튼, type=\"reset\"은 입력 내용을 지우는 버튼이다. 버튼에 보이는 글자는 value로 정한다. (지금은 서버 처리가 없으므로 등록을 눌러도 실제로 저장되지는 않는다.)",
  "why": [
   null,
   "type이 서로 바뀌었다. [등록]을 누르면 입력 내용이 지워지고, [다시쓰기]를 누르면 내용을 보내게 된다.",
   "버튼에 보이는 글자는 name이 아니라 value로 정한다. name만 쓰면 '등록', '다시쓰기' 대신 브라우저 기본 글자가 표시된다.",
   "submit과 reset은 태그 이름이 아니라 input 태그의 type 값이다. submit, reset이라는 태그는 없다."
  ]
 },
 {
  "id": "basic-7",
  "u": "html",
  "lv": "보통",
  "q": "버튼이 들어 있는 칸이 위 행의 2칸 너비를 가로로 모두 차지하게 하려고 한다. ????? 자리에 들어갈 코드는?",
  "code": "<table border=\"1\">\n    <tr>\n        <th>성명</th>\n        <td><input type=\"text\" name=\"name\"></td>\n    </tr>\n    <tr>\n        <td ?????>\n            <input type=\"submit\" value=\"등록\">\n            <input type=\"reset\" value=\"다시쓰기\">\n        </td>\n    </tr>\n</table>",
  "codeOpts": true,
  "opts": [
   "rowspan=\"2\"",
   "span=\"2\"",
   "colspan=\"2\"",
   "width=\"2\""
  ],
  "ans": 2,
  "basis": "colspan은 셀을 가로로 합친다. 위 행이 th와 td, 2칸이므로 colspan=\"2\"를 쓰면 버튼 칸이 2칸 너비가 된다.",
  "why": [
   "rowspan은 셀을 세로로 합친다. 가로로 2칸을 합치려면 colspan을 써야 한다.",
   "span은 td에서 셀을 합치는 속성이 아니다. 셀 합치기는 colspan(가로) 또는 rowspan(세로)을 쓴다.",
   null,
   "width는 셀의 너비 크기를 정하는 것이지, 셀 2칸을 하나로 합치는 것이 아니다."
  ]
 },
 {
  "id": "basic-8",
  "u": "css",
  "lv": "보통",
  "q": "style.css에 아래 코드가 있다. 이 디자인을 수험번호 칸에 적용하는 올바른 코드는?",
  "code": ".td-center {\n    text-align: center;\n}",
  "codeOpts": true,
  "opts": [
   "<td id=\"td-center\">2026001</td>",
   "<td class=\".td-center\">2026001</td>",
   "<td style=\"td-center\">2026001</td>",
   "<td class=\"td-center\">2026001</td>"
  ],
  "ans": 3,
  "basis": "CSS에서 점(.)으로 시작하는 선택자는 class 선택자이다. HTML에서는 class 속성에 점 없이 이름만 적는다.",
  "why": [
   "점(.)으로 시작하는 선택자는 id가 아니라 class에 적용된다. id로 쓰면 디자인이 적용되지 않는다.",
   "점(.)은 CSS 파일에서만 붙인다. HTML의 class 값에 점을 붙이면 이름이 달라져 적용되지 않는다.",
   "style 속성은 text-align: center; 처럼 CSS 속성을 직접 쓰는 곳이다. class 이름을 쓰는 곳이 아니다.",
   null
  ]
 },
 {
  "id": "basic-9",
  "u": "html",
  "lv": "어려움",
  "q": "아래 코드를 실행하면 데이터가 표의 새 행으로 제대로 나타나지 않는다. 구조가 잘못된 줄과 그 이유로 옳은 것은?",
  "code": "① <table border=\"1\">\n②     <tr><th>번호</th><th>성명</th></tr>\n③     <td>2026001</td><td>김하늘</td>\n④ </table>",
  "codeOpts": false,
  "opts": [
   "① — table 태그에는 border를 쓸 수 없다.",
   "② — th는 tr 안에 쓸 수 없다.",
   "③ — td를 감싸는 tr이 없다.",
   "④ — table은 </tr>로 끝내야 한다."
  ],
  "ans": 2,
  "basis": "표의 한 행은 tr이고, td와 th는 반드시 tr 안에 있어야 한다. ③번 줄은 <tr>와 </tr>로 감싸야 한다.",
  "why": [
   "border=\"1\"은 표에 테두리를 그리는 속성으로, table 태그에 쓰는 것이 맞다.",
   "th는 제목 셀이고, td와 마찬가지로 tr 안에 써야 한다. ②번 줄은 올바르다.",
   null,
   "table은 <table>로 시작해서 </table>로 끝난다. </tr>는 한 행을 끝낼 때 쓴다."
  ]
 },
 {
  "id": "basic-10",
  "u": "css",
  "lv": "어려움",
  "q": "아래 CSS를 적용했을 때, 연한 노란색 배경이 칠해지는 범위로 옳은 것은?",
  "code": "section {\n    margin: 30px;\n    padding: 30px;\n    background-color: lightyellow;\n}",
  "codeOpts": false,
  "opts": [
   "글자가 있는 부분에만 칠해지고, 30px 여백은 안쪽·바깥쪽 모두 칠해지지 않는다.",
   "글자 부분과 안쪽 여백(padding) 30px까지 칠해지고, 바깥 여백(margin) 30px는 칠해지지 않는다.",
   "바깥 여백(margin) 30px까지 포함해 모두 칠해진다.",
   "글자 부분과 바깥 여백(margin) 30px까지 칠해지고, 안쪽 여백(padding)은 칠해지지 않는다."
  ],
  "ans": 1,
  "basis": "padding은 안쪽 여백으로 section 상자에 포함되므로 배경색이 함께 칠해진다. margin은 바깥 여백으로 상자 밖의 빈 공간이라 배경색이 칠해지지 않는다.",
  "why": [
   "padding은 상자 안쪽의 여백이라 배경색이 함께 칠해진다. 글자 부분에만 칠해지는 것이 아니다.",
   null,
   "margin은 상자 바깥의 빈 공간이다. section의 배경색은 margin까지 칠해지지 않는다.",
   "안쪽과 바깥쪽이 반대이다. 배경색은 안쪽 여백(padding)까지 칠해지고, 바깥 여백(margin)은 칠해지지 않는다."
  ]
 },
 {
  "id": "stylecss-1",
  "u": "css",
  "lv": "쉬움",
  "q": "header의 배경색을 파란색으로 지정하는 CSS 코드로 올바른 것은?",
  "code": null,
  "codeOpts": true,
  "opts": [
   "header { background-color: blue; }",
   "header ( background-color: blue; )",
   "header { background-color = blue; }",
   "<header> { background-color: blue; }"
  ],
  "ans": 0,
  "basis": "CSS는 「선택자 { 속성: 값; }」 모양으로 쓴다. 중괄호 { }로 감싸고, 속성과 값 사이에는 콜론(:), 끝에는 세미콜론(;)을 쓴다.",
  "why": [
   null,
   "CSS는 소괄호 ( )가 아니라 중괄호 { }로 감싼다.",
   "속성과 값 사이에는 등호(=)가 아니라 콜론(:)을 쓴다.",
   "CSS 파일에서는 꺾쇠 < >를 쓰지 않는다. 선택자는 태그 이름 header만 적는다."
  ]
 },
 {
  "id": "stylecss-2",
  "u": "jsp",
  "lv": "쉬움",
  "q": "header.jsp에서 디자인 파일 style.css를 연결하는 코드로 올바른 것은? (실제 파일 이름은 style.css이다.)",
  "code": null,
  "codeOpts": true,
  "opts": [
   "<link href=\"style.css\">",
   "<link href=\"style.css\" rel=\"stylesheet\">",
   "<a href=\"style.css\" rel=\"stylesheet\">",
   "<link href=\"Style.css\" rel=\"stylesheet\">"
  ],
  "ans": 1,
  "basis": "CSS 파일은 link 태그로 연결한다. href에는 파일 이름을, rel=\"stylesheet\"에는 \"이 파일은 디자인 파일이다\"라는 뜻을 적는다.",
  "why": [
   "rel=\"stylesheet\"가 빠졌다. 그러면 브라우저가 이 파일을 디자인 파일로 알지 못해 CSS가 적용되지 않는다.",
   null,
   "a 태그는 클릭해서 다른 페이지로 이동하는 태그이다. CSS 파일 연결은 link 태그로 한다.",
   "파일 이름은 대문자·소문자까지 똑같아야 한다. 실제 파일은 style.css인데 Style.css로 쓰면 파일을 찾지 못한다."
  ]
 },
 {
  "id": "stylecss-3",
  "u": "css",
  "lv": "쉬움",
  "q": "footer의 글자색을 흰색으로 바꾸려고 한다. ????? 에 들어갈 속성은?",
  "code": "footer {\n    ?????: white;\n}",
  "codeOpts": true,
  "opts": [
   "background-color",
   "font-color",
   "color",
   "text-color"
  ],
  "ans": 2,
  "basis": "글자색은 color 속성으로 지정한다.",
  "why": [
   "background-color는 글자 뒤의 배경색을 바꾼다. 글자색이 아니다.",
   "font-color라는 CSS 속성은 없다. 글자색은 color로 쓴다.",
   null,
   "text-color라는 CSS 속성은 없다. 글자색은 color로 쓴다."
  ]
 },
 {
  "id": "stylecss-4",
  "u": "css",
  "lv": "쉬움",
  "q": "아래 코드는 section에 어떤 디자인을 적용하는가?",
  "code": "section {\n    background-color: lightgray;\n}",
  "codeOpts": false,
  "opts": [
   "section의 글자색을 연한 회색으로 바꾼다.",
   "section의 테두리를 연한 회색으로 바꾼다.",
   "section 안의 링크 색만 연한 회색으로 바꾼다.",
   "section의 배경색을 연한 회색으로 바꾼다."
  ],
  "ans": 3,
  "basis": "background-color는 배경색을 지정한다. lightgray는 연한 회색이다.",
  "why": [
   "글자색은 color 속성이 바꾼다. background-color는 배경색이다.",
   "background-color는 테두리가 아니라 상자 안쪽 배경 전체를 칠한다.",
   "선택자가 section이므로 section 영역 전체의 배경색이 바뀐다. 링크 색만 바뀌는 것이 아니다.",
   null
  ]
 },
 {
  "id": "stylecss-5",
  "u": "css",
  "lv": "쉬움",
  "q": "header에 text-align: center; 를 지정하면 어떻게 되는가?",
  "code": "header {\n    text-align: center;\n}",
  "codeOpts": false,
  "opts": [
   "header 안의 글자가 가로 방향 가운데로 정렬된다.",
   "header 안의 글자가 세로 방향 가운데로 정렬된다.",
   "header 상자 자체가 화면 정가운데로 이동한다.",
   "header 안의 글자 크기가 커진다."
  ],
  "ans": 0,
  "basis": "text-align은 글자를 가로 방향으로 정렬한다. center는 가운데, left는 왼쪽, right는 오른쪽이다.",
  "why": [
   null,
   "text-align은 가로 정렬만 한다. 세로 가운데는 line-height를 height와 같게 하여 맞춘다.",
   "text-align은 상자 안의 글자를 정렬할 뿐, header 상자를 옮기지 않는다.",
   "글자 크기는 font-size로 바꾼다."
  ]
 },
 {
  "id": "stylecss-6",
  "u": "css",
  "lv": "쉬움",
  "q": "header의 제목 글자 크기를 30px로 지정하는 코드는?",
  "code": null,
  "codeOpts": true,
  "opts": [
   "header { line-height: 30px; }",
   "header { font-size: 30px; }",
   "header { height: 30px; }",
   "header { font: 30; }"
  ],
  "ans": 1,
  "basis": "font-size는 글자 크기를 지정하는 속성이다. 값에는 단위 px를 붙인다.",
  "why": [
   "line-height는 줄 높이이다. 글자 크기는 그대로이고 줄의 높이만 바뀐다.",
   null,
   "height는 header 상자의 높이이다. 글자 크기와 다르다.",
   "글자 크기 속성 이름은 font-size이고, 값에는 px 같은 단위를 붙여야 한다."
  ]
 },
 {
  "id": "stylecss-7",
  "u": "css",
  "lv": "쉬움",
  "q": "메뉴(a 태그)의 밑줄을 없애는 코드로 올바른 것은?",
  "code": null,
  "codeOpts": true,
  "opts": [
   "a { text-align: none; }",
   "a { text-decoration: underline; }",
   "a { color: none; }",
   "a { text-decoration: none; }"
  ],
  "ans": 3,
  "basis": "text-decoration은 밑줄 같은 글자 장식을 정한다. none은 '장식 없음'이라는 뜻이라 링크 밑줄이 사라진다.",
  "why": [
   "text-align은 글자 정렬 속성이다. 밑줄과 관계없다.",
   "underline은 밑줄을 긋는다는 뜻이다. 밑줄이 그대로 남는다.",
   "color는 글자색 속성이다. 밑줄을 없애지 못한다.",
   null
  ]
 },
 {
  "id": "stylecss-8",
  "u": "css",
  "lv": "쉬움",
  "q": "CSS 파일에서 class 선택자를 만들 때 이름 앞에 붙이는 기호는?",
  "code": "?td-right {\n    text-align: right;\n}",
  "codeOpts": false,
  "opts": [
   "# (샵)",
   "- (빼기)",
   ". (점)",
   "* (별표)"
  ],
  "ans": 2,
  "basis": "class 선택자는 CSS에서 이름 앞에 점(.)을 붙인다. HTML에서는 점 없이 class=\"td-right\"로 쓴다.",
  "why": [
   "#은 id 선택자에 쓰는 기호이다. 우리가 쓰는 class 선택자는 점(.)을 붙인다.",
   "빼기(-)는 td-right처럼 이름 안에서 단어를 이을 때 쓰는 글자일 뿐, 선택자 기호가 아니다.",
   null,
   "별표(*)는 class 선택자 기호가 아니다. class는 점(.)을 붙인다."
  ]
 },
 {
  "id": "stylecss-9",
  "u": "css",
  "lv": "쉬움",
  "q": "요소의 바깥쪽, 즉 다른 요소와의 사이에 여백을 주는 속성은?",
  "code": null,
  "codeOpts": false,
  "opts": [
   "margin",
   "padding",
   "line-height",
   "width"
  ],
  "ans": 0,
  "basis": "margin은 바깥 여백이다. 상자 바깥에 빈 공간을 만들어 다른 요소와 떨어뜨린다.",
  "why": [
   null,
   "padding은 안쪽 여백이다. 상자 테두리와 안쪽 글자 사이를 넓힌다.",
   "line-height는 줄 높이이다. 여백을 주는 속성이 아니다.",
   "width는 상자의 가로 너비이다."
  ]
 },
 {
  "id": "stylecss-10",
  "u": "css",
  "lv": "쉬움",
  "q": "표의 칸(td) 안에서 테두리와 글자 사이를 넓히려고 한다. 알맞은 속성은?",
  "code": null,
  "codeOpts": false,
  "opts": [
   "margin",
   "height",
   "padding",
   "text-align"
  ],
  "ans": 2,
  "basis": "padding은 안쪽 여백이다. 칸의 테두리와 안쪽 글자 사이에 여백을 만든다.",
  "why": [
   "margin은 바깥 여백이다. 칸 안쪽의 글자와 테두리 사이를 넓히지 않는다.",
   "height는 칸의 높이를 정할 뿐, 왼쪽·오른쪽 여백은 생기지 않는다.",
   null,
   "text-align은 글자의 가로 정렬이다. 여백을 만들지 않는다."
  ]
 },
 {
  "id": "stylecss-11",
  "u": "css",
  "lv": "보통",
  "q": "footer가 스크롤과 상관없이 항상 화면 맨 아래에 붙어 있도록 하는 코드는?",
  "code": null,
  "codeOpts": true,
  "opts": [
   "footer { position: fixed; top: 0; }",
   "footer { bottom: 0; }",
   "footer { position: fixed; bottom: 0; }",
   "footer { text-align: bottom; }"
  ],
  "ans": 2,
  "basis": "position: fixed; 는 요소를 화면에 고정한다. bottom: 0; 은 화면 아래쪽에서 0px 떨어진 곳, 즉 맨 아래에 놓는다.",
  "why": [
   "top: 0; 은 화면 맨 위에 붙인다. footer가 header 자리로 올라간다.",
   "position: fixed; 가 없으면 bottom 값이 동작하지 않는다. top·bottom·left는 position과 함께 써야 한다.",
   null,
   "text-align에는 bottom 값이 없다. text-align은 글자의 가로 정렬만 한다."
  ]
 },
 {
  "id": "stylecss-12",
  "u": "css",
  "lv": "보통",
  "q": "header가 화면의 가로 전체를 꽉 채우게 하려고 한다. 알맞은 코드는?",
  "code": null,
  "codeOpts": true,
  "opts": [
   "header { height: 100%; }",
   "header { width: 100%; }",
   "header { width: 100px; }",
   "header { width: full; }"
  ],
  "ans": 1,
  "basis": "width는 가로 너비이다. 100%는 화면 가로 전체를 뜻한다.",
  "why": [
   "height는 세로 높이이다. 가로 너비는 width로 정한다.",
   null,
   "100px는 화면 크기와 상관없이 100픽셀로 고정된 폭이다. 화면 전체를 채우지 못한다.",
   "full은 width에 쓸 수 있는 값이 아니다. 전체 너비는 100%로 쓴다."
  ]
 },
 {
  "id": "stylecss-13",
  "u": "css",
  "lv": "보통",
  "q": "nav의 높이는 50px이다. 메뉴 글자를 nav의 세로 방향 가운데에 오게 하려면 ????? 에 무엇을 써야 하는가?",
  "code": "nav {\n    height: 50px;\n    ?????\n}",
  "codeOpts": true,
  "opts": [
   "text-align: center;",
   "font-size: 50px;",
   "padding: 50px;",
   "line-height: 50px;"
  ],
  "ans": 3,
  "basis": "line-height(줄 높이)를 상자의 height와 같게 하면, 한 줄짜리 글자가 세로 가운데에 놓인다.",
  "why": [
   "text-align: center; 는 가로 가운데 정렬이다. 세로 위치는 바뀌지 않는다.",
   "font-size: 50px; 는 글자를 50px로 크게 만든다. 세로 가운데 정렬이 아니다.",
   "padding: 50px; 은 위·아래·왼쪽·오른쪽 안쪽 여백을 50px씩 만들어 nav가 커진다. 세로 가운데 정렬 방법이 아니다.",
   null
  ]
 },
 {
  "id": "stylecss-14",
  "u": "css",
  "lv": "보통",
  "q": "header는 화면 맨 위(top: 0)에 있고 높이가 100px이다. nav를 header 바로 아래에 붙이려면 nav의 top 값은?",
  "code": "header {\n    position: fixed;\n    top: 0;\n    height: 100px;\n}\nnav {\n    position: fixed;\n    top: ?????;\n    height: 50px;\n}",
  "codeOpts": true,
  "opts": [
   "0",
   "50px",
   "100px",
   "150px"
  ],
  "ans": 2,
  "basis": "header가 화면 위에서 0px부터 100px까지 차지하므로, nav는 위에서 100px 떨어진 곳에서 시작해야 header 바로 아래에 붙는다.",
  "why": [
   "top: 0 이면 nav가 header와 같은 자리에 겹쳐서 header를 가린다.",
   "top: 50px 이면 nav가 header의 아래쪽 절반(50px~100px)과 겹친다.",
   null,
   "150px는 header 높이 100px에 nav 높이 50px을 더한 값이다. 이 값은 nav 다음에 오는 section의 top 값이다."
  ]
 },
 {
  "id": "stylecss-15",
  "u": "css",
  "lv": "보통",
  "q": "아래 코드를 실행했더니 배경색과 글자색이 둘 다 적용되지 않았다. 원인은?",
  "code": "header {\n    background-color: navy\n    color: white;\n    font-size: 30px;\n}",
  "codeOpts": false,
  "opts": [
   "navy는 CSS에서 쓸 수 없는 색 이름이기 때문이다.",
   "한 선택자 안에 속성을 3개 이상 쓸 수 없기 때문이다.",
   "font-size 줄 끝에 세미콜론(;)이 있기 때문이다.",
   "navy 뒤에 세미콜론(;)이 빠져서 다음 줄과 하나로 이어졌기 때문이다."
  ],
  "ans": 3,
  "basis": "세미콜론(;)은 속성 하나가 끝났다는 표시이다. navy 뒤에 ;가 없으면 브라우저는 navy와 다음 줄의 color: white를 하나의 값으로 읽는다. 잘못된 값이 되어 두 줄 모두 무시된다.",
  "why": [
   "navy(남색)는 CSS에서 쓸 수 있는 색 이름이다.",
   "한 선택자 안에는 속성을 여러 개 쓸 수 있다. 개수 제한은 없다.",
   "font-size 줄 끝의 세미콜론은 올바르다. 실제로 font-size는 정상 적용된다.",
   null
  ]
 },
 {
  "id": "stylecss-16",
  "u": "css",
  "lv": "보통",
  "q": "아래처럼 작성했는데 가운데 정렬이 적용되지 않는다. 원인은?",
  "code": "/* style.css */\n.td-centre {\n    text-align: center;\n}\n\n<!-- list.jsp -->\n<td class=\"td-center\">2026001</td>",
  "codeOpts": false,
  "opts": [
   "CSS의 선택자 이름(td-centre)과 HTML의 class 이름(td-center)의 철자가 다르기 때문이다.",
   "class 속성은 td 태그에 쓸 수 없기 때문이다.",
   "HTML에서도 class=\".td-center\"처럼 점을 붙여야 하기 때문이다.",
   "text-align은 td 안에서 동작하지 않기 때문이다."
  ],
  "ans": 0,
  "basis": "CSS 선택자 이름과 HTML의 class 이름은 한 글자도 틀리지 않고 똑같아야 연결된다. centre와 center는 다른 이름이다.",
  "why": [
   null,
   "class는 td를 포함해 거의 모든 태그에 쓸 수 있다.",
   "점(.)은 CSS 파일에서만 붙인다. HTML에 점을 붙이면 오히려 이름이 달라진다.",
   "text-align은 td 안의 글자 정렬에 자주 쓰는 속성이다."
  ]
 },
 {
  "id": "stylecss-17",
  "u": "css",
  "lv": "보통",
  "q": "section의 글자가 왼쪽 끝에 딱 붙어 있다. section의 배경색 안쪽에서 글자를 오른쪽으로 20px 띄우려면? (padding-left는 '왼쪽 안쪽 여백'이다.)",
  "code": null,
  "codeOpts": true,
  "opts": [
   "section { margin-left: 20px; }",
   "section { padding-left: 20px; }",
   "section { text-align: right; }",
   "section { font-size: 20px; }"
  ],
  "ans": 1,
  "basis": "padding-left는 상자의 왼쪽 안쪽 여백이다. 배경색은 그대로 왼쪽 끝부터 칠해지고, 글자만 20px 안쪽으로 들어간다.",
  "why": [
   "margin-left는 왼쪽 바깥 여백이다. section 상자 전체가 오른쪽으로 이동하고, 왼쪽에 배경색이 없는 빈 공간이 생긴다.",
   null,
   "text-align: right; 는 글자를 오른쪽 끝으로 정렬한다. 20px만 띄우는 것이 아니다.",
   "font-size는 글자 크기이다. 글자 위치는 바뀌지 않는다."
  ]
 },
 {
  "id": "stylecss-18",
  "u": "css",
  "lv": "보통",
  "q": "아래 CSS를 적용했을 때 표에 생기는 변화로 옳은 것은?",
  "code": "td {\n    padding: 10px;\n}",
  "codeOpts": false,
  "opts": [
   "모든 칸과 칸 사이가 10px씩 벌어진다.",
   "모든 칸의 글자 크기가 10px가 된다.",
   "모든 칸에서 테두리와 글자 사이에 위·아래·왼쪽·오른쪽 10px의 여백이 생긴다.",
   "표 전체가 오른쪽으로 10px 이동한다."
  ],
  "ans": 2,
  "basis": "padding: 10px; 처럼 값을 하나만 쓰면 위·아래·왼쪽·오른쪽 네 방향 모두에 안쪽 여백 10px이 생긴다. 그래서 칸이 넉넉해진다.",
  "why": [
   "칸과 칸 사이는 바깥쪽 공간이다. padding은 칸 안쪽의 여백이다.",
   "글자 크기는 font-size로 정한다.",
   null,
   "padding은 칸 안쪽에 여백을 만들 뿐, 표 전체를 옮기지 않는다."
  ]
 },
 {
  "id": "stylecss-19",
  "u": "css",
  "lv": "어려움",
  "q": "아래 style.css에서 header의 height만 100px → 120px로 바꾸고 나머지는 그대로 두었다. 실행 결과와 고칠 방법으로 옳은 것은?",
  "code": "header  { position: fixed; top: 0;     height: 100px; }\nnav     { position: fixed; top: 100px; height: 50px; }\nsection { position: fixed; top: 150px; }",
  "codeOpts": false,
  "opts": [
   "header가 커진 만큼 nav와 section이 저절로 아래로 밀려나므로 고칠 것이 없다.",
   "nav가 header의 아래쪽 20px을 가린다. nav의 top을 120px, section의 top을 170px로 바꿔야 한다.",
   "nav가 header의 아래쪽 20px을 가린다. nav의 top만 120px로 바꾸면 모두 해결된다.",
   "position: fixed 요소는 height를 바꿔도 크기가 변하지 않으므로 화면 변화가 없다."
  ],
  "ans": 1,
  "basis": "position: fixed 요소는 top 값으로 정한 위치에 고정된다. 다른 요소가 커져도 저절로 밀려나지 않는다. header가 0~120px을 차지하므로 nav는 top: 120px(120~170px), section은 top: 170px이 되어야 겹치지 않는다.",
  "why": [
   "fixed 요소는 서로 자리를 비켜 주지 않는다. nav의 top은 100px 그대로이므로 header와 겹친다.",
   null,
   "nav의 top만 120px로 바꾸면 nav가 120~170px을 차지한다. 그런데 section은 150px에서 시작하므로 이번에는 nav와 section이 20px 겹친다.",
   "fixed 요소도 height를 바꾸면 크기가 바뀐다. header는 120px로 커진다."
  ]
 },
 {
  "id": "stylecss-20",
  "u": "css",
  "lv": "어려움",
  "q": "아래 CSS를 적용한 header의 모습을 바르게 설명한 것은?",
  "code": "header {\n    position: fixed;\n    top: 0;\n    width: 100%;\n    height: 100px;\n    background-color: navy;\n    color: white;\n    text-align: center;\n    line-height: 100px;\n    font-size: 30px;\n}",
  "codeOpts": false,
  "opts": [
   "화면 맨 위에 고정된다. 흰색 배경에 30px 남색 글자가 가로·세로 가운데에 있다.",
   "화면 맨 위에 고정된다. 남색 배경에 30px 흰 글자가 가로 가운데에 있지만, 세로로는 header의 위쪽에 붙어 있다.",
   "화면 맨 위에 고정된다. 남색 배경에 30px 흰 글자가 가로·세로 가운데에 있다.",
   "처음에는 화면 맨 위에 있지만 스크롤하면 위로 올라가 사라진다. 남색 배경에 30px 흰 글자가 가로·세로 가운데에 있다."
  ],
  "ans": 2,
  "basis": "position: fixed + top: 0 → 화면 맨 위 고정. width 100% → 가로 전체. background-color: navy → 남색 배경. color: white → 흰 글자. text-align: center → 가로 가운데. line-height를 height와 같은 100px로 지정 → 세로 가운데. font-size: 30px → 글자 크기 30px.",
  "why": [
   "배경색과 글자색이 반대이다. background-color가 navy(배경 남색), color가 white(글자 흰색)이다.",
   "line-height: 100px; 가 height: 100px; 과 같으므로 글자는 세로 가운데에 온다.",
   null,
   "position: fixed; 는 스크롤해도 화면의 같은 자리에 고정된다. 스크롤해도 사라지지 않는다."
  ]
 },
 {
  "id": "jsppages-1",
  "u": "jsp",
  "lv": "쉬움",
  "q": "모든 페이지의 맨 아래에 공통 파일 footer.jsp를 불러오는 코드로 올바른 것은?",
  "code": null,
  "codeOpts": true,
  "opts": [
   "<jsp:include page=\"footer.jsp\"></jsp:include>",
   "<jsp:include file=\"footer.jsp\"></jsp:include>",
   "<include page=\"footer.jsp\"></include>",
   "<jsp:include page=\"footer.jsp\"></include>"
  ],
  "ans": 0,
  "basis": "공통 파일은 jsp:include 태그로 불러온다. page 속성에 파일 이름을 쓰고, 여는 태그와 닫는 태그 모두 jsp:include로 쓴다.",
  "why": [
   null,
   "jsp:include는 file이 아니라 page 속성에 파일 이름을 적는다.",
   "태그 이름 앞에 jsp: 가 빠졌다. 공통 파일을 불러오는 태그는 jsp:include이다.",
   "닫는 태그가 </include>로 잘못 쓰였다. 여는 태그와 똑같이 </jsp:include>로 닫아야 한다."
  ]
 },
 {
  "id": "jsppages-2",
  "u": "jsp",
  "lv": "쉬움",
  "q": "프로그램 제목과 메뉴(nav)를 넣어 두고, 모든 페이지가 맨 위에서 함께 불러오는 공통 파일은?",
  "code": null,
  "codeOpts": true,
  "opts": [
   "footer.jsp",
   "index.jsp",
   "header.jsp",
   "style.css"
  ],
  "ans": 2,
  "basis": "header.jsp에는 프로그램 제목(header)과 메뉴(nav)를 넣는다. 각 페이지는 맨 위에서 jsp:include로 header.jsp를 불러온다.",
  "why": [
   "footer.jsp는 페이지 맨 아래에 들어가는 저작권과 학생 정보 파일이다.",
   "index.jsp는 프로그램 소개를 보여 주는 홈 화면이다. 다른 페이지가 불러오는 공통 파일이 아니다.",
   null,
   "style.css는 화면 디자인 파일이다. 제목과 메뉴 같은 HTML 내용을 담지 않는다."
  ]
 },
 {
  "id": "jsppages-3",
  "u": "jsp",
  "lv": "쉬움",
  "q": "nav 메뉴에서 '접수목록조회/수정'을 클릭하면 applylist.jsp로 이동하게 하려고 한다. 올바른 코드는?",
  "code": null,
  "codeOpts": true,
  "opts": [
   "<a src=\"applylist.jsp\">접수목록조회/수정</a>",
   "<a href=\"applylist.jsp\">접수목록조회/수정</a>",
   "<a href=\"applylist\">접수목록조회/수정</a>",
   "<link href=\"applylist.jsp\">접수목록조회/수정</link>"
  ],
  "ans": 1,
  "basis": "페이지 이동은 a 태그의 href 속성에 이동할 파일 이름을 .jsp까지 정확히 적는다.",
  "why": [
   "a 태그는 이동할 주소를 src가 아니라 href에 적는다.",
   null,
   "파일 이름에 .jsp가 빠졌다. 실제 파일 이름과 똑같이 applylist.jsp라고 써야 이동한다.",
   "link 태그는 CSS 파일을 연결할 때 쓴다. 클릭해서 이동하는 메뉴는 a 태그로 만든다."
  ]
 },
 {
  "id": "jsppages-4",
  "u": "jsp",
  "lv": "쉬움",
  "q": "footer.jsp에서 아래 저작권 문구를 감싸는 태그로 알맞은 것은?",
  "code": "<?????>\n    Copyrightⓒ2026 10315 홍길동 All rights reserved.\n</?????>",
  "codeOpts": true,
  "opts": [
   "header",
   "nav",
   "section",
   "footer"
  ],
  "ans": 3,
  "basis": "footer는 페이지의 맨 아래 영역을 나타내는 태그이다. 저작권과 학생 정보를 넣는다.",
  "why": [
   "header는 페이지 맨 위의 제목 영역이다.",
   "nav는 메뉴 영역이다.",
   "section은 각 페이지의 본문 영역이다.",
   null
  ]
 },
 {
  "id": "jsppages-5",
  "u": "html",
  "lv": "쉬움",
  "q": "apply.jsp의 본문(section) 맨 위에 화면 제목 '원서접수'를 표시하는 코드는?",
  "code": null,
  "codeOpts": true,
  "opts": [
   "<h2>원서접수</h2>",
   "<title>원서접수</title>",
   "<h2 원서접수>",
   "<head>원서접수</head>"
  ],
  "ans": 0,
  "basis": "section 안의 화면 제목은 h2 태그로 쓴다. 여는 태그와 닫는 태그 사이에 제목 글자를 넣는다.",
  "why": [
   null,
   "title은 head 안에 쓰는 태그로, 브라우저 탭에 표시되는 제목이다. 본문 화면에는 나타나지 않는다.",
   "제목 글자는 태그 안이 아니라 <h2>와 </h2> 사이에 써야 한다.",
   "head는 문서 정보(meta, title)를 넣는 영역이다. 화면 본문에 글자를 표시하지 않는다."
  ]
 },
 {
  "id": "jsppages-6",
  "u": "html",
  "lv": "쉬움",
  "q": "목록조회 표에서 '수험번호', '성명' 같은 제목 칸을 만드는 태그는?",
  "code": null,
  "codeOpts": true,
  "opts": [
   "td",
   "th",
   "tr",
   "table"
  ],
  "ans": 1,
  "basis": "th는 표의 제목 셀이다. 글자가 굵고 가운데로 표시된다.",
  "why": [
   "td는 일반 데이터 셀이다. 2026001, 김하늘 같은 데이터를 넣는다.",
   null,
   "tr은 표의 한 행이다. 칸 하나를 만드는 태그가 아니다.",
   "table은 표 전체를 감싸는 태그이다."
  ]
 },
 {
  "id": "jsppages-7",
  "u": "html",
  "lv": "쉬움",
  "q": "목록조회 표에 접수자 한 명(한 줄)을 더 추가하려고 한다. 무엇을 추가해야 하는가?",
  "code": null,
  "codeOpts": false,
  "opts": [
   "<td> 하나만 추가한다.",
   "<th> 하나를 추가한다.",
   "새 <table>을 하나 더 만든다.",
   "<tr>과 </tr> 사이에 데이터 칸(td)들을 넣은 한 행을 추가한다."
  ],
  "ans": 3,
  "basis": "tr은 표의 한 행이다. 한 명의 데이터는 한 행이므로 tr을 추가하고, 그 안에 항목 수만큼 td를 넣는다.",
  "why": [
   "td 하나만 추가하면 기존 행의 오른쪽에 칸 하나가 붙을 뿐, 새 줄이 생기지 않는다.",
   "th는 제목 셀이다. 데이터 한 줄을 추가하는 태그가 아니다.",
   "새 table을 만들면 표가 따로 하나 더 생긴다. 같은 표에 줄을 추가하려면 tr을 쓴다.",
   null
  ]
 },
 {
  "id": "jsppages-8",
  "u": "html",
  "lv": "쉬움",
  "q": "apply.jsp에서 성명을 입력하는 칸을 만드는 코드로 올바른 것은?",
  "code": null,
  "codeOpts": true,
  "opts": [
   "<input type=\"name\">",
   "<text name=\"name\">",
   "<input type=\"text\" name=\"name\">",
   "<input name=\"text\">"
  ],
  "ans": 2,
  "basis": "글자 입력칸은 input 태그에 type=\"text\"를 쓴다. name은 입력칸을 구분하는 이름이다.",
  "why": [
   "type에는 입력칸 종류(text, submit, reset)를 쓴다. \"name\"이라는 type은 없다.",
   "text라는 태그는 없다. 입력칸은 input 태그로 만든다.",
   null,
   "type과 name이 뒤섞였다. 입력칸 종류는 type에, 구분 이름은 name에 써야 한다."
  ]
 },
 {
  "id": "jsppages-9",
  "u": "css",
  "lv": "쉬움",
  "q": "[style.css] header가 스크롤과 상관없이 항상 화면 맨 위에 붙어 있게 하는 코드는?",
  "code": null,
  "codeOpts": true,
  "opts": [
   "header { position: fixed; top: 0; }",
   "header { position: fixed; bottom: 0; }",
   "header { top: 0; }",
   "header { position: top; }"
  ],
  "ans": 0,
  "basis": "position: fixed; 로 화면에 고정하고, top: 0; 으로 화면 맨 위에 놓는다.",
  "why": [
   null,
   "bottom: 0; 은 화면 맨 아래에 고정한다. footer에 쓰는 코드이다.",
   "position: fixed; 가 없으면 top 값이 동작하지 않는다.",
   "position에는 top이라는 값이 없다. 위치는 top 속성으로 따로 정한다."
  ]
 },
 {
  "id": "jsppages-10",
  "u": "jsp",
  "lv": "쉬움",
  "q": "JSP 페이지의 한글이 깨져 보인다. 가장 먼저 확인할 부분은?",
  "code": null,
  "codeOpts": false,
  "opts": [
   "style.css의 background-color 값",
   "table의 border 값",
   "JSP 맨 위 page 줄의 charset=UTF-8, pageEncoding=\"UTF-8\"과 meta charset=\"UTF-8\"",
   "a 태그의 href 파일 이름"
  ],
  "ans": 2,
  "basis": "한글 깨짐은 문자 인코딩 문제이다. JSP 맨 위 page 줄과 head의 meta에 UTF-8이 정확히 적혀 있는지 확인한다.",
  "why": [
   "background-color는 배경색이다. 글자 인코딩과 관계없다.",
   "border는 표 테두리이다. 한글 깨짐과 관계없다.",
   null,
   "href는 페이지 이동 주소이다. 파일 이름이 틀리면 이동이 안 될 뿐, 한글이 깨지지는 않는다."
  ]
 },
 {
  "id": "jsppages-11",
  "u": "html",
  "lv": "보통",
  "q": "apply.jsp 등록 화면의 마지막 줄이다. 표는 2칸(th, td)짜리이다. [등록]과 [다시쓰기] 버튼이 2칸 너비 전체를 차지하도록 한 올바른 코드는?",
  "code": null,
  "codeOpts": true,
  "opts": [
   "<td rowspan=\"2\">\n  <input type=\"submit\" value=\"등록\">\n  <input type=\"reset\" value=\"다시쓰기\">\n</td>",
   "<td colspan=\"2\">\n  <input type=\"reset\" value=\"등록\">\n  <input type=\"submit\" value=\"다시쓰기\">\n</td>",
   "<td colspan=\"2\">\n  <input type=\"submit\" value=\"등록\">\n  <input type=\"reset\" value=\"다시쓰기\">\n</td>",
   "<td colspan=\"2\">\n  <input type=\"submit\" name=\"등록\">\n  <input type=\"reset\" name=\"다시쓰기\">\n</td>"
  ],
  "ans": 2,
  "basis": "가로 2칸을 합치는 것은 colspan=\"2\"이다. 보내기 버튼은 type=\"submit\", 지우기 버튼은 type=\"reset\"이고, 버튼 글자는 value로 정한다.",
  "why": [
   "rowspan은 세로로 칸을 합친다. 가로 2칸을 합치려면 colspan을 쓴다.",
   "submit과 reset이 서로 바뀌었다. [등록]을 누르면 입력 내용이 지워진다.",
   null,
   "버튼에 보이는 글자는 name이 아니라 value로 정한다."
  ]
 },
 {
  "id": "jsppages-12",
  "u": "html",
  "lv": "보통",
  "q": "목록조회에서 2026004(최가람)를 클릭해 update.jsp로 이동했다. 수정 화면의 시험장소 입력칸 코드로 올바른 것은?",
  "code": "수험번호  성명    자격종목            시험장소\n2026001   김하늘  정보처리산업기사    제1시험실\n2026004   최가람  웹디자인개발기능사  제3시험실",
  "codeOpts": true,
  "opts": [
   "<input type=\"text\" name=\"place\" value=\"제1시험실\">",
   "<input type=\"text\" name=\"제3시험실\">",
   "<input type=\"text\" name=\"place\">제3시험실",
   "<input type=\"text\" name=\"place\" value=\"제3시험실\">"
  ],
  "ans": 3,
  "basis": "수정 화면은 클릭한 사람의 기존 데이터를 value에 넣어 미리 보여 준다. 최가람의 시험장소는 제3시험실이다.",
  "why": [
   "제1시험실은 김하늘(2026001)의 시험장소이다. 수정 화면의 초기값은 목록에서 클릭한 최가람의 데이터와 같아야 한다.",
   "name은 입력칸을 구분하는 이름일 뿐 화면에 보이지 않는다. 입력칸이 비어 있게 된다.",
   "input은 닫는 태그가 없다. 뒤에 쓴 '제3시험실'은 입력칸 바깥에 일반 글자로 나타난다.",
   null
  ]
 },
 {
  "id": "jsppages-13",
  "u": "html",
  "lv": "보통",
  "q": "applylist.jsp에서 수험번호를 가운데 정렬(td-center)하고, 클릭하면 update.jsp로 이동하게 하려고 한다. 올바른 코드는?",
  "code": null,
  "codeOpts": true,
  "opts": [
   "<td class=\"td-center\"><a href=\"update.jsp\">2026001</a></td>",
   "<a href=\"update.jsp\"><td class=\"td-center\">2026001</td></a>",
   "<td class=\"td-center\" href=\"update.jsp\">2026001</td>",
   "<td class=\".td-center\"><a href=\"update.jsp\">2026001</a></td>"
  ],
  "ans": 0,
  "basis": "class는 td에 쓰고, 이동할 링크(a 태그)는 td 안에 넣는다. HTML의 class 값에는 점(.)을 붙이지 않는다.",
  "why": [
   null,
   "a 태그가 td 바깥에 있다. tr 안에는 td나 th만 바로 올 수 있으므로 표 구조가 깨진다.",
   "td에 href를 써도 클릭해서 이동하지 않는다. td 안에 a 태그를 넣어야 한다.",
   "점(.)은 CSS 파일에서만 붙인다. HTML에 점을 붙이면 이름이 달라져 가운데 정렬이 적용되지 않는다."
  ]
 },
 {
  "id": "jsppages-14",
  "u": "html",
  "lv": "보통",
  "q": "apply.jsp의 section 안쪽 구조로 올바른 것은?",
  "code": null,
  "codeOpts": true,
  "opts": [
   "<section>\n  <form>\n    <h2>원서접수</h2>\n  </form>\n  <table border=\"1\"> ... </table>\n</section>",
   "<section>\n  <table border=\"1\">\n    <form> ... </form>\n  </table>\n  <h2>원서접수</h2>\n</section>",
   "<section>\n  <h2>원서접수</h2>\n  <form>\n    <table border=\"1\"> ... </table>\n  </form>\n</section>",
   "<h2>원서접수</h2>\n<form>\n  <section>\n    <table border=\"1\"> ... </table>\n  </section>\n</form>"
  ],
  "ans": 2,
  "basis": "section(본문) 안에 먼저 h2(화면 제목)를 쓰고, 그 아래에 form이 입력칸이 들어 있는 table을 감싼다.",
  "why": [
   "form이 입력칸이 있는 table이 아니라 제목만 감싸고 있다. form은 입력칸과 버튼을 묶어야 한다.",
   "form이 table 안에 들어가 있고, 제목이 표 아래에 있다. form이 table을 감싸야 하고 제목은 맨 위에 와야 한다.",
   null,
   "h2와 form이 section 바깥에 있다. 화면 제목과 입력 양식은 모두 본문인 section 안에 들어가야 한다."
  ]
 },
 {
  "id": "jsppages-15",
  "u": "html",
  "lv": "보통",
  "q": "아래 표에서 2026001과 2026003의 시험장소가 둘 다 '제1시험실'이다. '제1시험실' 칸 하나가 두 행을 세로로 차지하게 하려면 ????? 에 무엇을 써야 하는가?",
  "code": "<tr>\n    <td>2026001</td>\n    <td ?????>제1시험실</td>\n</tr>\n<tr>\n    <td>2026003</td>\n</tr>",
  "codeOpts": true,
  "opts": [
   "colspan=\"2\"",
   "rowspan=\"2\"",
   "rowspan=\"1\"",
   "span=\"2\""
  ],
  "ans": 1,
  "basis": "rowspan은 칸을 세로로 합친다. 두 행을 차지해야 하므로 rowspan=\"2\"이다. 그래서 아래 행에는 시험장소 td를 쓰지 않는다.",
  "why": [
   "colspan은 가로로 합친다. 세로로 두 행을 차지하게 하려면 rowspan을 쓴다.",
   null,
   "rowspan=\"1\"은 한 행만 차지하므로 합쳐지지 않는다.",
   "span은 td에서 칸을 합치는 속성이 아니다."
  ]
 },
 {
  "id": "jsppages-16",
  "u": "css",
  "lv": "보통",
  "q": "[style.css] nav 메뉴의 글자를 흰색으로 하고 밑줄을 없애려고 한다. 올바른 코드는?",
  "code": null,
  "codeOpts": true,
  "opts": [
   "a {\n    color: white;\n    text-decoration: underline;\n}",
   "a {\n    background-color: white;\n    text-decoration: none;\n}",
   "a {\n    color: white, text-decoration: none;\n}",
   "a {\n    color: white;\n    text-decoration: none;\n}"
  ],
  "ans": 3,
  "basis": "글자색은 color, 밑줄 없애기는 text-decoration: none이다. 속성마다 끝에 세미콜론(;)을 쓴다.",
  "why": [
   "underline은 밑줄을 긋는다. 밑줄을 없애려면 none을 쓴다.",
   "background-color는 배경색이다. 글자 뒤가 흰색으로 칠해지고 글자색은 바뀌지 않는다.",
   "속성과 속성 사이는 쉼표(,)가 아니라 세미콜론(;)으로 구분한다. 쉼표로 쓰면 적용되지 않는다.",
   null
  ]
 },
 {
  "id": "jsppages-17",
  "u": "jsp",
  "lv": "보통",
  "q": "다른 페이지에는 footer가 잘 나오는데 index.jsp에서만 footer가 보이지 않는다. 원인은?",
  "code": "<body>\n\n<jsp:include page=\"header.jsp\"></jsp:include>\n\n<section>\n    <h2>홈</h2>\n    자격증 원서접수 관리 프로그램입니다.\n</section>\n\n</body>",
  "codeOpts": false,
  "opts": [
   "footer.jsp 파일 안의 저작권 문구가 틀렸기 때문이다.",
   "index.jsp에 footer.jsp를 불러오는 jsp:include 줄이 없기 때문이다.",
   "header.jsp를 불러오면 footer.jsp는 불러올 수 없기 때문이다.",
   "section 안에 h2가 있기 때문이다."
  ],
  "ans": 1,
  "basis": "공통 파일은 각 페이지가 직접 불러와야 나타난다. </section> 아래, </body> 위에 <jsp:include page=\"footer.jsp\"></jsp:include>를 추가해야 한다.",
  "why": [
   "다른 페이지에서는 footer가 잘 나오므로 footer.jsp 파일 자체는 문제가 없다.",
   null,
   "한 페이지에서 header.jsp와 footer.jsp를 둘 다 불러올 수 있다. 다른 페이지들도 그렇게 한다.",
   "section 안에 h2를 쓰는 것은 올바른 구조이다. footer와 관계없다."
  ]
 },
 {
  "id": "jsppages-18",
  "u": "jsp",
  "lv": "보통",
  "q": "메뉴의 '접수목록조회/수정'을 클릭하면 '404 찾을 수 없음' 오류가 난다. 프로젝트에 있는 파일 이름은 applylist.jsp이다. 원인은?",
  "code": "<a href=\"aplylist.jsp\">접수목록조회/수정</a>",
  "codeOpts": false,
  "opts": [
   "a 태그는 nav 안에서 쓸 수 없기 때문이다.",
   "style.css가 연결되지 않았기 때문이다.",
   "메뉴 글자에 슬래시(/)가 들어 있기 때문이다.",
   "href의 파일 이름(aplylist.jsp)이 실제 파일 이름(applylist.jsp)과 철자가 다르기 때문이다."
  ],
  "ans": 3,
  "basis": "404는 '그 파일을 찾을 수 없다'는 뜻이다. href의 파일 이름은 실제 파일 이름과 한 글자도 다르지 않아야 한다. aplylist에는 p가 하나 빠졌다.",
  "why": [
   "nav 안의 메뉴는 a 태그로 만드는 것이 맞다.",
   "CSS가 연결되지 않으면 디자인만 적용되지 않는다. 페이지 이동 오류(404)와 관계없다.",
   "a 태그 사이의 글자는 화면에 보이는 글자일 뿐이다. 슬래시가 있어도 이동에는 문제가 없다.",
   null
  ]
 },
 {
  "id": "jsppages-19",
  "u": "html",
  "lv": "어려움",
  "q": "아래 apply.jsp를 실행하면 표 오른쪽에 빈 칸이 하나 더 생겨 표 모양이 어긋난다. 원인이 되는 줄과 이유로 옳은 것은?",
  "code": "① <form>\n   <table border=\"1\">\n② <tr><th>수험번호</th><td><input type=\"text\" name=\"no\"></td></tr>\n③ <tr><th>성명</th><td><input type=\"text\" name=\"name\"></td></tr>\n④ <tr><td colspan=\"3\">\n       <input type=\"submit\" value=\"등록\">\n       <input type=\"reset\" value=\"다시쓰기\">\n   </td></tr>\n   </table>\n   </form>",
  "codeOpts": false,
  "opts": [
   "① — form 안에 table을 넣을 수 없다.",
   "② — th와 td를 한 줄(tr)에 함께 쓸 수 없다.",
   "③ — name 값이 영어이면 안 된다.",
   "④ — 다른 행은 2칸(th, td)인데 colspan=\"3\"으로 3칸을 합쳐서 표가 3칸짜리가 되었다."
  ],
  "ans": 3,
  "basis": "colspan 값은 다른 행의 칸 수와 맞아야 한다. 위 행들은 th 1칸 + td 1칸 = 2칸이므로 colspan=\"2\"가 맞다. 3으로 쓰면 표가 3칸이 되어 위 행들 오른쪽에 빈 칸이 생긴다.",
  "why": [
   "form이 table을 감싸는 것은 등록 화면의 기본 구조이다.",
   "한 행(tr) 안에 제목 칸 th와 데이터 칸 td를 함께 쓰는 것은 등록 화면에서 자주 쓰는 올바른 구조이다.",
   "name은 입력칸을 구분하는 이름이다. 보통 영어로 쓰며 화면 모양과 관계없다.",
   null
  ]
 },
 {
  "id": "jsppages-20",
  "u": "jsp",
  "lv": "어려움",
  "q": "모든 페이지(index, apply, applylist, status, update)는 맨 위에서 header.jsp를, 맨 아래에서 footer.jsp를 jsp:include로 불러온다. style.css는 header.jsp에서 연결한다. 옳은 설명은?",
  "code": null,
  "codeOpts": false,
  "opts": [
   "메뉴를 하나 추가하려면 다섯 페이지 모두에 nav 코드를 직접 고쳐 넣어야 한다.",
   "header.jsp의 nav 메뉴만 고치면, header.jsp를 불러오는 모든 페이지의 메뉴가 함께 바뀐다.",
   "style.css를 header.jsp에서 연결했으므로 CSS는 header 부분에만 적용되고 section과 footer에는 적용되지 않는다.",
   "update.jsp에서 [수정] 버튼을 누르면 applylist.jsp의 목록 데이터가 자동으로 바뀐다."
  ],
  "ans": 1,
  "basis": "jsp:include는 공통 파일의 내용을 각 페이지에 그대로 끼워 넣는다. 그래서 header.jsp 한 파일만 고치면 그 파일을 불러오는 모든 페이지에 반영된다.",
  "why": [
   "메뉴는 header.jsp 한 곳에만 있다. 각 페이지는 그 파일을 불러오기만 하므로 다섯 페이지를 따로 고칠 필요가 없다.",
   null,
   "header.jsp의 내용이 각 페이지에 끼워 들어가므로 link 태그도 페이지 전체에 들어간다. 그래서 style.css는 header, section, footer 모두에 적용된다.",
   "지금은 서버 처리와 데이터베이스가 없는 화면구현 실습이다. 버튼을 눌러도 데이터가 저장되거나 목록이 바뀌지 않는다."
  ]
 }
];
