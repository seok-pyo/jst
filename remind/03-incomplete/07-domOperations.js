/**
 * 미완성 문제: DOM 요소 조작 함수들
 * 난이도: ★★☆
 */

// 1. 요소 삭제
function removeElement(selector) {
  // 구현하세요
}

// 2. 요소 교체
function replaceElement(oldSelector, newElement) {
  // 구현하세요
}

// 3. 요소 앞에 삽입
function insertBefore(newElement, referenceSelector) {
  // 구현하세요
}

// 4. 요소 뒤에 삽입
function insertAfter(newElement, referenceSelector) {
  // 구현하세요
  // 힌트: nextSibling 활용
}

// 테스트 HTML
/*
<div id="container">
  <div id="first">First</div>
  <div id="second">Second</div>
  <div id="third">Third</div>
</div>
*/

// 테스트
// removeElement('#second');
// 결과: first, third만 남음

// const newDiv = document.createElement('div');
// newDiv.textContent = 'New';
// replaceElement('#second', newDiv);
// 결과: first, New, third

// insertBefore(newDiv, '#second');
// 결과: first, New, second, third

// insertAfter(newDiv, '#second');
// 결과: first, second, New, third
