/**
 * 부분완성 문제: Todo 리스트 렌더링
 * 문제점: li를 만들기만 하고 DOM에 추가하지 않음
 * 난이도: ★★☆
 */

const todos = [
  { id: 1, text: "JavaScript 공부", done: false },
  { id: 2, text: "TypeScript 공부", done: true },
  { id: 3, text: "React 공부", done: false },
];

function renderTodoList(container, todos) {
  // 현재 문제 있는 코드:
  todos.forEach((item) => {
    const list = document.createElement("li");
    list.setAttribute("data-id", item.id);
    list.textContent = item.text;
    if (item.done) list.style.textDecoration = "line-through";
    // 여기서 끝남 - ul도 없고, appendChild도 없음
  });

  // 수정하세요:
  // 1. ul 요소 생성
  // 2. 각 li를 ul에 추가
  // 3. ul을 container에 추가
}

/*
 * 결과 예시:
 * <ul>
 *   <li data-id="1">JavaScript 공부</li>
 *   <li data-id="2" style="text-decoration: line-through">TypeScript 공부</li>
 *   <li data-id="3">React 공부</li>
 * </ul>
 */

// 테스트 (브라우저에서)
// const container = document.getElementById('app');
// renderTodoList(container, todos);
