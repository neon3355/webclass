/* 연습 자료 — 선생님이 고치는 파일
   · TYPING: 타자 연습 단계별 낱말·코드
   · FILES : 코드 연습에 쓰는 수업 코드 (한 줄씩)
     t: 학생이 쓰는 줄 / auto: Eclipse가 자동으로 만들어 주는 줄(쓰지 않음) / h: 외워 쓰기 때 보여 줄 설명
     {sid} {name} 은 학생의 학번·이름으로 바뀝니다. */
window.WC_TYPING = [
  { id: "w1", name: "1. HTML 태그 낱말", desc: "화면의 뼈대를 만드는 태그 이름", count: 20, goal: 100,
    items: "html head title body header nav section footer table tr th td form input ul li a h2 link meta br".split(" ") },
  { id: "w2", name: "2. CSS 낱말", desc: "style.css에 나오는 속성과 값", count: 20, goal: 100,
    items: "style position fixed height width background-color color top left bottom text-align center line-height font-size margin padding auto text-decoration none border orange pink lightgray".split(" ") },
  { id: "w3", name: "3. JSP·속성 낱말", desc: "파일 이름과 태그 속성", count: 20, goal: 100,
    items: "jsp include page index href rel stylesheet charset type text submit reset button value name class colspan rowspan onclick location insert modify home css header.jsp footer.jsp index.jsp style.css".split(" ") },
  { id: "s1", name: "4. 기호", desc: "코드에서 가장 느려지는 기호들", count: 20, goal: 60,
    items: ["<>", "</>", "{}", "=\"\"", ":", ";", "<a>", "</a>", "<tr>", "</td>", ".jsp", ".css", "100%", "0px", "70px", "\">", ";}", "()", "''", "<%@", "%>", "-", ".td-center", "=\"1\"", "<h2>", "</h2>"] },
  { id: "c1", name: "5. 짧은 코드", desc: "속성 하나, 태그 하나를 통째로", count: 15, goal: 100,
    items: ["position: fixed;", "top: 0px;", "left: 0px;", "bottom: 0px;", "width: 100%;", "height: 70px;", "line-height: 70px;", "text-align: center;", "font-size: 32px;", "margin: auto;",
      "background-color: orange;", "text-decoration: none;", "<header>", "</header>", "<section>", "</section>", "<table border=\"1\">", "<form>", "</form>",
      "href=\"index.jsp\"", "rel=\"stylesheet\"", "type=\"text\"", "type=\"submit\"", "type=\"reset\"", "colspan=\"2\"", "class=\"td-center\"", "name=\"facility_name\""] },
  { id: "c2", name: "6. 코드 한 줄", desc: "수업 코드에 실제로 나오는 한 줄", count: 10, goal: 120,
    items: ["<link href=\"style.css\" rel=\"stylesheet\">", "<jsp:include page=\"header.jsp\"></jsp:include>", "<jsp:include page=\"footer.jsp\"></jsp:include>",
      "<a href=\"index.jsp\">home</a>", "<td><input type=\"text\" name=\"facility_name\"></td>", "<input type=\"submit\" value=\"insert\">", "<input type=\"reset\" value=\"reset\">",
      "<td colspan=\"2\" class=\"td-center\">", "nav a { text-decoration: none; }", "h2 { text-align: center; }", "table { margin: auto; }", ".td-center { text-align: center; }",
      "<input type=\"button\" value=\"home\" onclick=\"location.href='index.jsp'\">", "<meta charset=\"UTF-8\">", "<title>index</title>"] }
];

