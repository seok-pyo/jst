/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  문제 2: 급식 잔반 데이터 집계                             ║
 * ║  난이도: ★★☆  |  배열/객체 + 비동기  |  35분              ║
 * ╠══════════════════════════════════════════════════════════╣
 * ║                                                          ║
 * ║  급식소에서 수집된 잔반 데이터를 집계, 비동기 수집,          ║
 * ║  변화 감지(diff)하는 함수를 구현하세요.                     ║
 * ║                                                          ║
 * ║  실행: node problem2.js                                   ║
 * ╚══════════════════════════════════════════════════════════╝
 */

const { printHeader, runStep, summary } = require("./runner");

// ─────────────────────────────────────────────────────────
// STEP 1: 기본 집계
// ─────────────────────────────────────────────────────────
//
// 급식소에서 수집된 잔반 데이터가 배열로 주어집니다.
// 각 급식소(cafeteria)별로 총 잔반량(total), 평균(avg), 건수(count)를 구하세요.
//
// 입력:
// [
//   { cafeteria: "A초등학교", date: "2024-03-01", menu: "비빔밥", waste: 12.5 },
//   { cafeteria: "A초등학교", date: "2024-03-02", menu: "카레",   waste: 8.3  },
//   { cafeteria: "B중학교",   date: "2024-03-01", menu: "돈까스", waste: 15.2 },
// ]
//
// 출력:
// {
//   "A초등학교": { total: 20.8, avg: 10.4, count: 2 },
//   "B중학교":   { total: 15.2, avg: 15.2, count: 1 }
// }
//
// ⚠️ 소수점은 둘째 자리까지 반올림하세요.
//
// 힌트: reduce로 cafeteria를 키로 그룹핑하세요.

function aggregateWaste(data) {
  // ✏️ 여기에 코드를 작성하세요

}

// ─────────────────────────────────────────────────────────
// STEP 2: 비동기 데이터 수집
// ─────────────────────────────────────────────────────────
//
// 여러 급식소 API에서 데이터를 병렬로 가져와야 합니다.
// - 일부 API는 실패할 수 있습니다.
// - 실패한 요청은 건너뛰고, 성공한 데이터만 모으세요.
// - 각 API 호출에 타임아웃(ms)을 적용하세요.
//
// fetchFn(url) → Promise<Array> 형태의 fetch 함수가 주어집니다.
//
// 힌트: Promise.allSettled + 타임아웃 래퍼를 조합하세요.

function withTimeout(promise, ms) {
  // ✏️ 여기에 코드를 작성하세요
  // promise가 ms 안에 완료되지 않으면 reject하세요.

}

async function collectData(urls, fetchFn, timeoutMs = 3000) {
  // ✏️ 여기에 코드를 작성하세요
  // 1. 각 url에 대해 fetchFn(url)을 호출하되 타임아웃 적용
  // 2. Promise.allSettled로 병렬 실행
  // 3. 성공한 결과만 flatMap으로 합치기
  // 4. aggregateWaste()로 집계해서 반환

}

// ─────────────────────────────────────────────────────────
// STEP 3: 변화 감지 (diff)
// ─────────────────────────────────────────────────────────
//
// 어제와 오늘의 집계 결과를 비교하여 분류하세요.
//
// - improved:  잔반 평균(avg)이 감소한 급식소
// - worsened:  잔반 평균(avg)이 증가한 급식소
// - unchanged: 잔반 평균(avg)이 동일한 급식소
// - added:     오늘 새로 추가된 급식소
// - removed:   오늘 사라진 급식소
//
// 힌트: Set을 사용해서 키 차집합을 구하면 added/removed를 쉽게 찾을 수 있습니다.

function diffWaste(yesterday, today) {
  // ✏️ 여기에 코드를 작성하세요

}


// ═══════════════════════════════════════════════════════════
// 🧪 테스트 (수정하지 마세요)
// ═══════════════════════════════════════════════════════════

const mockFetch = (responses) => (url) => {
  const resp = responses[url];
  if (!resp) return Promise.reject(new Error("Not found"));
  if (resp.delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (resp.error) reject(new Error(resp.error));
        else resolve(resp.data);
      }, resp.delay);
    });
  }
  if (resp.error) return Promise.reject(new Error(resp.error));
  return Promise.resolve(resp.data);
};

