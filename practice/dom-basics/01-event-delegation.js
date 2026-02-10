/**
 * 문제 1: 이벤트 위임 (Event Delegation) 구현
 *
 * 요구사항:
 * - 부모 요소에 이벤트 리스너 하나만 등록
 * - 자식 요소 클릭 시 해당 요소 식별
 * - 동적으로 추가된 요소도 처리
 */

// ========== 개념 설명 ==========
/*
 * 이벤트 위임이란?
 * - 각 자식 요소에 이벤트를 달지 않고, 부모에 하나만 등록
 * - 이벤트 버블링을 활용
 * - 장점: 메모리 절약, 동적 요소 처리 가능
 */

// ========== 문제 1-1: 기본 이벤트 위임 ==========
// 리스트 아이템 클릭 시 해당 아이템의 텍스트 출력

/*
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
*/

function setupListClickHandler() {
  const list = document.getElementById("list"); // Node 객체
  // 여기에 구현
  // - list에 클릭 이벤트 등록
  // - 클릭된 li 요소의 텍스트 출력
  // - li가 아닌 곳 클릭 시 무시
  list.addEventListener("click", (e) => {
    console.log(e.target.textContent);
  });
}

// ========== 문제 1-2: 동적 요소 처리 ==========
// 새로운 아이템이 추가되어도 클릭 이벤트가 동작해야 함

function addNewItem(text) {
  const list = document.getElementById("list");
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}

// setupListClickHandler()를 호출한 후
// addNewItem("Item 4")로 추가된 아이템도 클릭 가능해야 함

// ========== 문제 1-3: 범용 delegate 함수 ==========
// jQuery의 .on() 메서드처럼 동작하는 함수

function delegate(parentSelector, eventType, childSelector, handler) {
  // 여기에 구현
  // parentSelector: 부모 요소 선택자
  // eventType: 이벤트 타입 (click, change 등)
  // childSelector: 실제 이벤트를 받을 자식 선택자
  // handler: 이벤트 핸들러
  const parent = document.queyrSlector(parentSelector);
  parent.addEventListener(eventType, (e) => {
    const target = e.target.closest(childSelector);

    if (target && parent.contains(target)) {
      handler.call(target, e);
    }
  });
}

// 사용 예시
// delegate('#list', 'click', 'li', function(e) {
//   console.log('Clicked:', this.textContent);
// });

// delegate('#form', 'change', 'input', function(e) {
//   console.log('Changed:', this.value);
// });

// ========== 문제 1-4: data 속성 활용 ==========
// data-action 속성으로 다른 동작 수행

/*
<div id="actions">
  <button data-action="save">저장</button>
  <button data-action="delete">삭제</button>
  <button data-action="cancel">취소</button>
</div>
*/

const handlers = {
  save: () => console.log("저장됨"),
  delete: () => console.log("삭제됨"),
  cancel: () => console.log("취소됨"),
};

function setupActionButtons() {
  const container = document.getElementById("actions");

  // 여기에 구현
  // - 클릭된 버튼의 data-action 값을 읽어서
  // - handlers 객체에서 해당 함수 실행
  container.addEventListener("click", (e) => {
    const action = e.target.dataset.action;

    if (action && handlers[action]) handlers[action]();
  });
}

// ========== 테스트용 HTML ==========
const testHTML = `
<!DOCTYPE html>
<html>
<body>
  <ul id="list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>

  <div id="actions">
    <button data-action="save">저장</button>
    <button data-action="delete">삭제</button>
    <button data-action="cancel">취소</button>
  </div>

  <script src="01-event-delegation.js"></script>
</body>
</html>
`;
