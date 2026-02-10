/**
 * 복습 문제: 이벤트 루프 실행 순서 예측
 * 난이도: ★★★
 */

// 문제 1: 출력 순서를 예측하세요
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");

// 정답:

// 문제 2: 출력 순서를 예측하세요
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => {
  console.log("C");
  setTimeout(() => console.log("D"), 0);
});
Promise.resolve().then(() => console.log("E"));
console.log("F");

// 정답:

// 문제 3: 출력 순서를 예측하세요
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");
setTimeout(() => console.log("setTimeout"), 0);
async1();
new Promise((resolve) => {
  console.log("promise1");
  resolve();
}).then(() => console.log("promise2"));
console.log("script end");

// 정답:
