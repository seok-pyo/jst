/**
 * 복습 문제: memoize 함수 구현
 * 난이도: ★★☆
 */

function memoize(fn) {
  // 구현하세요
  // 힌트: 캐시 객체 사용, 인자를 키로 변환
}

// 테스트
let callCount = 0;
const expensive = (n) => {
  callCount++;
  return n * 2;
};

const memoized = memoize(expensive);

console.log(memoized(5)); // 10
console.log(memoized(5)); // 10 (캐시에서)
console.log(memoized(10)); // 20
console.log(memoized(5)); // 10 (캐시에서)
console.log("호출 횟수:", callCount); // 2 (5와 10 각각 1번씩)

// 피보나치 최적화
const fib = memoize((n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2)));
console.log(fib(40)); // 빠르게 계산됨
