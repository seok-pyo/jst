/**
 * 문제: retry 함수 구현하기
 *
 * 요구사항:
 * - 실패 시 지정된 횟수만큼 재시도
 * - 성공하면 즉시 결과 반환
 * - 모든 재시도 실패 시 마지막 에러 throw
 * - (보너스) 재시도 간 지연 시간 추가
 */

async function retry(fn, retries = 3) {
  // 여기에 구현
  for (let i = 0; i < retries; i++) {
    try {
      return await fn(); // fn은 호출해야 함.
    } catch (err) {
      if (i === retries - 1) throw new Error("모든 시도 실패");
    }
  }
}

// 보너스: 지연 시간 포함 버전
async function retryWithDelay(fn, retries = 3, delay = 1000) {
  // 여기에 구현
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === retries - 1) throw new Error("모든 시도 실패");
      await sleep(delay);
    }
  }
}

// 테스트 1: 기본 사용
let attempts = 0;
async function unreliableAPI() {
  attempts++;
  console.log(`시도 ${attempts}`);
  if (attempts < 3) {
    throw new Error("일시적 오류");
  }
  return "성공!";
}

retry(unreliableAPI, 5)
  .then(console.log) // 시도 1, 시도 2, 시도 3, "성공!"
  .catch(console.error);

// 테스트 2: 모든 재시도 실패
async function alwaysFails() {
  throw new Error("항상 실패");
}

retry(alwaysFails, 3)
  .then(console.log)
  .catch((err) => console.log("최종 실패:", err.message));
// 최종 실패: 항상 실패

// 테스트 3: 지연 시간 포함
retryWithDelay(unreliableAPI, 3, 1000); // - 1초 간격으로 재시도
