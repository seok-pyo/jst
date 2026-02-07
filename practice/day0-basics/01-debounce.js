/**
 * 문제: debounce 함수 구현하기
 *
 * 요구사항:
 * - 연속 호출 시 마지막 호출만 실행
 * - delay ms 동안 호출이 없으면 실행
 * - this 컨텍스트 유지
 * - 인자 전달 지원
 */

function debounce(fn, delay) {
  // 여기에 구현
}

// 테스트 1: 기본 사용
const print = () => console.log("실행!");
const debouncedPrint = debounce(print, 500);

debouncedPrint(); // 취소됨
debouncedPrint(); // 취소됨
debouncedPrint(); // 500ms 후 "실행!" 출력

// 테스트 2: 인자 전달
const log = (msg) => console.log(msg);
const debouncedLog = debounce(log, 300);

debouncedLog("A"); // 취소됨
debouncedLog("B"); // 취소됨
debouncedLog("C"); // 300ms 후 "C" 출력

// 테스트 3: this 바인딩
const obj = {
  name: "철수",
  greet: debounce(function () {
    console.log(`안녕, ${this.name}`);
  }, 200),
};

obj.greet(); // 200ms 후 "안녕, 철수" 출력
