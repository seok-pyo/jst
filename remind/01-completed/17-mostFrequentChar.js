/**
 * 복습 문제: 가장 많이 등장한 문자 찾기
 * 난이도: ★★☆
 */

function mostFrequentChar(str) {
  // 구현하세요
  // 힌트: 객체로 빈도수 카운팅
}

// 테스트
console.log(mostFrequentChar("aabbbcc")); // 'b'
console.log(mostFrequentChar("hello world")); // 'l'
console.log(mostFrequentChar("abcabc")); // 'a' (동률이면 먼저 나온 것)

// 보너스: 공백 제외
function mostFrequentCharNoSpace(str) {
  // 구현하세요
}

console.log(mostFrequentCharNoSpace("hello world")); // 'l' (공백 제외)
