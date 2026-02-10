/**
 * 복습 문제: Array.prototype.map 구현
 * 난이도: ★☆☆
 */

Array.prototype.myMap = function (callback) {
  // 구현하세요
};

// 테스트
console.log([1, 2, 3].myMap((x) => x * 2)); // [2, 4, 6]
console.log([1, 2, 3].myMap((x, i) => x + i)); // [1, 3, 5]
console.log(["a", "b"].myMap((x) => x.toUpperCase())); // ['A', 'B']
