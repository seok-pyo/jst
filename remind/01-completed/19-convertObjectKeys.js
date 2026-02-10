/**
 * 복습 문제: 객체 키 재귀 변환
 * 난이도: ★★★
 */

function convertObjectKeys(obj, converter) {
  // 구현하세요
  // 힌트: 중첩 객체도 재귀적으로 처리
  // 주의: 배열, null 처리
}

// 헬퍼 함수
function snakeToCamel(str) {
  return str
    .split("_")
    .filter(Boolean)
    .map((word, i) => (i === 0 ? word : word[0].toUpperCase() + word.slice(1)))
    .join("");
}

// 테스트
const snakeObj = {
  user_name: "철수",
  user_info: {
    first_name: "철수",
    last_name: "김",
  },
  tags: ["developer", "frontend"],
};

console.log(convertObjectKeys(snakeObj, snakeToCamel));
// {
//   userName: "철수",
//   userInfo: {
//     firstName: "철수",
//     lastName: "김"
//   },
//   tags: ["developer", "frontend"]
// }