var WC_STYLE_LINES = [
    { auto: "@charset \"UTF-8\";" }, { blank: 1 },
    { t: "header {", h: "header 규칙 시작 (선택자와 여는 중괄호)" },
    { t: "position: fixed;", h: "스크롤해도 움직이지 않게 화면에 고정", in: 1 },
    { t: "height: 70px;", h: "높이 70px", in: 1 },
    { t: "width: 100%;", h: "가로 너비를 화면 전체(100%)로", in: 1 },
    { t: "top: 0px;", h: "화면 위쪽에서 0px — 맨 위에 붙이기", in: 1 },
    { t: "left: 0px;", h: "화면 왼쪽에서 0px — 왼쪽 끝에 붙이기", in: 1 },
    { t: "background-color: orange;", h: "배경색 주황색(orange)", in: 1 },
    { t: "line-height: 70px;", h: "줄 높이 70px — 글자를 세로 가운데로", in: 1 },
    { t: "text-align: center;", h: "글자를 가로 가운데 정렬", in: 1 },
    { t: "font-size: 32px;", h: "글자 크기 32px", in: 1 },
    { t: "}", h: "header 규칙 끝 (닫는 중괄호)" }, { blank: 1 },
    { t: "nav {", h: "nav 규칙 시작" },
    { t: "position: fixed;", h: "화면에 고정", in: 1 },
    { t: "height: 30px;", h: "높이 30px", in: 1 },
    { t: "width: 100%;", h: "가로 너비 100%", in: 1 },
    { t: "top: 70px;", h: "화면 위쪽에서 70px — header 바로 아래", in: 1 },
    { t: "left: 0px;", h: "화면 왼쪽에서 0px", in: 1 },
    { t: "background-color: pink;", h: "배경색 분홍색(pink)", in: 1 },
    { t: "line-height: 30px;", h: "줄 높이 30px — 글자를 세로 가운데로", in: 1 },
    { t: "}", h: "nav 규칙 끝" }, { blank: 1 },
    { t: "nav a { text-decoration: none; }", h: "nav 안의 링크 밑줄 없애기 (한 줄 규칙)" }, { blank: 1 },
    { t: "footer {", h: "footer 규칙 시작" },
    { t: "position: fixed;", h: "화면에 고정", in: 1 },
    { t: "height: 70px;", h: "높이 70px", in: 1 },
    { t: "width: 100%;", h: "가로 너비 100%", in: 1 },
    { t: "bottom: 0px;", h: "화면 아래쪽에서 0px — 맨 아래에 붙이기", in: 1 },
    { t: "left: 0px;", h: "화면 왼쪽에서 0px", in: 1 },
    { t: "background-color: orange;", h: "배경색 주황색(orange)", in: 1 },
    { t: "line-height: 70px;", h: "줄 높이 70px — 글자를 세로 가운데로", in: 1 },
    { t: "text-align: center;", h: "글자를 가로 가운데 정렬", in: 1 },
    { t: "}", h: "footer 규칙 끝" }, { blank: 1 },
    { t: "section {", h: "section 규칙 시작" },
    { t: "position: fixed;", h: "화면에 고정", in: 1 },
    { t: "width: 100%;", h: "가로 너비 100%", in: 1 },
    { t: "top: 100px;", h: "화면 위쪽에서 100px — header 70px + nav 30px 아래", in: 1 },
    { t: "left: 0px;", h: "화면 왼쪽에서 0px", in: 1 },
    { t: "background-color: lightgray;", h: "배경색 연한 회색(lightgray)", in: 1 },
    { t: "}", h: "section 규칙 끝" }, { blank: 1 },
    { t: "h2 { text-align: center; }", h: "h2 제목 글자를 가운데 정렬 (한 줄 규칙)" }, { blank: 1 },
    { t: "table { margin: auto; }", h: "표를 화면 가운데에 배치 (한 줄 규칙)" }, { blank: 1 },
    { t: ".td-center { text-align: center; }", h: "td-center 클래스가 붙은 칸의 글자를 가운데 정렬 (한 줄 규칙)" }
  ];

/* ───── 과제(프로그램) 만들기 ─────
   과제 하나 = style.css + header.jsp + footer.jsp + index.jsp + 입력 화면 1개.
   아래 WC_ASSIGNMENTS 에 묶음을 하나 더 쓰면 새 과제가 생깁니다. */
