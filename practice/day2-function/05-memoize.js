/**
 * 문제: memoize 함수 구현하기
 *
 * 요구사항:
 * - 함수의 결과를 캐싱하여 같은 인자로 호출 시 캐시된 값 반환
 * - 다양한 인자 타입 지원 (숫자, 문자열, 객체 등)
 * - 캐시 히트 시 원래 함수는 실행되지 않음
 */

function memoize(fn) {
  // 여기에 구현
}

// 테스트 1: 기본 사용
let callCount = 0;
function expensiveCalculation(n) {
  callCount++;
  console.log(`계산 중... (호출 횟수: ${callCount})`);
  return n * n;
}

const memoizedCalc = memoize(expensiveCalculation);

console.log(memoizedCalc(5)); // 계산 중... 25
console.log(memoizedCalc(5)); // 25 (캐시 히트, "계산 중..." 출력 안됨)
console.log(memoizedCalc(10)); // 계산 중... 100
console.log(memoizedCalc(5)); // 25 (캐시 히트)

// 테스트 2: 피보나치 (재귀 최적화)
function fibonacci(n) {
  if (n <= 1) return n;
  return memoizedFib(n - 1) + memoizedFib(n - 2);
}

const memoizedFib = memoize(fibonacci);
console.log(memoizedFib(40)); // 빠르게 계산됨

// 테스트 3: 여러 인자
function add(a, b) {
  console.log("add 호출");
  return a + b;
}

const memoizedAdd = memoize(add);
console.log(memoizedAdd(1, 2)); // add 호출, 3
console.log(memoizedAdd(1, 2)); // 3 (캐시)
console.log(memoizedAdd(2, 1)); // add 호출, 3 (다른 인자 순서)
