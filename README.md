# 화면구현 연습실

응용프로그래밍 화면구현 수업용 연습 사이트입니다. 학생이 학번·이름을 넣고 들어와 타자 연습 → 코드 연습 → 형성평가 → 과제 현황 제출 순서로 스스로 공부합니다.

주소: https://neon3355.github.io/webclass/
(저장소 Settings → Pages → Deploy from a branch → `main` / `(root)` 로 켜야 열립니다.)

## 폴더 구성

| 위치 | 내용 |
|---|---|
| `index.html` | 입장(학번·이름) + 오늘의 순서 |
| `typing/` | 타자 연습 (낱말 → 기호 → 짧은 코드 → 코드 한 줄) |
| `code/` | 코드 연습 (파일별 보고 쓰기 / 외워 쓰기) |
| `quiz/` | 형성평가 목록과 각 평가 페이지 |
| `report/` | 내 과제 현황 (캡처 제출용) |
| `assets/data.js` | **타자 낱말과 수업 코드 원본** — 내용을 바꿀 때는 이 파일만 고칩니다 |
| `assets/config.js` | 사이트 이름, 과제 제출 주소 |
| `assets/common.js`, `common.css` | 상단 바(학번·이름 표시), 기록 저장, 공통 디자인 |

## 내용 고치기

- **타자 낱말 추가**: `assets/data.js`의 `WC_TYPING`에서 해당 단계 `items`에 낱말을 추가합니다.
- **수업 코드 바꾸기**: `assets/data.js`의 `WC_FILES`. 한 줄이 `{ t: "코드", h: "외워 쓰기에서 보이는 설명", in: 들여쓰기 단계 }` 입니다. `{ auto: "..." }`는 Eclipse가 자동으로 만드는 줄(학생이 쓰지 않음), `{ blank: 1 }`은 빈 줄입니다. `{sid}`, `{name}`은 학생의 학번·이름으로 바뀝니다.
- **형성평가 추가**: `quiz/새폴더/index.html`로 넣고, `</body>` 앞에 아래 두 줄을 넣은 뒤 `quiz/index.html`의 `SECTIONS`에 한 줄 추가합니다.
  ```html
  <script src="../../assets/config.js"></script>
  <script src="../../assets/common.js"></script>
  ```

## 과제 받기

1. **캡처 제출 (기본)**: 학생이 「내 과제」 화면을 캡처해서 제출합니다. 학번·이름, 날짜, 활동별 최고·최근 기록과 횟수가 한 장에 나옵니다.
2. **구글 시트로 자동 수집 (선택)**: 아래처럼 설정하면 「내 과제」에 **선생님께 제출하기** 버튼이 생기고, 누르면 기록이 구글 시트에 한 줄씩 쌓입니다.

### 구글 시트 설정 방법

1. 구글 시트를 새로 만들고 **확장 프로그램 → Apps Script**를 엽니다.
2. 아래 코드를 붙여 넣고 저장합니다.
   ```javascript
   function doPost(e) {
     var d = JSON.parse(e.postData.contents);
     var sh = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
     if (sh.getLastRow() === 0) sh.appendRow(["받은 시각", "학번", "이름", "구분", "활동", "최고", "최근", "횟수", "결과", "자세히", "마지막으로 한 때"]);
     d.records.forEach(function (r) {
       sh.appendRow([new Date(), d.sid, d.name, r.group, r.title, r.best + r.unit, r.last + r.unit, r.count, r.pass, r.detail, r.lastAt]);
     });
     return ContentService.createTextOutput("ok");
   }
   ```
3. **배포 → 새 배포 → 유형: 웹 앱**, 실행 계정 **나**, 액세스 권한 **모든 사용자**로 배포합니다.
4. 나온 웹 앱 URL(`https://script.google.com/macros/s/.../exec`)을 `assets/config.js`의 `submitUrl: ""` 따옴표 안에 넣습니다.

## 알아둘 점

- 학번·이름과 기록은 학생이 쓰는 컴퓨터의 브라우저(localStorage)에 저장됩니다. 컴퓨터나 브라우저를 바꾸면 기록이 따로 쌓입니다.
- 실습실 PC를 여러 반이 같이 쓰면, 다음 학생은 오른쪽 위 **바꾸기**를 눌러 자기 학번·이름으로 다시 들어가야 합니다. 기록은 학번별로 따로 저장됩니다.
