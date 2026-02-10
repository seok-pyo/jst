/**
 * 부분완성 문제: data-action 이벤트 위임
 * 이미 완성되어 있지만, 이해도 확인
 * 난이도: ★★☆
 */

/*
<div id="actions">
  <button data-action="save">저장</button>
  <button data-action="delete">삭제</button>
  <button data-action="cancel">취소</button>
</div>
*/

const handlers = {
  save: () => console.log("저장됨"),
  delete: () => console.log("삭제됨"),
  cancel: () => console.log("취소됨"),
};

function setupActionButtons() {
  const container = document.getElementById("actions");

  container.addEventListener("click", (e) => {
    const action = e.target.dataset.action;

    if (action && handlers[action]) handlers[action]();
  });
}

// 질문에 답하세요:
// 1. e.target.dataset.action은 무엇을 반환하는가?
// 답:

// 2. 왜 각 버튼에 addEventListener를 달지 않고 container에 달았는가?
// 답:

// 3. handlers[action]에서 대괄호 표기법을 쓰는 이유는?
// 답:

// 보너스: 새로운 액션 추가하기
// "edit" 버튼을 추가하고, handlers에 edit 핸들러 추가
// HTML: <button data-action="edit">수정</button>
