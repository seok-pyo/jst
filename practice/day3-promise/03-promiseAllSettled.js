/**
 * 문제: Promise.allSettled 직접 구현하기
 *
 * 요구사항:
 * - 모든 Promise가 완료될 때까지 대기 (성공/실패 무관)
 * - 각 결과를 { status, value } 또는 { status, reason } 형태로 반환
 * - 성공: { status: "fulfilled", value: 결과값 }
 * - 실패: { status: "rejected", reason: 에러 }
 */

function promiseAllSettled(promises) {
  // 여기에 구현
  return new Promise((resolve, reject) => {
    if (promises.length === 0) return resolve([]);

    const result = [];
    let cnt = 0;

    promises.forEach((p, i) => {
      let item_result = {};
      Promise.resolve(p)
        .then((resolve) => {
          item_result.status = "fulfilled";
          item_result.value = resolve;
          result[i] = item_result;
        })
        .catch((reject) => {
          item_result.status = "rejected";
          item_result.reason = reject;
          result[i] = item_result;
        })
        .finally(() => {
          cnt++;

          if (cnt === promises.length) {
            return resolve(result);
          }
        });
    });
  });
}

// 테스트
const p1 = Promise.resolve(1);
const p2 = Promise.reject("error");
const p3 = new Promise((resolve) => setTimeout(() => resolve(3), 100));

promiseAllSettled([p1, p2, p3]).then(console.log);
// [
//   { status: "fulfilled", value: 1 },
//   { status: "rejected", reason: "error" },
//   { status: "fulfilled", value: 3 }
// ]

// 실용 예시: 여러 API 호출 후 성공/실패 분리
async function fetchMultiple(urls) {
  const results = await promiseAllSettled(urls.map((url) => fetch(url)));

  const succeeded = results.filter((r) => r.status === "fulfilled");
  const failed = results.filter((r) => r.status === "rejected");

  console.log(`성공: ${succeeded.length}, 실패: ${failed.length}`);
  return { succeeded, failed };
}
