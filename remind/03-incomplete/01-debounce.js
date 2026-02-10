/**
 * 미완성 문제: debounce 함수 구현
 * 난이도: ★★☆
 *
 * debounce vs throttle:
 * - debounce: 마지막 호출 후 delay가 지나야 실행 (검색 입력)
 * - throttle: delay 간격으로 최대 1번 실행 (스크롤)
 */

function debounce(fn, delay) {
  // 구현하세요
  // 힌트: 타이머 ID를 클로저로 저장
}

// 테스트
let count = 0;
const debouncedLog = debounce(() => {
  count++;
  console.log("실행:", count);
}, 1000);

// 빠르게 여러 번 호출
debouncedLog();
debouncedLog();
debouncedLog();
// 1초 후 '실행: 1' 한 번만 출력

// 실제 사용 예시
/*
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', debounce((e) => {
  console.log('검색:', e.target.value);
  // API 호출
}, 300));
*/
