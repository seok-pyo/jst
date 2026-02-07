/**
 * 문제: flatten 함수 구현하기
 *
 * 요구사항:
 * - 다차원 배열을 1차원으로 평탄화
 * - 재귀 사용
 * - (보너스) depth 옵션 지원
 */

function flatten(arr) {
  // 여기에 구현
}

// 테스트 1: 기본 사용
console.log(flatten([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]
console.log(flatten([[1, 2], [3, 4], [5, 6]])); // [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, 3])); // [1, 2, 3]

// 테스트 2: 깊은 중첩
console.log(flatten([1, [2, [3, [4, [5]]]]])); // [1, 2, 3, 4, 5]

// 테스트 3: 빈 배열
console.log(flatten([])); // []
console.log(flatten([[], [[]], [[[]]]])); // []

// 테스트 4: 다양한 타입
console.log(flatten([1, "a", [2, "b", [3, "c"]]])); // [1, "a", 2, "b", 3, "c"]

// 보너스: depth 옵션
function flattenWithDepth(arr, depth = Infinity) {
  // 여기에 구현
}

console.log(flattenWithDepth([1, [2, [3, [4]]]], 1)); // [1, 2, [3, [4]]]
console.log(flattenWithDepth([1, [2, [3, [4]]]], 2)); // [1, 2, 3, [4]]
console.log(flattenWithDepth([1, [2, [3, [4]]]], 3)); // [1, 2, 3, 4]