function wcProgram(p) {
  var A = [{ auto: "<%@ page language=\"java\" contentType=\"text/html; charset=UTF-8\"" }, { auto: "    pageEncoding=\"UTF-8\"%>" }, { auto: "<!DOCTYPE html>" }, { auto: "<html>" }, { auto: "<head>" }];
  var B = [{ auto: "<meta charset=\"UTF-8\">" }, { auto: "<title>Insert title here</title>" }, { auto: "</head>" }, { auto: "<body>" }];
  var Z = [{ auto: "</body>" }, { auto: "</html>" }];
  var INC_H = { t: "<jsp:include page=\"header.jsp\"></jsp:include>", h: "header.jsp를 불러오기", tip: "<jsp:include page=\"header.jsp\" /> 처럼 줄여 써도 정답입니다." };
  var INC_F = { t: "<jsp:include page=\"footer.jsp\"></jsp:include>", h: "footer.jsp를 불러오기", tip: "<jsp:include page=\"footer.jsp\" /> 처럼 줄여 써도 정답입니다." };
  var form = [INC_H, { t: "<section>", h: "본문 영역 시작" },
    { t: "<h2>" + p.form.title + "</h2>", h: "h2 제목 「" + p.form.title + "」", in: 1 },
    { t: "<form>", h: "입력 양식 시작", in: 1 }, { t: "<table border=\"1\">", h: "테두리가 1인 표 시작", in: 1 }];
  p.form.rows.forEach(function (r) {
    form.push({ t: "<tr>", h: "표의 한 행 시작", in: 2 }, { t: "<th>" + r[0] + "</th>", h: "제목 칸 「" + r[0] + "」", in: 3 },
      { t: "<td><input type=\"text\" name=\"" + r[1] + "\"></td>", h: "데이터 칸 안에 text 입력칸 (name은 " + r[1] + ")", in: 3 }, { t: "</tr>", h: "행 끝", in: 2 });
  });
  form.push({ t: "<tr>", h: "버튼 행 시작", in: 2 },
    { t: "<td colspan=\"2\" class=\"td-center\">", h: "가로 2칸을 합치고 td-center 클래스를 적용한 칸 시작", in: 3 },
    { t: "<input type=\"submit\" value=\"" + p.form.submit + "\">", h: "「" + p.form.submit + "」 전송 버튼", in: 4 },
    { t: "<input type=\"reset\" value=\"다시작성\">", h: "「다시작성」 초기화 버튼", in: 4 },
    { t: "<input type=\"button\" value=\"홈으로\" onclick=\"location.href='index.jsp'\">", h: "누르면 index.jsp로 이동하는 「홈으로」 버튼", in: 4 },
    { t: "</td>", h: "칸 끝", in: 3 }, { t: "</tr>", h: "행 끝", in: 2 }, { t: "</table>", h: "표 끝", in: 1 }, { t: "</form>", h: "입력 양식 끝", in: 1 },
    { t: "</section>", h: "본문 영역 끝" }, INC_F);
  return { id: p.id, name: p.name, title: p.title, files: [
    { id: "style", name: "style.css", desc: "화면 디자인", lines: WC_STYLE_LINES },
    { id: "header", name: "header.jsp", desc: "프로그램 제목과 메뉴", lines: A.concat([{ t: "<link href=\"style.css\" rel=\"stylesheet\">", h: "style.css 파일을 연결하는 link 태그" }], B, [
      { t: "<header>" + p.title + "</header>", h: "header 태그 안에 프로그램 제목 「" + p.title + "」" },
      { t: "<nav>", h: "메뉴 영역 시작" },
      { t: "<a href=\"" + p.form.file + ".jsp\">" + p.form.menu + "</a>", h: "「" + p.form.menu + "」을(를) 누르면 " + p.form.file + ".jsp로 이동", in: 1 },
      { t: "<a href=\"" + p.list.file + ".jsp\">" + p.list.menu + "</a>", h: "「" + p.list.menu + "」을(를) 누르면 " + p.list.file + ".jsp로 이동", in: 1 },
      { t: "<a href=\"index.jsp\">홈으로</a>", h: "「홈으로」를 누르면 index.jsp로 이동", in: 1 },
      { t: "</nav>", h: "메뉴 영역 끝" }], Z) },
    { id: "footer", name: "footer.jsp", desc: "저작권과 내 학번·이름", lines: A.concat(B, [
      { t: "<footer>", h: "맨 아래 영역 시작" },
      { t: "Copyrightⓒ2026 {sid} {name} All rights reserved.", h: "저작권 문구: Copyrightⓒ2026 내학번 내이름 All rights reserved.", in: 1,
        tip: "ⓒ 입력 방법: 한글 ㅇ(이응)을 치고 키보드의 [한자] 키를 누른 뒤 목록에서 ⓒ를 고릅니다. 어려우면 (c) 로 써도 정답입니다." },
      { t: "</footer>", h: "맨 아래 영역 끝" }], Z) },
    { id: "index", name: "index.jsp", desc: "홈 화면 (프로그램 소개)", lines: A.concat(B, [INC_H,
      { t: "<section>", h: "본문 영역 시작" },
      { t: "<h2>" + p.title + "</h2>", h: "h2 제목 「" + p.title + "」", in: 1 },
      { t: p.intro, h: "소개 글: " + p.intro, in: 1 },
      { t: "</section>", h: "본문 영역 끝" }, INC_F], Z) },
    { id: p.form.file, name: p.form.file + ".jsp", desc: p.form.title + " 화면 (form + table + input)", lines: A.concat(B, form, Z) }
  ] };
}

