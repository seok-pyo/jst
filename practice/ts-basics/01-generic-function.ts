/**
 * 문제 1: 제네릭 함수 타입 작성하기
 *
 * 요구사항:
 * - 다양한 타입에서 동작하는 함수에 타입 지정
 * - 입력 타입과 출력 타입의 관계 정의
 */

// ========== 문제 1-1: identity 함수 ==========
// 입력받은 값을 그대로 반환하는 함수
function identity(arg) {
  return arg;
}

// 테스트 - 타입이 유지되어야 함
const num = identity(42); // number 타입이어야 함
const str = identity("hello"); // string 타입이어야 함

// ========== 문제 1-2: getFirst 함수 ==========
// 배열의 첫 번째 요소를 반환
function getFirst(arr) {
  return arr[0];
}

// 테스트
const firstNum = getFirst([1, 2, 3]); // number
const firstStr = getFirst(["a", "b"]); // string

// ========== 문제 1-3: merge 함수 ==========
// 두 객체를 합치는 함수
function merge(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

// 테스트
const merged = merge({ a: 1 }, { b: "hello" });
// merged의 타입: { a: number } & { b: string }

// ========== 문제 1-4: createPair 함수 ==========
// 두 값을 튜플로 묶는 함수
function createPair(first, second) {
  return [first, second];
}

// 테스트
const pair = createPair("id", 123);
// pair의 타입: [string, number]

// ========== 문제 1-5: debounce 함수 (before 폴더 참고) ==========
// 이미 구현한 debounce에 제네릭 타입 추가
function debounce(fn, delay) {
  let timer: ReturnType<typeof setTimeout>;

  return function (this: unknown, ...args: unknown[]) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// 테스트 - 원본 함수의 타입이 유지되어야 함
const log = (msg: string, count: number) => console.log(msg, count);
const debouncedLog = debounce(log, 300);
debouncedLog("hello", 5); // OK
// debouncedLog(123);     // 에러가 나야 함
