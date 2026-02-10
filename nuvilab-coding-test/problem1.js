/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║  문제 1: 음식 데이터 파서                                 ║
 * ║  난이도: ★★☆  |  문자열 파싱 + 트리  |  40분              ║
 * ╠══════════════════════════════════════════════════════════╣
 * ║                                                          ║
 * ║  급식 메뉴 데이터가 중첩 문자열로 전달됩니다.               ║
 * ║  이 문자열을 파싱하고, 변환하고, 검색하는 함수를 구현하세요.  ║
 * ║                                                          ║
 * ║  실행: node problem1.js                                   ║
 * ╚══════════════════════════════════════════════════════════╝
 */

const { printHeader, runStep, summary } = require("./runner");

// ─────────────────────────────────────────────────────────
// STEP 1: 기본 파싱
// ─────────────────────────────────────────────────────────
//
// 급식 메뉴 데이터가 아래와 같은 중첩 문자열로 전달됩니다.
//
// 입력: "[한식[비빔밥,불고기],중식[짜장면,탕수육[소스,고기]],양식[파스타]]"
//
// 이 문자열을 파싱하여 트리 구조 객체로 변환하세요.
//
// 출력 형태:
// {
//   name: "root",
//   children: [
//     { name: "한식", children: [
//       { name: "비빔밥", children: [] },
//       { name: "불고기", children: [] }
//     ]},
//     { name: "중식", children: [
//       { name: "짜장면", children: [] },
//       { name: "탕수육", children: [
//         { name: "소스", children: [] },
//         { name: "고기", children: [] }
//       ]}
//     ]},
//     { name: "양식", children: [
//       { name: "파스타", children: [] }
//     ]}
//   ]
// }
//
// 힌트: 스택 또는 재귀 하강 파서를 사용하세요.
//       '[' → 새 노드 push, ']' → pop, ',' → 형제 구분

// function parseMenu(str) {
//   // ✏️ 여기에 코드를 작성하세요
//   // 입력: "[한식[비빔밥,불고기] ,중식[짜장면,탕수육[소스,고기]] ,양식[파스타]]"
//   const root = { name: "root", children: [] };
//   const stack = [root];
//   let name = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "]") {
//       if (name) {
//         stack[stack.length - 1]["children"].push({ name: name, children: [] });
//       }
//       stack.pop();
//       name = "";
//     } else if (str[i] === ",") {
//       if (name) {
//         const node = { name: name, children: [] };
//         stack[stack.length - 1]["children"].push(node);
//         name = "";
//       }
//     } else if (str[i] === "[") {
//       if (name) {
//         const node = { name: name, children: [] };
//         stack[stack.length - 1]["children"].push(node);
//         stack.push(node);
//         name = "";
//       }
//     } else {
//       name += str[i];
//     }
//   }

//   return root;
// }

//   // 입력: "[한식[비빔밥,불고기] ,중식[짜장면,탕수육[소스,고기]] ,양식[파스타]]"
function parseMenu(str) {
  function parse(str, idx) {
    const children = [];
    let name = "";
    while (idx < str.length) {
      if (str[idx] === "[") {
      } else if (str[idx] === "]") {
      } else if (str[idx] === ",") {
      } else {
      }
    }
  }
  const result = parse(str, 1);
  return { name: "root", children: result.children };
}

// ─────────────────────────────────────────────────────────
// STEP 2: 역순 변환
// ─────────────────────────────────────────────────────────
//
// STEP 1에서 만든 트리의 각 레벨에서 자식 노드들의 순서를
// 역순으로 바꾸고, 다시 원래 문자열 형식으로 출력하세요.
//
// ⚠️ 원본 트리를 변경하지 않고(immutable) 새 트리를 반환해야 합니다.
//
// 입력: "[한식[비빔밥,불고기],중식[짜장면,탕수육[소스,고기]],양식[파스타]]"
// 출력: "[양식[파스타],중식[탕수육[고기,소스],짜장면],한식[불고기,비빔밥]]"
//
// 힌트: 재귀적으로 children을 reverse한 새 배열을 만드세요.
//       spread 연산자 + map으로 immutable 처리

function reverseTree(node) {
  // ✏️ 여기에 코드를 작성하세요
}

function treeToString(node) {
  // ✏️ 여기에 코드를 작성하세요
}

// ─────────────────────────────────────────────────────────
// STEP 3: 경로 검색
// ─────────────────────────────────────────────────────────
//
// 트리에서 특정 음식 이름을 검색하면
// 루트부터 해당 노드까지의 경로(path)를 배열로 반환하세요.
// 없으면 null을 반환합니다.
//
// findPath(tree, "고기")  → ["root", "중식", "탕수육", "고기"]
// findPath(tree, "라면")  → null
//
// 힌트: DFS로 탐색하면서 현재 경로를 배열로 유지합니다.

