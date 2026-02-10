/**
 * 미완성 문제: 깊은 복사 구현
 * 난이도: ★★★
 */

function deepCopy(obj) {
  // 구현하세요
  // 힌트:
  // 1. 원시값은 그대로 반환
  // 2. 배열은 map으로 재귀 복사
  // 3. 객체는 각 키에 대해 재귀 복사
  // 4. null 체크 주의 (typeof null === 'object')
}

// 테스트 1: 중첩 객체
const original = {
  a: 1,
  b: { c: 2, d: { e: 3 } },
  f: [1, 2, { g: 4 }],
};

const copied = deepCopy(original);
copied.b.c = 999;
copied.f[2].g = 888;

console.log(original.b.c); // 2 (원본 유지)
console.log(original.f[2].g); // 4 (원본 유지)

// 테스트 2: 배열
const arr = [1, [2, [3, [4]]]];
const copiedArr = deepCopy(arr);
copiedArr[1][1][0] = 999;
console.log(arr[1][1][0]); // 3 (원본 유지)

// 테스트 3: null과 undefined
console.log(deepCopy(null)); // null
console.log(deepCopy(undefined)); // undefined
console.log(deepCopy({ a: null, b: undefined })); // { a: null, b: undefined }

// 보너스: 순환 참조 처리 (WeakMap 사용)
function deepCopyWithCircular(obj, seen = new WeakMap()) {
  // 구현하세요
}
