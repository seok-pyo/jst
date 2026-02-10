/**
 * 복습 문제: Array.prototype.filter 구현
 * 난이도: ★☆☆
 */

Array.prototype.myFilter = function (callback) {
  // 구현하세요
};

// 테스트
console.log([1, 2, 3, 4, 5].myFilter((x) => x > 2)); // [3, 4, 5]
console.log([1, 2, 3, 4].myFilter((x) => x % 2 === 0)); // [2, 4]
console.log(["a", "bb", "ccc"].myFilter((x) => x.length > 1)); // ['bb', 'ccc']
