/**
 * 미완성 문제: DocumentFragment 활용
 * 난이도: ★★☆
 */

function appendMultipleItems(container, items) {
  // 구현하세요
  // DocumentFragment 사용하여 리플로우 최소화
}

/*
 * Fragment 없이 (비효율적):
 * items.forEach(item => {
 *   container.appendChild(createItem(item)); // 매번 리플로우
 * });
 *
 * Fragment 사용 (효율적):
 * const fragment = document.createDocumentFragment();
 * items.forEach(item => {
 *   fragment.appendChild(createItem(item));
 * });
 * container.appendChild(fragment); // 한 번만 리플로우
 */

// 아이템 생성 헬퍼
function createItem(text) {
  const div = document.createElement("div");
  div.className = "item";
  div.textContent = text;
  return div;
}

// 테스트
// const container = document.getElementById('list');
// appendMultipleItems(container, ['Item 1', 'Item 2', 'Item 3']);

// 질문: DocumentFragment를 쓰면 왜 성능이 좋아지나요?
// 답:
