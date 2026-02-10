/**
 * 복습 문제: Function.prototype.call 구현
 * 난이도: ★★☆
 */

Function.prototype.myCall = function (context, ...args) {
  // 구현하세요
  // 힌트: context에 임시로 함수를 추가한 뒤 실행하고 삭제
};

// 테스트
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: "철수" };
greet.myCall(person, "안녕", "!"); // "안녕, 철수!"
greet.myCall({ name: "영희" }, "Hello", "~"); // "Hello, 영희~"
