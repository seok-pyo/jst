/**
 * 복습 문제: retry 함수 구현
 * 난이도: ★★★
 */

async function retry(fn, maxRetries, delay = 0) {
  // 구현하세요
  // 힌트: try-catch + 재귀 또는 반복문
}

// 테스트 1: 3번째에 성공
let attempts = 0;
const unstable = async () => {
  attempts++;
  console.log(`시도 ${attempts}`);
  if (attempts < 3) throw new Error("fail");
  return "success";
};

retry(unstable, 5)
  .then(console.log) // 'success'
  .catch(console.error);

// 테스트 2: 최대 재시도 초과
let count = 0;
const alwaysFail = async () => {
  count++;
  throw new Error(`fail ${count}`);
};

retry(alwaysFail, 3)
  .then(console.log)
  .catch((e) => console.error("최종 실패:", e.message)); // 'fail 3'

// 테스트 3: 딜레이 있는 재시도
retry(
  async () => {
    console.log("시도:", new Date().toISOString());
    throw new Error("fail");
  },
  3,
  1000
).catch(() => console.log("완료"));
