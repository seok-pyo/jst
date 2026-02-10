/**
 * 복습 문제: curry 함수 구현
 * 난이도: ★★★
 */

// 버전 1: sum(1)(2)(3)() 형태 (빈 호출로 종료)
function sum(n) {
  // 구현하세요
}

console.log(sum(1)(2)(3)()); // 6
console.log(sum(5)(10)()); // 15
console.log(sum(1)(2)(3)(4)(5)()); // 15

// 버전 2: 인자 개수 기반 curry
function curry(fn) {
  // 구현하세요
  // 힌트: fn.length로 필요한 인자 개수 확인
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6
