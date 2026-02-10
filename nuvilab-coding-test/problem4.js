/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  문제 4: 식단 최적화 알고리즘                              ║
 * ║  난이도: ★★★  |  알고리즘 + 최적화  |  35분               ║
 * ╠══════════════════════════════════════════════════════════╣
 * ║                                                          ║
 * ║  음식 목록에서 목표에 맞는 최적 조합을 찾는 알고리즘을       ║
 * ║  구현하세요. 단계별로 제약이 추가됩니다.                    ║
 * ║                                                          ║
 * ║  실행: node problem4.js                                   ║
 * ╚══════════════════════════════════════════════════════════╝
 */

const { printHeader, runStep, summary } = require("./runner");

// ─────────────────────────────────────────────────────────
// STEP 1: 칼로리 조합 (Two Sum 확장)
// ─────────────────────────────────────────────────────────
//
// 음식 목록과 목표 칼로리가 주어질 때,
// 목표 칼로리에 가장 가까운 음식 조합을 찾으세요.
//
// 규칙:
// - 각 음식은 한 번만 선택 가능
// - 목표를 초과해도 됨 (가장 가까운 것)
// - 같은 차이면 칼로리가 낮은 조합 우선
// - 반환: 선택된 음식 이름 배열 (순서 무관)
//
// 입력:
//   foods = [
//     { name: "밥", cal: 300 },
//     { name: "김치", cal: 30 },
//     { name: "불고기", cal: 250 },
//     { name: "된장국", cal: 80 },
//     { name: "샐러드", cal: 50 },
//   ]
//   target = 400
//
// 출력: ["밥", "된장국"]  (합: 380, 차이: 20)
//   또는 ["밥", "김치", "샐러드"] (합: 380, 차이: 20) — 둘 다 정답
//
// 힌트: 백트래킹으로 모든 부분집합을 탐색하되,
//       현재 최적해와의 차이를 비교하면서 가지치기하세요.

function findClosestCombo(foods, target) {
  // ✏️ 여기에 코드를 작성하세요

}

// ─────────────────────────────────────────────────────────
// STEP 2: 영양소 균형 점수
// ─────────────────────────────────────────────────────────
//
// 각 음식에 영양소(carb, protein, fat) 정보가 추가됩니다.
// 목표 영양소 비율과의 차이를 점수화하세요.
//
// 점수 계산법:
//   1. 선택된 음식들의 carb, protein, fat 합계를 구함
//   2. 각각의 비율을 계산 (각 영양소 / 전체 합 * 100)
//   3. 점수 = 100 - (|목표carb비율 - 실제carb비율| + |목표protein - 실제protein| + |목표fat - 실제fat|)
//   4. 점수는 최소 0
//
// 입력:
//   foods = [
//     { name: "밥",     carb: 65, protein: 6,  fat: 1 },
//     { name: "불고기", carb: 5,  protein: 25, fat: 15 },
//     { name: "샐러드", carb: 8,  protein: 2,  fat: 1 },
//   ]
//   selectedNames = ["밥", "불고기"]
//   targetRatio = { carb: 50, protein: 30, fat: 20 }
//
// 출력: 점수 (숫자)

function calcNutritionScore(foods, selectedNames, targetRatio) {
  // ✏️ 여기에 코드를 작성하세요

}

// ─────────────────────────────────────────────────────────
// STEP 3: 그리디 최적화
// ─────────────────────────────────────────────────────────
//
// 음식이 수백 개일 수 있으므로, 모든 부분집합 탐색은 불가능합니다.
// 그리디 알고리즘으로 근사 최적해를 구하세요.
//
// 알고리즘:
// 1. 각 음식의 "효율" = calcNutritionScore([그 음식만], targetRatio) / cal
//    (단, cal이 0이면 효율 = 0)
// 2. 효율 내림차순으로 정렬
// 3. 목표 칼로리를 초과하지 않는 범위에서 하나씩 선택
// 4. 선택된 음식 이름 배열 반환
//
// 입력:
//   foods: Array<{ name, cal, carb, protein, fat }>
//   target: 목표 칼로리
//   targetRatio: { carb, protein, fat }
//
// 출력: 선택된 음식 이름 배열
//
// 힌트: sort → 순회하며 선택. 시간복잡도 O(n log n)

function greedyOptimal(foods, target, targetRatio) {
  // ✏️ 여기에 코드를 작성하세요

}


// ═══════════════════════════════════════════════════════════
// 🧪 테스트 (수정하지 마세요)
// ═══════════════════════════════════════════════════════════

printHeader(4, "식단 최적화 알고리즘", "★★★", "알고리즘 + 최적화", "35분");

const results = [];

// STEP 1 테스트
const foods1 = [
  { name: "밥", cal: 300 },
  { name: "김치", cal: 30 },
  { name: "불고기", cal: 250 },
  { name: "된장국", cal: 80 },
  { name: "샐러드", cal: 50 },
];

