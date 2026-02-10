/**
 * 문제: Array.prototype.map 직접 구현하기
 *
 * 요구사항:
 * - 배열의 각 요소에 callback을 적용한 새 배열 반환
 * - callback은 (element, index, array) 3개 인자를 받음
 * - 원본 배열은 변경하지 않음
 */

Array.prototype.myMap = function (callback) {
  // 여기에 구현
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

// 테스트
const arr = [1, 2, 3, 4, 5];

console.log(arr.myMap((x) => x * 2)); // [2, 4, 6, 8, 10]
console.log(arr.myMap((x, i) => x + i)); // [1, 3, 5, 7, 9]
console.log(arr); // [1, 2, 3, 4, 5] - 원본 유지
