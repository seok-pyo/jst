/**
 * 부분완성 문제: 기본 이벤트 위임
 * 문제점: li가 아닌 곳 클릭 시 필터링 없음
 * 난이도: ★☆☆
 */

/*
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
*/

function setupListClickHandler() {
  const list = document.getElementById("list");

  // 현재 코드 (문제 있음)
  list.addEventListener("click", (e) => {
    console.log(e.target.textContent);
    // 문제: ul 자체를 클릭해도 실행됨
  });

  // 수정하세요:
  // li 요소만 클릭했을 때 동작하도록
}

// 힌트: 아래 방법 중 하나 사용
// 1. e.target.tagName === 'LI'
// 2. e.target.matches('li')
// 3. e.target.closest('li')
