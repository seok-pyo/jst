/**
 * 문제: 중첩 객체에서 특정 경로의 값만 변경한 새 객체 반환하기
 *
 * 요구사항:
 * - 원본 객체 변경 X
 * - 경로는 문자열 배열로 제공 (예: ["user", "address", "city"])
 * - 경로에 해당하는 값만 새 참조로 생성
 * - 경로가 없으면 생성
 */

function setNestedValue(obj, path, value) {
  // 여기에 구현
  // 다시
}

// 테스트 1: 기본 사용
const state = {
  user: {
    name: "철수",
    address: {
      city: "서울",
      zip: "12345",
    },
  },
  settings: {
    theme: "dark",
  },
};

const newState = setNestedValue(state, ["user", "address", "city"], "부산");
console.log(newState.user.address.city); // "부산"
console.log(state.user.address.city); // "서울" (원본 유지)

// 테스트 2: 불변성 확인
console.log(state === newState); // false
console.log(state.user === newState.user); // false (경로상의 객체)
console.log(state.user.address === newState.user.address); // false
console.log(state.settings === newState.settings); // true (변경 안된 부분)

// 테스트 3: 1단계 변경
const newState2 = setNestedValue(state, ["settings", "theme"], "light");
console.log(newState2.settings.theme); // "light"
console.log(newState2.user === state.user); // true (변경 안된 부분)

// 테스트 4: 새 경로 생성
const newState3 = setNestedValue(state, ["user", "phone"], "010-1234-5678");
console.log(newState3.user.phone); // "010-1234-5678"

// 보너스: 점 표기법 지원
function setNestedValueDot(obj, pathString, value) {
  // "user.address.city" 형태 지원
}

// function setNestedValue(obj, path, value) {
//   // 여기에 구현

//   if (path.length === 0) return value;

//   const [first, ...rest] = path;
//   return {
//     ...obj,
//     [first]: setNestedValue(obj[first] || {}, rest, value),
//   };
// }
