/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  문제 3: 프론트엔드 유틸리티 구현                          ║
 * ║  난이도: ★★★  |  클로저 + 이벤트 + 설계  |  45분          ║
 * ╠══════════════════════════════════════════════════════════╣
 * ║                                                          ║
 * ║  React 훅의 원리를 이해하고 있는지 확인하는 문제입니다.       ║
 * ║  순수 JS로 debounce, 가상 스크롤 계산, 재연결 로직을        ║
 * ║  구현하세요. (React 없이 Node에서 테스트 가능)              ║
 * ║                                                          ║
 * ║  실행: node problem3.js                                   ║
 * ╚══════════════════════════════════════════════════════════╝
 */

const { printHeader, runStep, summary } = require("./runner");

// ─────────────────────────────────────────────────────────
// STEP 1: debounce 구현
// ─────────────────────────────────────────────────────────
//
// debounce(fn, delay) 함수를 구현하세요.
//
// - fn을 delay ms 이내에 다시 호출하면, 이전 호출은 취소됩니다.
// - delay가 지나면 마지막 호출만 실행됩니다.
// - 반환된 함수에 .cancel() 메서드가 있어야 합니다.
//
// 사용 예시:
//   const debouncedSearch = debounce(search, 300);
//   debouncedSearch("비빔"); // 취소됨
//   debouncedSearch("비빔밥"); // 300ms 후 실행
//   debouncedSearch.cancel(); // 대기중인 호출 취소
//
// 힌트: setTimeout + clearTimeout, 클로저로 timer 관리

function debounce(fn, delay) {
  // ✏️ 여기에 코드를 작성하세요

}

// ─────────────────────────────────────────────────────────
// STEP 2: 가상 스크롤 계산기
// ─────────────────────────────────────────────────────────
//
// 10,000개의 음식 데이터를 가상 스크롤로 렌더링할 때
// 현재 보여야 할 항목의 인덱스 범위를 계산하는 함수를 구현하세요.
//
// getVisibleRange({
//   totalItems: 10000,     // 전체 항목 수
//   itemHeight: 60,        // 각 항목 높이 (px)
//   containerHeight: 400,  // 컨테이너 높이 (px)
//   scrollTop: 1200,       // 현재 스크롤 위치
//   overscan: 3,           // 위아래 여유 렌더링 개수
// })
//
// 반환:
// {
//   startIndex: 17,        // 렌더링 시작 인덱스 (overscan 포함)
//   endIndex: 30,          // 렌더링 끝 인덱스 (overscan 포함)
//   visibleStart: 20,      // 실제 보이는 시작 인덱스
//   visibleEnd: 26,        // 실제 보이는 끝 인덱스
//   totalHeight: 600000,   // 전체 스크롤 높이
//   offsetY: 1020,         // startIndex의 Y 위치
// }
//
// 힌트: Math.floor(scrollTop / itemHeight)가 visibleStart입니다.
//       overscan만큼 앞뒤로 확장하되 범위를 벗어나지 않도록 clamp하세요.

function getVisibleRange({ totalItems, itemHeight, containerHeight, scrollTop, overscan = 3 }) {
  // ✏️ 여기에 코드를 작성하세요

}

// ─────────────────────────────────────────────────────────
// STEP 3: 재연결 로직 (지수 백오프)
// ─────────────────────────────────────────────────────────
//
// WebSocket 등의 연결이 끊겼을 때 자동 재연결하는 로직을 구현하세요.
//
// createReconnector(connectFn, options) 반환:
// {
//   start()    → 연결 시작
//   stop()     → 재연결 중지
//   getState() → { status, attempts, nextRetryIn }
// }
//
// connectFn()은 Promise를 반환합니다:
// - resolve → 연결 성공 (status: "connected", attempts 초기화)
// - reject  → 연결 실패 → 자동 재연결
//
// 재연결 규칙:
// - 지수 백오프: delay * 2^(attempt-1)  (예: 1초, 2초, 4초, 8초...)
// - maxDelay를 초과하지 않음
// - maxAttempts를 초과하면 status: "failed"
//
// options = { delay: 1000, maxDelay: 30000, maxAttempts: 5 }
//
// 힌트: 재귀적 setTimeout으로 구현하세요. stop()시 타이머를 정리합니다.

function createReconnector(connectFn, options = {}) {
  // ✏️ 여기에 코드를 작성하세요

}


// ═══════════════════════════════════════════════════════════
// 🧪 테스트 (수정하지 마세요)
// ═══════════════════════════════════════════════════════════

printHeader(3, "프론트엔드 유틸리티 구현", "★★★", "클로저 + 이벤트 + 설계", "45분");