/* ───── 수업 코드를 그대로 넣는 과제 ─────
   wcPage(파일id, 파일이름, 설명, 본문 줄들, link 줄 넣기) → Eclipse 자동 생성 줄을 앞뒤에 붙인 JSP 파일 하나 */
function wcPage(id, name, desc, body, link) {
  var A = [{ auto: "<%@ page language=\"java\" contentType=\"text/html; charset=UTF-8\"" }, { auto: "    pageEncoding=\"UTF-8\"%>" }, { auto: "<!DOCTYPE html>" }, { auto: "<html>" }, { auto: "<head>" }];
  var L = link ? [{ t: "<link href=\"style.css\" rel=\"stylesheet\">", h: "style.css 파일을 연결하는 link 태그" }] : [];
  var B = [{ auto: "<meta charset=\"UTF-8\">" }, { auto: "<title>Insert title here</title>" }, { auto: "</head>" }, { auto: "<body>" }];
  return { id: id, name: name, desc: desc, lines: A.concat(L, B, body, [{ auto: "</body>" }, { auto: "</html>" }]) };
}
var WC_CAFE = (function () {
  var IH = { t: "<jsp:include page=\"header.jsp\" />", h: "header.jsp를 불러오기", tip: "<jsp:include page=\"header.jsp\"></jsp:include> 로 써도 정답입니다. (Ctrl+Space로 자동 완성되는 모양)" };
  var IF = { t: "<jsp:include page=\"footer.jsp\" />", h: "footer.jsp를 불러오기", tip: "<jsp:include page=\"footer.jsp\"></jsp:include> 로 써도 정답입니다." };
  var S1 = { t: "<section>", h: "본문 영역 시작" }, S2 = { t: "</section>", h: "본문 영역 끝" };
  function inRow(label, name) { return { t: "<tr><td class=\"td-center\">" + label + "</td><td><input type=\"text\" name=\"" + name + "\"></td></tr>", h: "한 행: td-center 클래스 칸 「" + label + "」 + 칸 안에 text 입력칸 (name은 " + name + ")", in: 3 }; }
  function dataRow(cells) { return { t: "<tr>" + cells.map(function (c) { return "<td>" + c + "</td>"; }).join("") + "</tr>", h: "데이터 한 행 (칸 " + cells.length + "개): " + cells.join(" · "), in: 2 }; }
  function heads(cells) { return cells.map(function (c) { return "<th>" + c + "</th>"; }).join(""); }
  var menuHead = ["메뉴번호", "메뉴명", "분류", "가격", "원산지", "판매상태"], orderHead = ["주문번호", "메뉴명", "수량", "주문시간", "상태"];
  return { id: "a3", name: "과제 3", title: "카페 메뉴 관리 프로그램", files: [
    { id: "style", name: "style.css", desc: "화면 디자인", lines: WC_STYLE_LINES },
    wcPage("header", "header.jsp", "프로그램 제목과 메뉴 4개", [
      { t: "<header>카페 메뉴 관리 프로그램 ({sid} {name})</header>", h: "header 태그 안에 프로그램 제목 「카페 메뉴 관리 프로그램」과 괄호 안에 내 학번 이름" },
      { t: "<nav>", h: "메뉴 영역 시작" },
      { t: "<a href=\"menu.jsp\">메뉴등록</a> &nbsp;&nbsp;", h: "「메뉴등록」을 누르면 menu.jsp로 이동 + 뒤에 빈칸 2개(&nbsp;&nbsp;)", in: 1, tip: "&nbsp; 는 화면에 빈칸 한 개를 넣는 코드입니다. 메뉴 사이를 띄우려고 두 번 씁니다." },
      { t: "<a href=\"menulist.jsp\">메뉴목록조회</a> &nbsp;&nbsp;", h: "「메뉴목록조회」를 누르면 menulist.jsp로 이동 + 빈칸 2개", in: 1 },
      { t: "<a href=\"order.jsp\">주문현황조회</a> &nbsp;&nbsp;", h: "「주문현황조회」를 누르면 order.jsp로 이동 + 빈칸 2개", in: 1 },
      { t: "<a href=\"index.jsp\">홈으로</a>", h: "「홈으로」를 누르면 index.jsp로 이동", in: 1 },
      { t: "</nav>", h: "메뉴 영역 끝" }], true),
    wcPage("footer", "footer.jsp", "저작권과 내 학번·이름", [
      { t: "<footer>Copyrightⓒ2026 {sid} {name} All rights reserved.</footer>", h: "footer 태그 안에 저작권 문구: Copyrightⓒ2026 내학번 내이름 All rights reserved.",
        tip: "ⓒ 입력 방법: 한글 ㅇ(이응)을 치고 키보드의 [한자] 키를 누른 뒤 목록에서 ⓒ를 고릅니다. 어려우면 (c) 로 써도 정답입니다." }]),
    wcPage("index", "index.jsp", "홈 화면 (프로그램 소개와 기능 목록)", [IH, S1,
      { t: "<h2>카페 메뉴 관리 프로그램</h2>", h: "h2 제목 「카페 메뉴 관리 프로그램」", in: 1 },
      { t: "카페 메뉴를 등록하고 메뉴 목록과 주문 현황을 확인할 수 있는 프로그램입니다.<br><br>", h: "소개 글 + 줄바꿈 2번(<br><br>): 카페 메뉴를 등록하고 메뉴 목록과 주문 현황을 확인할 수 있는 프로그램입니다.", in: 1 },
      { t: "카페에서 필요한 메뉴 정보와 주문 상태를 화면에서 쉽게 확인할 수 있습니다.", h: "소개 글: 카페에서 필요한 메뉴 정보와 주문 상태를 화면에서 쉽게 확인할 수 있습니다.", in: 1 },
      { t: "<ul>", h: "순서 없는 목록 시작", in: 1 },
      { t: "<li>메뉴 등록</li>", h: "목록 항목 「메뉴 등록」", in: 2 },
      { t: "<li>메뉴 목록 조회</li>", h: "목록 항목 「메뉴 목록 조회」", in: 2 },
      { t: "<li>주문 현황 조회</li>", h: "목록 항목 「주문 현황 조회」", in: 2 },
      { t: "</ul>", h: "목록 끝", in: 1 }, S2, IF]),
    /* 수업 때는 form 을 배우기 전이라 table 만 썼지만, 등록 화면은 form → table → input 으로 외우도록 form 으로 감쌌습니다 */
    wcPage("menu", "menu.jsp", "메뉴 등록 화면 (form + table + input)", [IH, S1,
      { t: "<h2>카페 메뉴 등록</h2>", h: "h2 제목 「카페 메뉴 등록」", in: 1 },
      { t: "<form>", h: "입력 양식 시작", in: 1 },
      { t: "<table border=\"1\">", h: "테두리가 1인 표 시작", in: 2 },
      inRow("메뉴번호", "menuno"), inRow("메뉴명", "menuname"), inRow("분류", "category"), inRow("가격", "price"), inRow("원산지", "origin"), inRow("판매상태", "status"),
      { t: "<tr>", h: "버튼 행 시작", in: 3 },
      { t: "<td colspan=\"2\" class=\"td-center\">", h: "가로 2칸을 합치고 td-center 클래스를 적용한 칸 시작", in: 4 },
      { t: "<input type=\"submit\" value=\"등록\">", h: "「등록」 전송 버튼", in: 5 },
      { t: "<input type=\"reset\" value=\"다시쓰기\">", h: "「다시쓰기」 초기화 버튼", in: 5 },
      { t: "</td>", h: "칸 끝", in: 4 }, { t: "</tr>", h: "행 끝", in: 3 },
      { t: "</table>", h: "표 끝", in: 2 }, { t: "</form>", h: "입력 양식 끝", in: 1 }, S2, IF]),
    wcPage("menulist", "menulist.jsp", "메뉴 목록 화면 (제목 행 + 데이터 5행)", [IH, S1,
      { t: "<h2>메뉴목록조회</h2>", h: "h2 제목 「메뉴목록조회」", in: 1 },
      { t: "<table border=\"1\">", h: "테두리가 1인 표 시작", in: 1 },
      { t: "<tr>", h: "제목 행 시작", in: 2 },
      { t: heads(menuHead), h: "제목 칸(th) 6개: " + menuHead.join(" · "), in: 3 },
      { t: "</tr>", h: "제목 행 끝", in: 2 },
      dataRow(["M001", "아메리카노", "커피", "3000", "브라질", "판매중"]), dataRow(["M002", "카페라떼", "커피", "4000", "브라질", "판매중"]),
      dataRow(["M003", "초코라떼", "논커피", "4500", "국내", "판매중"]), dataRow(["M004", "딸기스무디", "스무디", "5000", "국내", "판매중"]),
      dataRow(["M005", "치즈케이크", "디저트", "5500", "국내", "품절"]),
      { t: "</table>", h: "표 끝", in: 1 }, S2, IF]),
    wcPage("order", "order.jsp", "주문 현황 화면 (제목 행 + 데이터 4행)", [IH, S1,
      { t: "<h2>주문현황조회</h2>", h: "h2 제목 「주문현황조회」", in: 1 },
      { t: "<table border=\"1\">", h: "테두리가 1인 표 시작", in: 1 },
      { t: "<tr>" + heads(orderHead) + "</tr>", h: "제목 행 한 줄 (th 5개): " + orderHead.join(" · "), in: 2 },
      dataRow(["O001", "아메리카노", "2", "09:10", "완료"]), dataRow(["O002", "카페라떼", "1", "09:25", "제조중"]),
      dataRow(["O003", "딸기스무디", "2", "10:05", "대기"]), dataRow(["O004", "치즈케이크", "1", "10:20", "완료"]),
      { t: "</table>", h: "표 끝", in: 1 }, S2, IF])
  ] };
})();

