/**
 * 복습 문제: Promise.allSettled 구현
 * 난이도: ★★★
 */

function promiseAllSettled(promises) {
  // 구현하세요
  // 힌트: 성공/실패 상관없이 모두 완료될 때까지 기다림
  // 반환 형식: { status: 'fulfilled', value } 또는 { status: 'rejected', reason }
}

// 테스트
promiseAllSettled([
  Promise.resolve(1),
  Promise.reject("error"),
  Promise.resolve(3),
]).then(console.log);
// [
//   { status: 'fulfilled', value: 1 },
//   { status: 'rejected', reason: 'error' },
//   { status: 'fulfilled', value: 3 }
// ]

// 실제 활용: 여러 API 호출 후 성공한 것만 처리
promiseAllSettled([
  fetch("/api/user").catch(() => Promise.reject("user failed")),
  fetch("/api/posts").catch(() => Promise.reject("posts failed")),
]).then((results) => {
  const successful = results.filter((r) => r.status === "fulfilled");
  console.log("성공한 요청:", successful.length);
});
