/**
 * 문제: once 함수 구현하기
 *
 * 요구사항:
 * - 함수를 한 번만 실행되도록 래핑
 * - 두 번째 호출부터는 첫 번째 결과 반환
 * - this 컨텍스트와 인자 전달 지원
 */

function once(fn) {
  // 여기에 구현
  let flag = false;
  let result;

  return function () {
    if (!flag) {
      flag = true;
      result = fn();
      return result;
    }
    return result;
  };
}

// 테스트 1: 기본 사용
const init = once(() => {
  console.log("초기화!");
  return "완료";
});

console.log(init()); // "초기화!" 출력, "완료" 반환
console.log(init()); // 아무것도 출력 안됨, "완료" 반환
console.log(init()); // 아무것도 출력 안됨, "완료" 반환

// 테스트 2: 인자 사용
const addOnce = once((a, b) => {
  console.log("계산 중...");
  return a + b;
});

console.log(addOnce(1, 2)); // "계산 중...", 3
console.log(addOnce(10, 20)); // 3 (첫 번째 결과 유지)

// 테스트 3: API 호출 시뮬레이션
const fetchUser = once(async () => {
  console.log("API 호출...");
  return { id: 1, name: "철수" };
});

fetchUser().then(console.log); // "API 호출...", { id: 1, name: "철수" }
fetchUser().then(console.log); // { id: 1, name: "철수" } (캐시된 결과)