/* ───── 과제 4: 자격증 원서접수 관리 프로그램 (수업 코드 그대로) ─────
   등록(form+table+input) → 목록(표 안의 링크) → 현황 → 수정(value) 화면 흐름 */
var WC_CERT = (function () {
  var IH = { t: "<jsp:include page=\"header.jsp\"></jsp:include>", h: "header.jsp를 불러오기", tip: "<jsp:include page=\"header.jsp\" /> 처럼 줄여 써도 정답입니다." };
  var IF = { t: "<jsp:include page=\"footer.jsp\"></jsp:include>", h: "footer.jsp를 불러오기", tip: "<jsp:include page=\"footer.jsp\" /> 처럼 줄여 써도 정답입니다." };
  var S1 = { t: "<section>", h: "본문 영역 시작" }, S2 = { t: "</section>", h: "본문 영역 끝" };
  function inRow(label, name, value) {
    return { t: "<tr><th>" + label + "</th><td><input type=\"text\" name=\"" + name + "\"" + (value ? " value=\"" + value + "\"" : "") + "></td></tr>",
      h: "한 행: 제목 칸(th) 「" + label + "」 + 칸 안에 text 입력칸 (name은 " + name + (value ? ", 처음 값 value는 " + value : "") + ")", in: 3 };
  }
  function buttons(label) {
    return [{ t: "<tr>", h: "버튼 행 시작", in: 3 },
      { t: "<td colspan=\"2\" class=\"td-center\">", h: "가로 2칸을 합치고 td-center 클래스를 적용한 칸 시작", in: 4 },
      { t: "<input type=\"submit\" value=\"" + label + "\">", h: "「" + label + "」 전송 버튼", in: 5 },
      { t: "<input type=\"reset\" value=\"다시쓰기\">", h: "「다시쓰기」 초기화 버튼", in: 5 },
      { t: "</td>", h: "칸 끝", in: 4 }, { t: "</tr>", h: "행 끝", in: 3 }];
  }
  function heads(cells) { return cells.map(function (c) { return "<th>" + c + "</th>"; }).join(""); }
  function person(c) {
    return { t: "<tr><td><a href=\"update.jsp\">" + c[0] + "</a></td>" + c.slice(1).map(function (x) { return "<td>" + x + "</td>"; }).join("") + "</tr>",
      h: "데이터 한 행: 수험번호 " + c[0] + "은(는) update.jsp로 이동하는 링크 · " + c.slice(1).join(" · "), in: 2 };
  }
  function stat(c) {
    return { t: "<tr><td>" + c[0] + "</td><td class=\"td-right\">" + c[1] + "</td><td>" + c[2] + "</td></tr>",
      h: "데이터 한 행: " + c[0] + " · " + c[1] + " (td-right 클래스로 오른쪽 정렬) · " + c[2], in: 2 };
  }
  var F = [["수험번호", "examno", "2026001"], ["성명", "name", "김하늘"], ["자격종목", "subject", "정보처리산업기사"], ["시험장소", "place", "제1시험실"], ["접수일자", "applydate", "2026-09-01"], ["응시구분", "type", "필기"]];
  var listHead = F.map(function (x) { return x[0]; });
  /* style.css 는 다른 과제와 같고, 이 과제에서 쓰는 .td-right 한 줄만 더 있습니다 */
  var style = WC_STYLE_LINES.concat([{ blank: 1 }, { t: ".td-right { text-align: right; }", h: "td-right 클래스가 붙은 칸의 글자를 오른쪽 정렬 (한 줄 규칙)" }]);
  return { id: "a4", name: "과제 4", title: "자격증 원서접수 관리 프로그램", files: [
    { id: "style", name: "style.css", desc: "화면 디자인 (다른 과제와 같고 .td-right 한 줄 추가)", lines: style },
    wcPage("header", "header.jsp", "프로그램 제목과 메뉴 4개", [
      { t: "<header>자격증 원서접수 관리 프로그램</header>", h: "header 태그 안에 프로그램 제목 「자격증 원서접수 관리 프로그램」" },
      { t: "<nav>", h: "메뉴 영역 시작" },
      { t: "<a href=\"apply.jsp\">원서접수</a> &nbsp;&nbsp;", h: "「원서접수」를 누르면 apply.jsp로 이동 + 뒤에 빈칸 2개(&nbsp;&nbsp;)", in: 1, tip: "&nbsp; 는 화면에 빈칸 한 개를 넣는 코드입니다. 메뉴 사이를 띄우려고 두 번 씁니다." },
      { t: "<a href=\"applylist.jsp\">접수목록조회/수정</a> &nbsp;&nbsp;", h: "「접수목록조회/수정」을 누르면 applylist.jsp로 이동 + 빈칸 2개", in: 1 },
      { t: "<a href=\"status.jsp\">접수현황조회</a> &nbsp;&nbsp;", h: "「접수현황조회」를 누르면 status.jsp로 이동 + 빈칸 2개", in: 1 },
      { t: "<a href=\"index.jsp\">홈으로</a>", h: "「홈으로」를 누르면 index.jsp로 이동", in: 1 },
      { t: "</nav>", h: "메뉴 영역 끝" }], true),
    wcPage("footer", "footer.jsp", "저작권과 내 학번·이름", [
      { t: "<footer>Copyrightⓒ2026 {sid} {name} All rights reserved.</footer>", h: "footer 태그 안에 저작권 문구: Copyrightⓒ2026 내학번 내이름 All rights reserved.",
        tip: "ⓒ 입력 방법: 한글 ㅇ(이응)을 치고 키보드의 [한자] 키를 누른 뒤 목록에서 ⓒ를 고릅니다. 어려우면 (c) 로 써도 정답입니다." }]),
    wcPage("index", "index.jsp", "시작 화면 (프로그램 안내 4가지)", [IH, S1,
      { t: "<h2>자격증 원서접수 관리 프로그램</h2>", h: "h2 제목 「자격증 원서접수 관리 프로그램」", in: 1 },
      { t: "자격증 시험 원서를 접수하고 접수 목록과 현황을 확인하는 프로그램입니다.<br><br>", h: "소개 글 + 줄바꿈 2번(<br><br>): 자격증 시험 원서를 접수하고 접수 목록과 현황을 확인하는 프로그램입니다.", in: 1 },
      { t: "1. 원서접수 화면에서 수험자 정보를 입력합니다.<br>", h: "안내 1 + 줄바꿈(<br>): 1. 원서접수 화면에서 수험자 정보를 입력합니다.", in: 1 },
      { t: "2. 접수목록조회/수정 화면에서 접수 정보를 확인합니다.<br>", h: "안내 2 + 줄바꿈(<br>): 2. 접수목록조회/수정 화면에서 접수 정보를 확인합니다.", in: 1 },
      { t: "3. 수험번호를 클릭하면 수정 화면으로 이동합니다.<br>", h: "안내 3 + 줄바꿈(<br>): 3. 수험번호를 클릭하면 수정 화면으로 이동합니다.", in: 1 },
      { t: "4. 접수현황조회 화면에서 종목별 접수 현황을 확인합니다.", h: "안내 4 (줄바꿈 없음): 4. 접수현황조회 화면에서 종목별 접수 현황을 확인합니다.", in: 1 },
      S2, IF]),
    wcPage("apply", "apply.jsp", "원서접수 화면 (form + table + input)", [IH, S1,
      { t: "<h2>자격증 원서접수</h2>", h: "h2 제목 「자격증 원서접수」", in: 1 },
      { t: "<form>", h: "입력 양식 시작 — table 전체를 감쌉니다", in: 1 },
      { t: "<table border=\"1\">", h: "테두리가 1인 표 시작", in: 2 },
      inRow(F[0][0], F[0][1], F[0][2])].concat(F.slice(1).map(function (x) { return inRow(x[0], x[1]); }), buttons("등록"), [
      { t: "</table>", h: "표 끝", in: 2 }, { t: "</form>", h: "입력 양식 끝", in: 1 }, S2, IF])),
    wcPage("applylist", "applylist.jsp", "접수 목록 화면 (수험번호를 누르면 수정 화면으로)", [IH, S1,
      { t: "<h2>접수목록조회/수정</h2>", h: "h2 제목 「접수목록조회/수정」", in: 1 },
      { t: "<table border=\"1\">", h: "테두리가 1인 표 시작", in: 1 },
      { t: "<tr>", h: "제목 행 시작", in: 2 },
      { t: heads(listHead), h: "제목 칸(th) 6개: " + listHead.join(" · "), in: 3 },
      { t: "</tr>", h: "제목 행 끝", in: 2 },
      person(["2026001", "김하늘", "정보처리산업기사", "제1시험실", "2026-09-01", "필기"]), person(["2026002", "이바다", "컴퓨터활용능력", "제2시험실", "2026-09-02", "실기"]),
      person(["2026003", "박누리", "정보처리산업기사", "제1시험실", "2026-09-03", "필기"]), person(["2026004", "최가람", "웹디자인개발기능사", "제3시험실", "2026-09-04", "실기"]),
      person(["2026005", "정다온", "컴퓨터활용능력", "제2시험실", "2026-09-05", "실기"]),
      { t: "</table>", h: "표 끝", in: 1 }, S2, IF]),
    wcPage("status", "status.jsp", "종목별 접수 현황 화면", [IH, S1,
      { t: "<h2>종목별 접수현황</h2>", h: "h2 제목 「종목별 접수현황」", in: 1 },
      { t: "<table border=\"1\">", h: "테두리가 1인 표 시작", in: 1 },
      { t: "<tr>" + heads(["자격종목", "접수인원", "시험장소"]) + "</tr>", h: "제목 행 한 줄 (th 3개): 자격종목 · 접수인원 · 시험장소", in: 2 },
      stat(["정보처리산업기사", "2명", "제1시험실"]), stat(["컴퓨터활용능력", "2명", "제2시험실"]), stat(["웹디자인개발기능사", "1명", "제3시험실"]),
      { t: "</table>", h: "표 끝", in: 1 }, S2, IF]),
    wcPage("update", "update.jsp", "접수정보 수정 화면 (입력칸에 기존 값 value)", [IH, S1,
      { t: "<h2>접수정보수정</h2>", h: "h2 제목 「접수정보수정」", in: 1 },
      { t: "<form action=\"#\" method=\"post\">", h: "입력 양식 시작 (보낼 곳 action은 #, 보내는 방법 method는 post)", in: 1 },
      { t: "<table border=\"1\">", h: "테두리가 1인 표 시작", in: 2 }].concat(F.map(function (x) { return inRow(x[0], x[1], x[2]); }), buttons("수정"), [
      { t: "</table>", h: "표 끝", in: 2 }, { t: "</form>", h: "입력 양식 끝", in: 1 }, S2, IF]))
  ] };
})();

window.WC_ASSIGNMENTS = [
  wcProgram({ id: "a1", name: "과제 1", title: "학교 체육시설 예약 관리 프로그램", intro: "학교 체육시설 예약 정보를 관리하는 프로그램입니다.",
    form: { file: "reservation", menu: "예약신청", title: "예약신청", submit: "예약등록", rows: [["시설명", "facility_name"], ["예약자명", "user_name"]] },
    list: { file: "reservationlist", menu: "예약현황" } }),
  wcProgram({ id: "a2", name: "과제 2", title: "도서 대출 관리 프로그램", intro: "학교 도서관의 도서 대출 정보를 관리하는 프로그램입니다.",
    form: { file: "loan", menu: "대출신청", title: "대출신청", submit: "대출등록", rows: [["도서명", "book_name"], ["대출자명", "user_name"]] },
    list: { file: "loanlist", menu: "대출현황" } }),
  WC_CAFE,     // 과제 3: 수업에서 작성한 카페 메뉴 관리 프로그램
  WC_CERT      // 과제 4: 자격증 원서접수 관리 프로그램
];
