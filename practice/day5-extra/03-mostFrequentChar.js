/**
 * 문제: 문자열에서 가장 많이 등장한 문자 반환하기
 *
 * 요구사항:
 * - 대소문자 구분 (또는 옵션으로 무시)
 * - 공백은 제외
 * - 동률일 경우 먼저 등장한 문자 반환
 */

function mostFrequentChar(str) {
  // 여기에 구현
  const counter = {};
  let max = -1;
  let result = "";

  Array.from(str).forEach((a) => {
    if (a in counter) {
      counter[a] += 1;
    } else {
      counter[a] = 1;
    }
  });

  for (const a of Object.entries(counter)) {
    if (a[1] > max) {
      max = a[1];
      result = a[0];
    }
  }

  return result;
}

// 테스트 1: 기본 사용
console.log(mostFrequentChar("hello world")); // "l" (3번)
console.log(mostFrequentChar("aabbcc")); // "a" (동률이면 먼저 등장한 것)
console.log(mostFrequentChar("javascript")); // "a" (2번)

// 테스트 2: 대소문자
console.log(mostFrequentChar("AaAaBb")); // "A" 또는 "a" (구현에 따라)

// 테스트 3: 특수문자 포함
console.log(mostFrequentChar("a!!b!!c!!")); // "!"

// 테스트 4: 빈 문자열
console.log(mostFrequentChar("")); // null 또는 ""

// 보너스: 옵션 추가
function mostFrequentCharWithOptions(str, options = {}) {
  // options.ignoreCase: 대소문자 무시
  // options.ignoreSpaces: 공백 무시 (기본 true)
  // options.ignoreSpecial: 특수문자 무시
}

// 보너스 2: 상위 N개 반환
function topNFrequentChars(str, n) {
  // 가장 많이 등장한 문자 n개를 배열로 반환
}

console.log(topNFrequentChars("hello world", 3)); // ["l", "o", "h"] 등
