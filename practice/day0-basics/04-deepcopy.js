/**
 * 문제: deepCopy 함수 구현하기
 *
 * 요구사항:
 * - 중첩된 객체/배열을 완전히 복사
 * - 원본과 복사본이 서로 영향 X
 * - null, undefined 처리
 * - (보너스) 순환 참조 처리
 */

function deepCopy(obj) {
  // 여기에 구현
}

// 테스트 1: 기본 객체
const original = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4],
  },
};

const copy = deepCopy(original);
copy.b.c = 99;
copy.b.d[0] = 100;

console.log(original.b.c); // 2 (원본 유지)
console.log(original.b.d[0]); // 3 (원본 유지)
console.log(copy.b.c); // 99
console.log(copy.b.d[0]); // 100

// 테스트 2: 배열
const arr = [1, [2, [3, 4]], { x: 5 }];
const arrCopy = deepCopy(arr);

arrCopy[1][1][0] = 999;
arrCopy[2].x = 999;

console.log(arr[1][1][0]); // 3 (원본 유지)
console.log(arr[2].x); // 5 (원본 유지)

// 테스트 3: null/undefined
console.log(deepCopy(null)); // null
console.log(deepCopy(undefined)); // undefined
console.log(deepCopy({ a: null, b: undefined })); // { a: null, b: undefined }

// 테스트 4: 참조 비교
console.log(original === copy); // false
console.log(original.b === copy.b); // false
console.log(original.b.d === copy.b.d); // false

// 보너스: 순환 참조
// const circular = { a: 1 };
// circular.self = circular;
// const circularCopy = deepCopy(circular);
// console.log(circularCopy.self === circularCopy); // true
