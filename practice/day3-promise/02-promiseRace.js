/**
 * 문제: Promise.race 직접 구현하기
 *
 * 요구사항:
 * - 가장 먼저 완료(성공/실패)되는 Promise의 결과 반환
 * - 첫 번째 결과가 성공이면 resolve, 실패면 reject
 * - 빈 배열은 영원히 pending (실제 Promise.race 동작)
 */

function promiseRace(promises) {
  // 여기에 구현

  return new Promise((resolve, reject) => {
    promises.forEach((item) => {
      Promise.resolve(item)
        .then((value) => {
          resolve(value);
        })
        .catch(reject);
    });
  });
}

// 테스트 1: 빠른 것이 이김
const slow = new Promise((resolve) => setTimeout(() => resolve("slow"), 200));
const fast = new Promise((resolve) => setTimeout(() => resolve("fast"), 50));

promiseRace([slow, fast]).then(console.log); // "fast"
// .then(console.log) ---> .then((value) => console.log(value))의 축약형

// 테스트 2: 실패가 먼저면 reject
const success = new Promise((resolve) => setTimeout(() => resolve("ok"), 100));
const fail = new Promise((_, reject) => setTimeout(() => reject("fail!"), 50));

promiseRace([success, fail])
  .then(console.log)
  .catch((err) => console.log("caught:", err)); // caught: fail!

// 테스트 3: 타임아웃 구현 예시
function fetchWithTimeout(url, timeout) {
  const fetchPromise = fetch(url).then((r) => r.json());
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Timeout!")), timeout)
  );

  return promiseRace([fetchPromise, timeoutPromise]);
}
