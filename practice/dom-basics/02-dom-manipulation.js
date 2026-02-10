/**
 * 문제 2: DOM 조작 (Create, Read, Update, Delete)
 *
 * 요구사항:
 * - createElement, appendChild 등 사용
 * - 동적으로 UI 구성
 * - innerHTML 없이 구현 (보안, 성능)
 */

// ========== 문제 2-1: Todo 리스트 렌더링 ==========
const todos = [
  { id: 1, text: "JavaScript 공부", done: false },
  { id: 2, text: "TypeScript 공부", done: true },
  { id: 3, text: "React 공부", done: false },
];

function renderTodoList(container, todos) {
  // 여기에 구현
  // - container 요소 안에 ul > li 구조로 렌더링
  // - done이 true면 취소선 스타일 적용
  // - 각 li에 data-id 속성 추가

  todos.forEach((item) => {
    const list = document.createElement("li");
    list.setAttribute("data-id", item.id);
    list.textContent = item.text;
    if (item.done) list.style.textDecoration = "line-through";
  });

  /*
   * 결과 예시:
   * <ul>
   *   <li data-id="1">JavaScript 공부</li>
   *   <li data-id="2" style="text-decoration: line-through">TypeScript 공부</li>
   *   <li data-id="3">React 공부</li>
   * </ul>
   */
}

// ========== 문제 2-2: 테이블 동적 생성 ==========
const users = [
  { id: 1, name: "철수", email: "cs@example.com" },
  { id: 2, name: "영희", email: "yh@example.com" },
  { id: 3, name: "민수", email: "ms@example.com" },
];

function renderTable(container, data, columns) {
  // 여기에 구현
  // - columns: ['id', 'name', 'email'] 형태의 배열
  // - thead와 tbody 구분
  // - container 안에 table 생성
  /*
   * 결과 예시:
   * <table>
   *   <thead>
   *     <tr><th>id</th><th>name</th><th>email</th></tr>
   *   </thead>
   *   <tbody>
   *     <tr><td>1</td><td>철수</td><td>cs@example.com</td></tr>
   *     ...
   *   </tbody>
   * </table>
   */
}

// 사용 예시
// renderTable(document.getElementById('app'), users, ['id', 'name', 'email']);

// ========== 문제 2-3: Fragment 활용 ==========
// 여러 요소를 한 번에 추가할 때 Fragment 사용

function appendMultipleItems(container, items) {
  // 여기에 구현
  // - DocumentFragment 사용
  // - 리플로우 최소화
  /*
   * Fragment 없이 (비효율적):
   * items.forEach(item => {
   *   container.appendChild(createItem(item)); // 매번 리플로우
   * });
   *
   * Fragment 사용 (효율적):
   * const fragment = document.createDocumentFragment();
   * items.forEach(item => {
   *   fragment.appendChild(createItem(item));
   * });
   * container.appendChild(fragment); // 한 번만 리플로우
   */
}

// ========== 문제 2-4: 요소 교체 및 삭제 ==========

function removeElement(selector) {
  // 여기에 구현
}

function replaceElement(oldSelector, newElement) {
  // 여기에 구현
}

function insertBefore(newElement, referenceSelector) {
  // 여기에 구현
}

function insertAfter(newElement, referenceSelector) {
  // 여기에 구현 (힌트: nextSibling 활용)
}

// ========== 문제 2-5: 클래스 조작 ==========

function addClass(selector, className) {
  // 여기에 구현
}

function removeClass(selector, className) {
  // 여기에 구현
}

function toggleClass(selector, className) {
  // 여기에 구현
}

function hasClass(selector, className) {
  // 여기에 구현
}

// ========== 테스트 ==========
console.log("DOM 조작 테스트는 브라우저에서 실행하세요");
