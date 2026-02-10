/**
 * 문제: Array.prototype.forEach 직접 구현하기
 *
 * 요구사항:
 * - 배열의 각 요소에 callback 실행
 * - callback은 (element, index, array) 3개 인자를 받음
 * - 반환값 없음 (undefined)
 */

Array.prototype.myForEach = function (callback) {
  // 여기에 구현
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// 테스트
const arr = [1, 2, 3];
const results = [];

arr.myForEach((x) => results.push(x * 2));
console.log(results); // [2, 4, 6]

arr.myForEach((x, i) => console.log(`index ${i}: ${x}`));
// index 0: 1
// index 1: 2
// index 2: 3