function findPath(node, target, path = []) {
  // ✏️ 여기에 코드를 작성하세요
}

// ═══════════════════════════════════════════════════════════
// 🧪 테스트 (수정하지 마세요)
// ═══════════════════════════════════════════════════════════

printHeader(1, "음식 데이터 파서", "★★☆", "문자열 파싱 + 트리", "40분");

const results = [];

// STEP 1 테스트
results.push(
  runStep(
    1,
    "기본 파싱",
    [
      {
        name: "기본 메뉴 파싱",
        input: ["[한식[비빔밥,불고기],중식[짜장면],양식[파스타]]"],
        validate: (r) => {
          if (!r || r.name !== "root") return false;
          if (r.children.length !== 3) return false;
          if (r.children[0].name !== "한식") return false;
          if (r.children[0].children.length !== 2) return false;
          if (r.children[0].children[0].name !== "비빔밥") return false;
          return true;
        },
      },
      {
        name: "깊은 중첩 파싱",
        input: ["[A[B[C[D]]]]"],
        validate: (r) => {
          if (!r) return false;
          return (
            r.children[0].name === "A" &&
            r.children[0].children[0].name === "B" &&
            r.children[0].children[0].children[0].name === "C" &&
            r.children[0].children[0].children[0].children[0].name === "D"
          );
        },
      },
      {
        name: "단일 항목",
        input: ["[사과]"],
        validate: (r) =>
          r && r.children.length === 1 && r.children[0].name === "사과",
      },
      {
        name: "복잡한 중첩",
        input: [
          "[한식[비빔밥,불고기],중식[짜장면,탕수육[소스,고기]],양식[파스타]]",
        ],
        validate: (r) => {
          if (!r) return false;
          const jung = r.children[1]; // 중식
          if (!jung || jung.name !== "중식") return false;
          const tangsuyuk = jung.children[1]; // 탕수육
          if (!tangsuyuk || tangsuyuk.name !== "탕수육") return false;
          return (
            tangsuyuk.children.length === 2 &&
            tangsuyuk.children[0].name === "소스" &&
            tangsuyuk.children[1].name === "고기"
          );
        },
      },
    ],
    parseMenu
  )
);

// STEP 2 테스트
const step2Fn = (str) => {
  const tree = parseMenu(str);
  if (!tree) return null;
  const reversed = reverseTree(tree);
  return treeToString(reversed);
};

results.push(
  runStep(
    2,
    "역순 변환",
    [
      {
        name: "기본 역순",
        input: ["[한식[비빔밥,불고기],중식[짜장면],양식[파스타]]"],
        expected: "[양식[파스타],중식[짜장면],한식[불고기,비빔밥]]",
      },
      {
        name: "깊은 중첩 역순",
        input: [
          "[한식[비빔밥,불고기],중식[짜장면,탕수육[소스,고기]],양식[파스타]]",
        ],
        expected:
          "[양식[파스타],중식[탕수육[고기,소스],짜장면],한식[불고기,비빔밥]]",
      },
      {
        name: "immutable 확인",
        input: ["[A[B,C],D[E,F]]"],
        validate: (result) => {
          // 역순 결과 확인 + 원본이 변하지 않았는지
          return result === "[D[F,E],A[C,B]]";
        },
      },
    ],
    step2Fn
  )
);

// STEP 3 테스트
const step3Fn = (str, target) => {
  const tree = parseMenu(str);
  if (!tree) return null;
  return findPath(tree, target);
};

results.push(
  runStep(
    3,
    "경로 검색",
    [
      {
        name: "깊은 노드 검색",
        input: [
          "[한식[비빔밥,불고기],중식[짜장면,탕수육[소스,고기]],양식[파스타]]",
          "고기",
        ],
        expected: ["root", "중식", "탕수육", "고기"],
      },
      {
        name: "1단계 깊이 검색",
        input: ["[한식[비빔밥,불고기],중식[짜장면],양식[파스타]]", "짜장면"],
        expected: ["root", "중식", "짜장면"],
      },
      {
        name: "존재하지 않는 항목",
        input: ["[한식[비빔밥,불고기],양식[파스타]]", "라면"],
        expected: null,
      },
      {
        name: "루트 직속 카테고리 검색",
        input: ["[한식[비빔밥],양식[파스타]]", "한식"],
        expected: ["root", "한식"],
      },
    ],
    step3Fn
  )
);

summary(results);
