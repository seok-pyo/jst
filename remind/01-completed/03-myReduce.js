/**
 * 복습 문제: Array.prototype.reduce 구현
 * 난이도: ★★☆
 */

Array.prototype.myReduce = function (callback, initialValue) {
  // 구현하세요
  // 힌트: initialValue가 없을 때 첫 번째 요소를 초기값으로 사용
};

// 테스트
console.log([1, 2, 3, 4].myReduce((acc, cur) => acc + cur, 0)); // 10
console.log([1, 2, 3, 4].myReduce((acc, cur) => acc + cur)); // 10 (초기값 없음)
console.log([1, 2, 3].myReduce((acc, cur) => acc * cur, 1)); // 6