// STEP 1 테스트 (비동기)
async function runDebounceTests() {
  console.log(`\x1b[33m━━━ STEP 1: debounce 구현 ${"━".repeat(38)}\x1b[0m\n`);
  let pass = 0, fail = 0;

  // TC1: 여러 번 호출 시 마지막만 실행
  try {
    let callCount = 0;
    const fn = debounce(() => { callCount++; }, 100);
    fn(); fn(); fn(); fn(); fn();
    await new Promise(r => setTimeout(r, 50));
    if (callCount !== 0) throw new Error(`50ms 시점에 ${callCount}번 호출됨 (기대: 0)`);
    await new Promise(r => setTimeout(r, 100));
    if (callCount === 1) {
      pass++;
      console.log("  \x1b[32m✅ TC1: 여러 번 호출 → 마지막 1회만 실행\x1b[0m");
    } else {
      fail++;
      console.log(`  \x1b[31m❌ TC1: ${callCount}번 호출됨 (기대: 1)\x1b[0m`);
    }
  } catch (e) {
    fail++;
    console.log(`  \x1b[31m💥 TC1: ${e.message}\x1b[0m`);
  }

  // TC2: 인자 전달 확인
  try {
    let received = null;
    const fn = debounce((a, b) => { received = [a, b]; }, 50);
    fn("비빔", 100);
    fn("비빔밥", 200);
    await new Promise(r => setTimeout(r, 100));
    if (received && received[0] === "비빔밥" && received[1] === 200) {
      pass++;
      console.log("  \x1b[32m✅ TC2: 마지막 인자 전달 확인\x1b[0m");
    } else {
      fail++;
      console.log(`  \x1b[31m❌ TC2: received = ${JSON.stringify(received)}\x1b[0m`);
    }
  } catch (e) {
    fail++;
    console.log(`  \x1b[31m💥 TC2: ${e.message}\x1b[0m`);
  }

  // TC3: cancel 동작 확인
  try {
    let called = false;
    const fn = debounce(() => { called = true; }, 50);
    fn();
    fn.cancel();
    await new Promise(r => setTimeout(r, 100));
    if (!called) {
      pass++;
      console.log("  \x1b[32m✅ TC3: cancel() 호출 후 실행 안 됨\x1b[0m");
    } else {
      fail++;
      console.log("  \x1b[31m❌ TC3: cancel() 했는데 실행됨\x1b[0m");
    }
  } catch (e) {
    fail++;
    console.log(`  \x1b[31m💥 TC3: ${e.message}\x1b[0m`);
  }

  // TC4: 딜레이 간격 사이 재호출
  try {
    let count = 0;
    const fn = debounce(() => { count++; }, 100);
    fn();
    await new Promise(r => setTimeout(r, 70));
    fn(); // 리셋
    await new Promise(r => setTimeout(r, 70));
    fn(); // 리셋
    await new Promise(r => setTimeout(r, 150));
    if (count === 1) {
      pass++;
      console.log("  \x1b[32m✅ TC4: 중간 재호출 시 타이머 리셋 확인\x1b[0m");
    } else {
      fail++;
      console.log(`  \x1b[31m❌ TC4: ${count}번 호출됨 (기대: 1)\x1b[0m`);
    }
  } catch (e) {
    fail++;
    console.log(`  \x1b[31m💥 TC4: ${e.message}\x1b[0m`);
  }

  console.log(`\n  \x1b[1m결과: \x1b[32m${pass} passed\x1b[0m / ${fail > 0 ? `\x1b[31m${fail} failed` : "\x1b[2m0 failed"}\x1b[0m\n`);
  return { pass, fail };
}

// STEP 2 테스트
const step2Result = runStep(2, "가상 스크롤 계산기", [
  {
    name: "기본 계산",
    input: [{ totalItems: 10000, itemHeight: 60, containerHeight: 400, scrollTop: 1200, overscan: 3 }],
    validate: (r) => {
      if (!r) return false;
      return r.visibleStart === 20
        && r.visibleEnd === 26
        && r.startIndex === 17
        && r.endIndex === 29
        && r.totalHeight === 600000
        && r.offsetY === 1020;
    },
  },
  {
    name: "스크롤 맨 위 (overscan이 음수가 되면 안 됨)",
    input: [{ totalItems: 100, itemHeight: 50, containerHeight: 300, scrollTop: 0, overscan: 5 }],
    validate: (r) => {
      if (!r) return false;
      return r.startIndex === 0
        && r.visibleStart === 0
        && r.offsetY === 0;
    },
  },
  {
    name: "스크롤 맨 아래",
    input: [{ totalItems: 100, itemHeight: 50, containerHeight: 300, scrollTop: 4700, overscan: 2 }],
    validate: (r) => {
      if (!r) return false;
      return r.endIndex === 99
        && r.visibleEnd >= 99
        && r.totalHeight === 5000;
    },
  },
  {
    name: "overscan 0",
    input: [{ totalItems: 50, itemHeight: 100, containerHeight: 500, scrollTop: 500, overscan: 0 }],
    validate: (r) => {
      if (!r) return false;
      return r.startIndex === 5
        && r.visibleStart === 5
        && r.startIndex === r.visibleStart;
    },
  },
], getVisibleRange);

// STEP 3 테스트 (비동기)
async function runReconnectorTests() {
  console.log(`\x1b[33m━━━ STEP 3: 재연결 로직 (지수 백오프) ${"━".repeat(26)}\x1b[0m\n`);
  let pass = 0, fail = 0;

  // TC1: 즉시 연결 성공
  try {
    const connector = createReconnector(() => Promise.resolve(), { delay: 100, maxAttempts: 3 });
    connector.start();
    await new Promise(r => setTimeout(r, 50));
    const state = connector.getState();
    if (state.status === "connected" && state.attempts === 0) {
      pass++;
      console.log("  \x1b[32m✅ TC1: 즉시 연결 성공\x1b[0m");
    } else {
      fail++;
      console.log(`  \x1b[31m❌ TC1: status=${state.status}, attempts=${state.attempts}\x1b[0m`);
    }
    connector.stop();
  } catch (e) {
    fail++;
    console.log(`  \x1b[31m💥 TC1: ${e.message}\x1b[0m`);
  }

  // TC2: 2번 실패 후 성공
  try {
    let attempt = 0;
    const connector = createReconnector(() => {
      attempt++;
      if (attempt <= 2) return Promise.reject(new Error("fail"));
      return Promise.resolve();
    }, { delay: 50, maxAttempts: 5, maxDelay: 5000 });
    connector.start();
    await new Promise(r => setTimeout(r, 500)); // 충분히 대기
    const state = connector.getState();
    if (state.status === "connected") {
      pass++;
      console.log("  \x1b[32m✅ TC2: 2번 실패 후 3번째 성공\x1b[0m");
    } else {
      fail++;
      console.log(`  \x1b[31m❌ TC2: status=${state.status}, attempts=${state.attempts}\x1b[0m`);
    }
    connector.stop();
  } catch (e) {
    fail++;
    console.log(`  \x1b[31m💥 TC2: ${e.message}\x1b[0m`);
  }

  // TC3: maxAttempts 초과 → failed
  try {
    const connector = createReconnector(
      () => Promise.reject(new Error("always fail")),
      { delay: 30, maxAttempts: 3, maxDelay: 1000 }
    );
    connector.start();
    await new Promise(r => setTimeout(r, 1000));
    const state = connector.getState();
    if (state.status === "failed" && state.attempts >= 3) {
      pass++;
      console.log("  \x1b[32m✅ TC3: maxAttempts 초과 → failed 상태\x1b[0m");
    } else {
      fail++;
      console.log(`  \x1b[31m❌ TC3: status=${state.status}, attempts=${state.attempts}\x1b[0m`);
    }
    connector.stop();
  } catch (e) {
    fail++;
    console.log(`  \x1b[31m💥 TC3: ${e.message}\x1b[0m`);
  }

  // TC4: stop()으로 재연결 중지
  try {
    let attempts = 0;
    const connector = createReconnector(() => {
      attempts++;
      return Promise.reject(new Error("fail"));
    }, { delay: 50, maxAttempts: 10, maxDelay: 5000 });
    connector.start();
    await new Promise(r => setTimeout(r, 120));
    connector.stop();
    const countAtStop = attempts;
    await new Promise(r => setTimeout(r, 300));
    if (attempts === countAtStop || attempts <= countAtStop + 1) {
      pass++;
      console.log("  \x1b[32m✅ TC4: stop() 후 재연결 중지\x1b[0m");
    } else {
      fail++;
      console.log(`  \x1b[31m❌ TC4: stop 후에도 ${attempts - countAtStop}번 추가 시도\x1b[0m`);
    }
  } catch (e) {
    fail++;
    console.log(`  \x1b[31m💥 TC4: ${e.message}\x1b[0m`);
  }

  console.log(`\n  \x1b[1m결과: \x1b[32m${pass} passed\x1b[0m / ${fail > 0 ? `\x1b[31m${fail} failed` : "\x1b[2m0 failed"}\x1b[0m\n`);
  return { pass, fail };
}

async function main() {
  const r1 = await runDebounceTests();
  const r2 = step2Result;
  const r3 = await runReconnectorTests();
  summary([r1, r2, r3]);
}

main();
