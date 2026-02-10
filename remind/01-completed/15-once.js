/**
 * 복습 문제: once 함수 구현
 * 난이도: ★☆☆
 */

function once(fn) {
  // 구현하세요
  // 힌트: 클로저로 호출 여부 추적
}

// 테스트
const initialize = once(() => {
  console.log("초기화됨!");
  return "initialized";
});

console.log(initialize()); // '초기화됨!' 출력, 'initialized' 반환
console.log(initialize()); // 아무것도 출력 안됨, undefined 반환
console.log(initialize()); // 아무것도 출력 안됨, undefined 반환

// 실제 사용 예시: 한 번만 실행해야 하는 설정
const setupEventListeners = once(() => {
  document.addEventListener("click", () => console.log("clicked"));
  console.log("이벤트 리스너 등록 완료");
});
