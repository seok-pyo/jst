/**
 * 복습 문제: Array.prototype.forEach 구현
 * 난이도: ★☆☆
 */

Array.prototype.myForEach = function (callback) {
  // 구현하세요
};

// 테스트
const result = [];
[1, 2, 3].myForEach((x) => result.push(x * 2));
console.log(result); // [2, 4, 6]

[1, 2, 3].myForEach((x, i, arr) => console.log(x, i, arr));
// 1 0 [1, 2, 3]
// 2 1 [1, 2, 3]
// 3 2 [1, 2, 3]
