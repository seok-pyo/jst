/**
 * 미완성 문제: 클래스 조작 함수들
 * 난이도: ★☆☆
 */

function addClass(selector, className) {
  // 구현하세요
}

function removeClass(selector, className) {
  // 구현하세요
}

function toggleClass(selector, className) {
  // 구현하세요
}

function hasClass(selector, className) {
  // 구현하세요
  // 반환: boolean
}

// 테스트 HTML
/*
<div id="box" class="red large"></div>
*/

// 테스트
// addClass('#box', 'active');
// console.log(document.getElementById('box').className);
// "red large active"

// removeClass('#box', 'red');
// console.log(document.getElementById('box').className);
// "large active"

// toggleClass('#box', 'large');
// console.log(document.getElementById('box').className);
// "active" (large 제거됨)

// toggleClass('#box', 'large');
// console.log(document.getElementById('box').className);
// "active large" (large 추가됨)

// console.log(hasClass('#box', 'active')); // true
// console.log(hasClass('#box', 'hidden')); // false
