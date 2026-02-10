/**
 * 복습 문제: Promise.all 구현
 * 난이도: ★★★
 */

function promiseAll(promises) {
  // 구현하세요
  // 힌트: 모든 Promise가 resolve되면 결과 배열 반환
  // 하나라도 reject되면 전체 reject
}

// 테스트 1: 모두 성공
promiseAll([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]).then(
  console.log
); // [1, 2, 3]

// 테스트 2: 순서 보장
promiseAll([
  new Promise((r) => setTimeout(() => r("slow"), 100)),
  Promise.resolve("fast"),
]).then(console.log); // ['slow', 'fast']

// 테스트 3: 실패 케이스
promiseAll([Promise.resolve(1), Promise.reject("error"), Promise.resolve(3)])
  .then(console.log)
  .catch(console.error); // 'error'

// 테스트 4: 빈 배열
promiseAll([]).then(console.log); // []