async function main() {
  printHeader(2, "급식 잔반 데이터 집계", "★★☆", "배열/객체 + 비동기", "35분");
  const results = [];

  // ── STEP 1 ──
  results.push(runStep(1, "기본 집계", [
    {
      name: "두 급식소 집계",
      input: [[
        { cafeteria: "A초등학교", date: "2024-03-01", menu: "비빔밥", waste: 12.5 },
        { cafeteria: "A초등학교", date: "2024-03-02", menu: "카레", waste: 8.3 },
        { cafeteria: "B중학교", date: "2024-03-01", menu: "돈까스", waste: 15.2 },
        { cafeteria: "A초등학교", date: "2024-03-03", menu: "국수", waste: 6.1 },
        { cafeteria: "B중학교", date: "2024-03-02", menu: "김치찌개", waste: 9.7 },
      ]],
      validate: (r) => {
        if (!r) return false;
        return r["A초등학교"].count === 3
          && Math.abs(r["A초등학교"].total - 26.9) < 0.01
          && Math.abs(r["A초등학교"].avg - 8.97) < 0.01
          && r["B중학교"].count === 2
          && Math.abs(r["B중학교"].total - 24.9) < 0.01;
      },
    },
    {
      name: "빈 배열",
      input: [[]],
      expected: {},
    },
    {
      name: "단일 항목",
      input: [[{ cafeteria: "X", date: "2024-01-01", menu: "밥", waste: 5.0 }]],
      validate: (r) => r && r["X"].total === 5.0 && r["X"].avg === 5.0 && r["X"].count === 1,
    },
    {
      name: "소수점 정확도",
      input: [[
        { cafeteria: "테스트", date: "2024-01-01", menu: "A", waste: 1.1 },
        { cafeteria: "테스트", date: "2024-01-02", menu: "B", waste: 2.2 },
        { cafeteria: "테스트", date: "2024-01-03", menu: "C", waste: 3.3 },
      ]],
      validate: (r) => {
        if (!r || !r["테스트"]) return false;
        return Math.abs(r["테스트"].total - 6.6) < 0.01
          && Math.abs(r["테스트"].avg - 2.2) < 0.01;
      },
    },
  ], aggregateWaste));

  // ── STEP 2 (비동기) ──
  console.log(`\x1b[33m━━━ STEP 2: 비동기 데이터 수집 ${"━".repeat(33)}\x1b[0m\n`);
  let s2pass = 0, s2fail = 0;
  const s2tests = [
    {
      name: "성공 + 실패 혼합",
      args: [
        ["/api/a", "/api/b", "/api/c"],
        mockFetch({
          "/api/a": { data: [{ cafeteria: "A", date: "2024-01-01", menu: "밥", waste: 10 }] },
          "/api/b": { error: "500 error" },
          "/api/c": { data: [{ cafeteria: "C", date: "2024-01-01", menu: "국", waste: 5 }] },
        }),
        3000,
      ],
      validate: (r) => r && r["A"] && r["C"] && !r["B"],
    },
    {
      name: "타임아웃 처리",
      args: [
        ["/api/fast", "/api/slow"],
        mockFetch({
          "/api/fast": { data: [{ cafeteria: "빠른곳", date: "2024-01-01", menu: "밥", waste: 3 }], delay: 10 },
          "/api/slow": { data: [{ cafeteria: "느린곳", date: "2024-01-01", menu: "밥", waste: 99 }], delay: 5000 },
        }),
        500,
      ],
      validate: (r) => r && r["빠른곳"] && !r["느린곳"],
    },
    {
      name: "전부 실패",
      args: [
        ["/api/x", "/api/y"],
        mockFetch({ "/api/x": { error: "fail" }, "/api/y": { error: "fail" } }),
        3000,
      ],
      validate: (r) => r && Object.keys(r).length === 0,
    },
  ];
  for (let i = 0; i < s2tests.length; i++) {
    const t = s2tests[i];
    try {
      const result = await collectData(...t.args);
      if (t.validate(result)) {
        s2pass++;
        console.log(`  \x1b[32m✅ TC${i + 1}: ${t.name}\x1b[0m`);
      } else {
        s2fail++;
        console.log(`  \x1b[31m❌ TC${i + 1}: ${t.name}\x1b[0m`);
        console.log(`  \x1b[2m   결과: ${JSON.stringify(result)}\x1b[0m`);
      }
    } catch (e) {
      s2fail++;
      console.log(`  \x1b[31m💥 TC${i + 1}: ${t.name} — ${e.message}\x1b[0m`);
    }
  }
  console.log(`\n  \x1b[1m결과: \x1b[32m${s2pass} passed\x1b[0m / ${s2fail > 0 ? `\x1b[31m${s2fail} failed` : "\x1b[2m0 failed"}\x1b[0m\n`);
  results.push({ pass: s2pass, fail: s2fail });

  // ── STEP 3 ──
  results.push(runStep(3, "변화 감지 (diff)", [
    {
      name: "모든 분류 확인",
      input: [
        {
          "A초등학교": { total: 30, avg: 10, count: 3 },
          "B중학교":   { total: 25, avg: 12.5, count: 2 },
          "C고등학교": { total: 30, avg: 10, count: 3 },
        },
        {
          "A초등학교": { total: 21, avg: 7, count: 3 },
          "B중학교":   { total: 30, avg: 15, count: 2 },
          "D대학교":   { total: 18, avg: 9, count: 2 },
        },
      ],
      validate: (r) => {
        if (!r) return false;
        return r.improved.includes("A초등학교")
          && r.worsened.includes("B중학교")
          && r.added.includes("D대학교")
          && r.removed.includes("C고등학교");
      },
    },
    {
      name: "변화 없음",
      input: [
        { "A": { total: 10, avg: 5, count: 2 } },
        { "A": { total: 10, avg: 5, count: 2 } },
      ],
      validate: (r) => r && r.improved.length === 0 && r.worsened.length === 0
        && r.unchanged.includes("A") && r.added.length === 0 && r.removed.length === 0,
    },
    {
      name: "전부 새로 추가",
      input: [
        {},
        { "A": { total: 10, avg: 5, count: 2 }, "B": { total: 20, avg: 10, count: 2 } },
      ],
      validate: (r) => r && r.added.length === 2 && r.removed.length === 0,
    },
    {
      name: "전부 제거",
      input: [
        { "A": { total: 10, avg: 5, count: 2 }, "B": { total: 20, avg: 10, count: 2 } },
        {},
      ],
      validate: (r) => r && r.removed.length === 2 && r.added.length === 0,
    },
  ], diffWaste));

  summary(results);
}

main();
