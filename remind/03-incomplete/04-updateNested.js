/**
 * 미완성 문제: 중첩 객체 경로 수정 (불변성 유지)
 * 난이도: ★★★
 */

function updateNested(obj, path, value) {
  // 구현하세요
  // path: 'user.profile.name' 형태의 문자열
  // 힌트: path를 split하고 재귀적으로 복사하며 수정
}

// 테스트 1: 기본
const state = {
  user: {
    profile: {
      name: "철수",
      age: 25,
    },
    settings: {
      theme: "dark",
    },
  },
};

const newState = updateNested(state, "user.profile.name", "영희");

console.log(newState.user.profile.name); // '영희'
console.log(state.user.profile.name); // '철수' (원본 유지)

// 테스트 2: 참조 확인
console.log(state === newState); // false
console.log(state.user === newState.user); // false
console.log(state.user.profile === newState.user.profile); // false
console.log(state.user.settings === newState.user.settings); // true (변경 안됨)

// 테스트 3: 존재하지 않는 경로
const created = updateNested({}, "a.b.c", 123);
console.log(created); // { a: { b: { c: 123 } } }

// 보너스: 배열 인덱스도 지원
// updateNested(state, 'users.0.name', '민수')