results.push(runStep(1, "칼로리 조합", [
  {
    name: "목표 400에 가장 가까운 조합",
    input: [foods1, 400],
    validate: (r) => {
      if (!r || !Array.isArray(r) || r.length === 0) return false;
      const total = r.reduce((s, name) => {
        const f = foods1.find(f => f.name === name);
        return s + (f ? f.cal : 0);
      }, 0);
      return Math.abs(total - 400) <= 20; // 380 or 400 or 410 etc
    },
  },
  {
    name: "정확히 맞는 경우",
    input: [[{ name: "A", cal: 200 }, { name: "B", cal: 300 }], 500],
    validate: (r) => {
      if (!r) return false;
      const total = r.includes("A") && r.includes("B") ? 500 : -1;
      return total === 500;
    },
  },
  {
    name: "모두 선택해도 부족한 경우",
    input: [[{ name: "A", cal: 10 }, { name: "B", cal: 20 }], 1000],
    validate: (r) => {
      if (!r) return false;
      // 모두 선택하는 게 가장 가까움
      return r.length === 2;
    },
  },
  {
    name: "빈 배열",
    input: [[], 100],
    validate: (r) => Array.isArray(r) && r.length === 0,
  },
  {
    name: "단일 음식",
    input: [[{ name: "X", cal: 500 }], 500],
    validate: (r) => r && r.length === 1 && r[0] === "X",
  },
], findClosestCombo));

// STEP 2 테스트
const foods2 = [
  { name: "밥", carb: 65, protein: 6, fat: 1 },
  { name: "불고기", carb: 5, protein: 25, fat: 15 },
  { name: "샐러드", carb: 8, protein: 2, fat: 1 },
  { name: "계란", carb: 1, protein: 12, fat: 10 },
];
const targetRatio = { carb: 50, protein: 30, fat: 20 };

results.push(runStep(2, "영양소 균형 점수", [
  {
    name: "밥 + 불고기 점수",
    input: [foods2, ["밥", "불고기"], targetRatio],
    validate: (r) => {
      // carb: 70, protein: 31, fat: 16 → 합 117
      // 비율: 59.8, 26.5, 13.7
      // 차이: |50-59.8| + |30-26.5| + |20-13.7| = 9.8+3.5+6.3 = 19.6
      // 점수: 100 - 19.6 = 80.4
      return typeof r === "number" && Math.abs(r - 80.4) < 1;
    },
  },
  {
    name: "완벽한 비율이면 100점",
    input: [
      [{ name: "완벽식", carb: 50, protein: 30, fat: 20 }],
      ["완벽식"],
      { carb: 50, protein: 30, fat: 20 },
    ],
    validate: (r) => typeof r === "number" && Math.abs(r - 100) < 0.1,
  },
  {
    name: "빈 선택 → 0점",
    input: [foods2, [], targetRatio],
    validate: (r) => r === 0,
  },
  {
    name: "탄수화물만 있는 식단",
    input: [
      [{ name: "설탕", carb: 100, protein: 0, fat: 0 }],
      ["설탕"],
      { carb: 50, protein: 30, fat: 20 },
    ],
    validate: (r) => {
      // 비율 100, 0, 0 → 차이 50+30+20=100 → 점수 0
      return typeof r === "number" && r === 0;
    },
  },
], calcNutritionScore));

// STEP 3 테스트
const foods3 = [
  { name: "밥", cal: 300, carb: 65, protein: 6, fat: 1 },
  { name: "불고기", cal: 250, carb: 5, protein: 25, fat: 15 },
  { name: "샐러드", cal: 50, carb: 8, protein: 2, fat: 1 },
  { name: "계란", cal: 80, carb: 1, protein: 12, fat: 10 },
  { name: "김치", cal: 30, carb: 6, protein: 2, fat: 0 },
  { name: "두부", cal: 90, carb: 3, protein: 9, fat: 5 },
  { name: "고구마", cal: 120, carb: 28, protein: 2, fat: 0 },
  { name: "닭가슴살", cal: 150, carb: 0, protein: 32, fat: 3 },
  { name: "아보카도", cal: 160, carb: 8, protein: 2, fat: 15 },
  { name: "바나나", cal: 90, carb: 23, protein: 1, fat: 0 },
];

results.push(runStep(3, "그리디 최적화", [
  {
    name: "목표 500kcal — 칼로리 초과 안 함",
    input: [foods3, 500, targetRatio],
    validate: (r) => {
      if (!r || !Array.isArray(r)) return false;
      const total = r.reduce((s, name) => {
        const f = foods3.find(f => f.name === name);
        return s + (f ? f.cal : 0);
      }, 0);
      return total <= 500 && total > 0;
    },
  },
  {
    name: "목표 800kcal — 더 많이 선택",
    input: [foods3, 800, targetRatio],
    validate: (r) => {
      if (!r || !Array.isArray(r)) return false;
      const total = r.reduce((s, name) => {
        const f = foods3.find(f => f.name === name);
        return s + (f ? f.cal : 0);
      }, 0);
      return total <= 800 && total >= 300; // 합리적인 범위
    },
  },
  {
    name: "목표 50kcal — 작은 음식만",
    input: [foods3, 50, targetRatio],
    validate: (r) => {
      if (!r || !Array.isArray(r)) return false;
      const total = r.reduce((s, name) => {
        const f = foods3.find(f => f.name === name);
        return s + (f ? f.cal : 0);
      }, 0);
      return total <= 50;
    },
  },
  {
    name: "O(n log n) — 대량 데이터",
    input: [
      Array.from({ length: 1000 }, (_, i) => ({
        name: `음식${i}`,
        cal: Math.floor(Math.random() * 200) + 10,
        carb: Math.floor(Math.random() * 50),
        protein: Math.floor(Math.random() * 30),
        fat: Math.floor(Math.random() * 20),
      })),
      2000,
      targetRatio,
    ],
    validate: (r) => {
      // 1000개 음식에서 실행이 빠르게 완료되는지 확인
      return Array.isArray(r) && r.length > 0;
    },
  },
], greedyOptimal));

summary(results);
