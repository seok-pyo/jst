/**
 * 문제: Function.prototype.bind 직접 구현하기
 *
 * 요구사항:
 * - this가 바인딩된 새로운 함수 반환 (즉시 실행 X)
 * - 부분 적용(Partial Application) 지원
 * - 반환된 함수에 추가 인자 전달 가능
 */

Function.prototype.myBind = function (context, ...boundArgs) {
  // 여기에 구현
  const fn = this;

  return function (...args) {
    context = context ?? globalThis;
    const key = Symbol();
    context[key] = fn;
    const result = context[key](...boundArgs, ...args);
    delete context[key];
    return result;
  };
};

// 테스트
function greet(greeting, name) {
  return `${greeting}, ${name}! I'm ${this.speaker}`;
}

const obj = { speaker: "철수" };

const boundGreet = greet.myBind(obj);
console.log(boundGreet("안녕", "영희")); // "안녕, 영희! I'm 철수"

// 부분 적용
const sayHello = greet.myBind(obj, "Hello");
console.log(sayHello("민수")); // "Hello, 민수! I'm 철수"

// 이벤트 핸들러 예시
const button = {
  name: "Submit",
  handleClick: function () {
    console.log(`${this.name} clicked`);
  },
};

const handler = button.handleClick.myBind(button);
handler(); // "Submit clicked"
