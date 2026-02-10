/**
 * 문제: 이벤트 루프 실행 순서 맞히기
 *
 * 각 코드의 출력 순서를 예측하세요.
 * 정답은 파일 맨 아래에 있습니다.
 */

// ========== Quiz 1: 기본 ==========
console.log("=== Quiz 1 ===");
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");

// 예상 출력 순서: 1 - 4 - 3 - 2

// ========== Quiz 2: 중첩 ==========
console.log("\n=== Quiz 2 ===");
console.log("A");

setTimeout(() => {
  console.log("B");
  Promise.resolve().then(() => {
    console.log("C");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("D");
  setTimeout(() => {
    console.log("E");
  }, 0);
});

console.log("F");

// 예상 출력 순서: A - F - D - E - B - C / A - F - D - B -

// ========== Quiz 3: async/await ==========
console.log("\n=== Quiz 3 ===");
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

async1();

new Promise((resolve) => {
  console.log("promise1");
  resolve();
}).then(() => {
  console.log("promise2");
});

console.log("script end");

// 예상 출력 순서: script start - async1 start - async2 - async1 end - promise1 - promise2 - setTimeout - script end

// ========== Quiz 4: Promise 체이닝 ==========
console.log("\n=== Quiz 4 ===");
Promise.resolve()
  .then(() => {
    console.log("then1");
    return Promise.resolve("then2");
  })
  .then((res) => {
    console.log(res);
  });

Promise.resolve()
  .then(() => {
    console.log("then3");
  })
  .then(() => {
    console.log("then4");
  });

// 예상 출력 순서: then1 - then2 - then3 - then 4

/*
 * =====================
 * 정답 (스크롤해서 확인)
 * =====================
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * Quiz 1: 1, 4, 3, 2
 * - 동기 코드 먼저 (1, 4)
 * - 마이크로태스크 (Promise.then → 3)
 * - 매크로태스크 (setTimeout → 2)
 *
 * Quiz 2: A, F, D, B, C, E
 * - 동기: A, F
 * - 마이크로태스크: D
 * - 매크로태스크: B
 * - B 실행 중 마이크로태스크 추가: C
 * - 다음 매크로태스크: E
 *
 * Quiz 3: script start, async1 start, async2, promise1, script end, async1 end, promise2, setTimeout
 * - 동기: script start, async1 start, async2, promise1, script end
 * - 마이크로태스크: async1 end, promise2 (await 이후는 then처럼 동작)
 * - 매크로태스크: setTimeout
 *
 * Quiz 4: then1, then3, then4, then2
 * - Promise.resolve() 반환 시 추가 마이크로태스크 발생
 * - then1 → then3 → then4 → then2
 * (주의: return Promise.resolve()는 2틱 지연)
 */
