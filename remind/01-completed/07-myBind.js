/**
 * 복습 문제: Function.prototype.bind 구현
 * 난이도: ★★★
 */

Function.prototype.myBind = function (context, ...args) {
  // 구현하세요
  // 힌트: 새로운 함수를 반환, 부분 적용 지원
};

// 테스트
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: "철수" };

// 기본 바인딩
const boundGreet = greet.myBind(person);
boundGreet("안녕", "!"); // "안녕, 철수!"

// 부분 적용
const sayHello = greet.myBind(person, "Hello");
sayHello("~"); // "Hello, 철수~"

// 모든 인자 바인딩
const fixed = greet.myBind(person, "Hi", "!");
fixed(); // "Hi, 철수!"
