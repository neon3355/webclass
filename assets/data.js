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
  var INC_H = { t: "<jsp:include page=\"header.jsp\"></jsp:include>", h: "header.jsp를 불러오기" };
  var INC_F = { t: "<jsp:include page=\"footer.jsp\"></jsp:include>", h: "footer.jsp를 불러오기" };
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
      { t: "Copyrightⓒ2026 {sid} {name} All rights reserved.", h: "저작권 문구: Copyrightⓒ2026 내학번 내이름 All rights reserved.  (ⓒ는 (c)로 써도 됩니다)", in: 1 },
      { t: "</footer>", h: "맨 아래 영역 끝" }], Z) },
    { id: "index", name: "index.jsp", desc: "홈 화면 (프로그램 소개)", lines: A.concat(B, [INC_H,
      { t: "<section>", h: "본문 영역 시작" },
      { t: "<h2>" + p.title + "</h2>", h: "h2 제목 「" + p.title + "」", in: 1 },
      { t: p.intro, h: "소개 글: " + p.intro, in: 1 },
      { t: "</section>", h: "본문 영역 끝" }, INC_F], Z) },
    { id: p.form.file, name: p.form.file + ".jsp", desc: p.form.title + " 화면 (form + table + input)", lines: A.concat(B, form, Z) }
  ] };
}

window.WC_ASSIGNMENTS = [
  wcProgram({ id: "a1", name: "과제 1", title: "학교 체육시설 예약 관리 프로그램", intro: "학교 체육시설 예약 정보를 관리하는 프로그램입니다.",
    form: { file: "reservation", menu: "예약신청", title: "예약신청", submit: "예약등록", rows: [["시설명", "facility_name"], ["예약자명", "user_name"]] },
    list: { file: "reservationlist", menu: "예약현황" } }),
  wcProgram({ id: "a2", name: "과제 2", title: "도서 대출 관리 프로그램", intro: "학교 도서관의 도서 대출 정보를 관리하는 프로그램입니다.",
    form: { file: "loan", menu: "대출신청", title: "대출신청", submit: "대출등록", rows: [["도서명", "book_name"], ["대출자명", "user_name"]] },
    list: { file: "loanlist", menu: "대출현황" } })
];
