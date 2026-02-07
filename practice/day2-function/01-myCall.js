/**
 * 문제: Function.prototype.call 직접 구현하기
 *
 * 요구사항:
 * - 함수를 특정 this 컨텍스트로 즉시 실행
 * - 첫 번째 인자는 this로 바인딩할 객체
 * - 나머지 인자들은 함수에 전달
 */

Function.prototype.myCall = function (context, ...args) {
  // 여기에 구현
  // 힌트: context에 임시로 this(함수)를 할당하고 실행 후 삭제

  // context.this(...args); XXX

  // context.temp = this;
  // const result = context.temp(...args);
  // delete context.temp;

  context = context ?? globalThis;
  const key = Symbol();
  context[key] = this;
  const result = context[key](...args);
  delete context[key];

  return result;
};

// 테스트
function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const person = { name: "철수" };

console.log(greet.myCall(person, "안녕", "!")); // "안녕, 철수!"
console.log(greet.myCall({ name: "영희" }, "Hello", "?")); // "Hello, 영희?"

// this가 null/undefined인 경우 globalThis 사용
function getName() {
  return this?.name || "global";
}
console.log(getName.myCall(null)); // "global" 또는 globalThis.name
