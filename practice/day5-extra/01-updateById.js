/**
 * 문제: 배열에서 특정 id를 가진 객체의 값을 불변성을 지키며 수정하기
 *
 * 요구사항:
 * - 원본 배열 변경 X (새 배열 반환)
 * - 해당 id가 없으면 원본 그대로 반환
 * - 객체 내부도 새로운 참조로 생성
 */

function updateById(arr, id, updates) {
  // 여기에 구현
  return arr.map((item) => {
    if (item.id === id) {
      return { ...item, ...updates };
    }
    return item;
  });
}

// 테스트 1: 기본 사용
const users = [
  { id: 1, name: "철수", age: 20 },
  { id: 2, name: "영희", age: 25 },
  { id: 3, name: "민수", age: 30 },
];

const updated = updateById(users, 2, { age: 26 });
// [
//   { id: 1, name: "철수", age: 20 },
//   { id: 2, name: "영희", age: 26 },  <- age만 변경
//   { id: 3, name: "민수", age: 30 }
// ]

// 테스트 2: 불변성 확인
console.log(users === updated); // false (새 배열)

console.log(users[0] === updated[0]); // true (변경 안된 객체는 그대로)
console.log(users[1] === updated[1]); // false (변경된 객체는 새 참조)

// 테스트 3: 여러 필드 수정
const updated2 = updateById(users, 1, { name: "김철수", age: 21 });
console.log(updated2[0]); // { id: 1, name: "김철수", age: 21 }

// 테스트 4: 없는 id
const updated3 = updateById(users, 999, { name: "없음" });
console.log(updated3 === users); // true (변경 없으면 원본 반환도 OK)
