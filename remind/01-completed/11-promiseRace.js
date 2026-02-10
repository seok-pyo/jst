/**
 * 복습 문제: Promise.race 구현
 * 난이도: ★★☆
 */

function promiseRace(promises) {
  // 구현하세요
  // 힌트: 가장 먼저 완료되는 Promise의 결과 반환
}

// 테스트 1: 빠른 것이 이김
promiseRace([
  new Promise((r) => setTimeout(() => r("slow"), 100)),
  new Promise((r) => setTimeout(() => r("fast"), 50)),
]).then(console.log); // 'fast'

// 테스트 2: reject가 먼저
promiseRace([
  new Promise((r) => setTimeout(() => r("slow"), 100)),
  new Promise((_, rej) => setTimeout(() => rej("error"), 50)),
])
  .then(console.log)
  .catch(console.error); // 'error'

// 테스트 3: 타임아웃 패턴
function withTimeout(promise, ms) {
  const timeout = new Promise((_, rej) =>
    setTimeout(() => rej("Timeout"), ms)
  );
  return promiseRace([promise, timeout]);
}

withTimeout(new Promise((r) => setTimeout(() => r("done"), 1000)), 500)
  .then(console.log)
  .catch(console.error); // 'Timeout'
