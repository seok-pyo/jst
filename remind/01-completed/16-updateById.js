/**
 * 복습 문제: 배열에서 id로 객체 수정 (불변성 유지)
 * 난이도: ★★☆
 */

function updateById(arr, id, updates) {
  // 구현하세요
  // 힌트: map 사용, 원본 배열 수정하지 않음
}

// 테스트
const users = [
  { id: 1, name: "철수", age: 20 },
  { id: 2, name: "영희", age: 25 },
  { id: 3, name: "민수", age: 30 },
];

const updated = updateById(users, 2, { age: 26, city: "서울" });

console.log(updated);
// [
//   { id: 1, name: '철수', age: 20 },
//   { id: 2, name: '영희', age: 26, city: '서울' },
//   { id: 3, name: '민수', age: 30 }
// ]

console.log(users[1].age); // 25 (원본 유지)
console.log(users === updated); // false
console.log(users[0] === updated[0]); // true (변경 안된 객체는 동일 참조)
