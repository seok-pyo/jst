/**
 * 문제: throttle 함수 구현하기
 *
 * 요구사항:
 * - 일정 시간 간격으로만 함수 실행 허용
 * - 첫 호출은 즉시 실행
 * - delay 시간 내 추가 호출은 무시
 * - this 컨텍스트와 인자 전달 지원
 */

function throttle(fn, delay) {
  // 여기에 구현
  let current = 0;

  return function (...args) {
    if (new Date() - current < delay) {
      return;
    } else {
      fn.apply(this, args);
      current = new Date();
    }
  };
}

// 테스트 1: 기본 사용
let count = 0;
const increment = () => {
  count++;
  console.log(`count: ${count}`);
};

const throttledIncrement = throttle(increment, 1000);

// 빠르게 5번 호출해도 1초에 1번만 실행
throttledIncrement(); // count: 1 (즉시 실행)
throttledIncrement(); // 무시
throttledIncrement(); // 무시
setTimeout(() => throttledIncrement(), 1100); // count: 2 (1.1초 후)

// 테스트 2: 스크롤 이벤트 시뮬레이션
const handleScroll = (y) => console.log(`스크롤 위치: ${y}`);
const throttledScroll = throttle(handleScroll, 500);

// 100ms 간격으로 호출해도 500ms마다만 실행
for (let i = 0; i < 10; i++) {
  setTimeout(() => throttledScroll(i * 100), i * 100);
}
