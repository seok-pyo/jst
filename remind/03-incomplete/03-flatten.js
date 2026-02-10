/**
 * 미완성 문제: 배열 평탄화
 * 난이도: ★★☆
 */

function flatten(arr, depth = 1) {
  // 구현하세요
  // 힌트: reduce + 재귀, 또는 반복문
}

// 테스트 1: 기본
console.log(flatten([1, [2, 3], 4])); // [1, 2, 3, 4]

// 테스트 2: 깊이 지정
console.log(flatten([1, [2, [3, [4]]]], 1)); // [1, 2, [3, [4]]]
console.log(flatten([1, [2, [3, [4]]]], 2)); // [1, 2, 3, [4]]
console.log(flatten([1, [2, [3, [4]]]], 3)); // [1, 2, 3, 4]

// 테스트 3: 무한 깊이
console.log(flatten([1, [2, [3, [4, [5]]]]], Infinity)); // [1, 2, 3, 4, 5]

// 테스트 4: 빈 배열과 혼합
console.log(flatten([1, [], [2, []], [[3]]])); // [1, 2, [3]]

// 보너스: reduce 한 줄로 구현
const flattenOneLiner = (arr, depth = 1) => {
  // 구현하세요
};
