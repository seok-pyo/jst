/**
 * 부분완성 문제: 이벤트 위임 delegate 함수
 * 문제점: querySelector 오타 (queyrSlector)
 * 난이도: ★★★
 */

function delegate(parentSelector, eventType, childSelector, handler) {
  // 오타 수정 필요!
  const parent = document.queyrSlector(parentSelector);
  parent.addEventListener(eventType, (e) => {
    const target = e.target.closest(childSelector);

    if (target && parent.contains(target)) {
      handler.call(target, e);
    }
  });
}

// 질문에 답하세요:
// 1. closest()는 무엇을 하는 메서드인가?
// 답:

// 2. parent.contains(target)는 왜 필요한가?
// 답:

// 3. handler.call(target, e)에서 call을 쓰는 이유는?
// 답:

// 사용 예시
/*
delegate('#list', 'click', 'li', function(e) {
  console.log('Clicked:', this.textContent);  // this가 li를 가리킴
});

delegate('#form', 'change', 'input', function(e) {
  console.log('Changed:', this.value);
});
*/
