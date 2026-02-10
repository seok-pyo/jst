/**
 * 복습 문제: throttle 함수 구현
 * 난이도: ★★☆
 */

function throttle(fn, delay) {
  // 구현하세요
  // 힌트: 마지막 실행 시간을 추적
}

// 테스트
let count = 0;
const throttled = throttle(() => {
  count++;
  console.log("실행:", count, new Date().toISOString());
}, 1000);

// 100ms 간격으로 10번 호출해도 1초에 1번만 실행
const interval = setInterval(throttled, 100);
setTimeout(() => clearInterval(interval), 3500);
// 약 3-4번만 실행됨

// 실제 사용 예시: 스크롤 이벤트
// window.addEventListener('scroll', throttle(() => {
//   console.log('스크롤 위치:', window.scrollY);
// }, 200));
