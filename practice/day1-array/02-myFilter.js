/**
 * 문제: Array.prototype.filter 직접 구현하기
 *
 * 요구사항:
 * - callback이 true를 반환하는 요소만 모은 새 배열 반환
 * - callback은 (element, index, array) 3개 인자를 받음
 * - 원본 배열은 변경하지 않음
 */

Array.prototype.myFilter = function (callback) {
  // 여기에 구현
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

// 테스트
const arr = [1, 2, 3, 4, 5, 6];

console.log(arr.myFilter((x) => x % 2 === 0)); // [2, 4, 6]
console.log(arr.myFilter((x) => x > 3)); // [4, 5, 6]
console.log(arr.myFilter((x, i) => i < 3)); // [1, 2, 3]
console.log(arr); // [1, 2, 3, 4, 5, 6] - 원본 유지
