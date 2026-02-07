/**
 * 문제: Function.prototype.apply 직접 구현하기
 *
 * 요구사항:
 * - call과 동일하지만 인자를 배열로 받음
 * - 첫 번째 인자는 this로 바인딩할 객체
 * - 두 번째 인자는 함수에 전달할 인자들의 배열
 */

Function.prototype.myApply = function (context, args = []) {
  // 여기에 구현
  context = context ?? globalThis;
  const key = Symbol();
  context[key] = this;
  const result = context[key](...args);
  delete context[key];

  return result;
};

// 테스트
function sum(a, b, c) {
  return this.base + a + b + c;
}

const obj = { base: 10 };

console.log(sum.myApply(obj, [1, 2, 3])); // 16
console.log(Math.max.myApply(null, [1, 5, 3, 9, 2])); // 9

// 배열 합치기 응용
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
Array.prototype.push.myApply(arr1, arr2);
console.log(arr1); // [1, 2, 3, 4, 5, 6]
