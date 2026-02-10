/**
 * 문제: Promise.all 직접 구현하기
 *
 * 요구사항:
 * - 모든 Promise가 성공하면 결과 배열 반환
 * - 하나라도 실패하면 즉시 reject
 * - 결과 순서는 입력 순서와 동일 (완료 순서 X)
 * - 빈 배열 입력 시 빈 배열로 resolve
 * - Promise가 아닌 값도 처리 (Promise.resolve로 감싸기)
 */

function promiseAll(promises) {
  // 여기에 구현

  return new Promise((resolve, reject) => {
    if (promises.length === 0) return resolve([]);
    let count = 0;
    const results = [];
    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then((value) => {
          results[index] = value;
          count++;
          if (count === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}

// 테스트 1: 기본 사용
const p1 = Promise.resolve(1);
const p2 = new Promise((resolve) => setTimeout(() => resolve(2), 100));
const p3 = Promise.resolve(3);

promiseAll([p1, p2, p3]).then(console.log); // [1, 2, 3]

// 테스트 2: 순서 유지 확인
const slow = new Promise((resolve) => setTimeout(() => resolve("slow"), 200));
const fast = new Promise((resolve) => setTimeout(() => resolve("fast"), 50));

promiseAll([slow, fast]).then(console.log); // ["slow", "fast"] (입력 순서 유지)

// 테스트 3: 하나라도 실패
const success = Promise.resolve("ok");
const fail = Promise.reject("error!");

promiseAll([success, fail])
  .then(console.log)
  .catch((err) => console.log("caught:", err)); // caught: error!

// 테스트 4: 빈 배열
promiseAll([]).then(console.log); // []

// 테스트 5: Promise가 아닌 값
promiseAll([1, 2, Promise.resolve(3)]).then(console.log); // [1, 2, 3]
