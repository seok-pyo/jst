/**
 * 문제 4: 이벤트 처리 심화
 *
 * 버블링, 캡처링, 이벤트 객체 활용
 */

// ========== 문제 4-1: 이벤트 버블링과 캡처링 ==========

/*
HTML 구조:
<div id="outer">
  <div id="inner">
    <button id="btn">클릭</button>
  </div>
</div>
*/

function setupEventPhases() {
  const outer = document.getElementById("outer");
  const inner = document.getElementById("inner");
  const btn = document.getElementById("btn");

  // 버블링 (기본값, false)
  outer.addEventListener("click", () => console.log("outer - bubble"));
  inner.addEventListener("click", () => console.log("inner - bubble"));
  btn.addEventListener("click", () => console.log("btn - bubble"));

  // 캡처링 (true)
  outer.addEventListener("click", () => console.log("outer - capture"), true);
  inner.addEventListener("click", () => console.log("inner - capture"), true);
  btn.addEventListener("click", () => console.log("btn - capture"), true);

  // 버튼 클릭 시 출력 순서를 예측하세요:
  // ?
}

// ========== 문제 4-2: stopPropagation vs stopImmediatePropagation ==========

function compareStopMethods() {
  const btn = document.getElementById("btn");

  btn.addEventListener("click", (e) => {
    console.log("handler 1");
    // e.stopPropagation(); // 부모로 전파 중단
    // e.stopImmediatePropagation(); // 같은 요소의 다른 핸들러도 중단
  });

  btn.addEventListener("click", () => {
    console.log("handler 2"); // stopImmediatePropagation이면 실행 안됨
  });
}

// ========== 문제 4-3: preventDefault 활용 ==========

function setupFormValidation() {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", (e) => {
    // 기본 제출 동작 막기
    // 여기에 구현

    // 유효성 검사
    const name = form.querySelector('input[name="name"]');
    if (!name.value.trim()) {
      alert("이름을 입력하세요");
      name.focus();
      return;
    }

    // 수동 제출
    console.log("폼 제출:", new FormData(form));
  });
}

// ========== 문제 4-4: 커스텀 이벤트 ==========

function createCustomEvent() {
  // 커스텀 이벤트 생성
  const myEvent = new CustomEvent("userLoggedIn", {
    detail: {
      userId: 1,
      username: "철수",
    },
    bubbles: true, // 버블링 여부
    cancelable: true, // preventDefault 가능 여부
  });

  // 이벤트 디스패치
  document.dispatchEvent(myEvent);

  // 이벤트 리스닝
  document.addEventListener("userLoggedIn", (e) => {
    console.log("로그인됨:", e.detail.username);
  });
}

// ========== 문제 4-5: 이벤트 리스너 제거 ==========

function setupRemovableListener() {
  const btn = document.getElementById("btn");

  // 익명 함수는 제거 불가!
  btn.addEventListener("click", () => console.log("클릭")); // 제거 불가

  // 명명된 함수로 제거 가능
  function handleClick() {
    console.log("클릭");
  }

  btn.addEventListener("click", handleClick);
  btn.removeEventListener("click", handleClick); // OK

  // AbortController로 제거 (최신 방법)
  const controller = new AbortController();

  btn.addEventListener("click", () => console.log("클릭"), {
    signal: controller.signal,
  });

  // 나중에 제거
  controller.abort();
}

// ========== 문제 4-6: 이벤트 객체 활용 ==========

function setupEventObject() {
  document.addEventListener("click", (e) => {
    console.log({
      // 마우스 위치
      clientX: e.clientX, // 뷰포트 기준
      clientY: e.clientY,
      pageX: e.pageX, // 문서 기준
      pageY: e.pageY,

      // 타겟
      target: e.target, // 실제 클릭된 요소
      currentTarget: e.currentTarget, // 이벤트 리스너가 붙은 요소

      // 키보드 조합
      ctrlKey: e.ctrlKey,
      shiftKey: e.shiftKey,
      altKey: e.altKey,
      metaKey: e.metaKey, // Cmd (Mac) / Win (Windows)

      // 버튼
      button: e.button, // 0: 왼쪽, 1: 중간, 2: 오른쪽
    });
  });
}

// ========== 문제 4-7: 이벤트 위임 패턴 구현 ==========

function setupEventDelegation() {
  // 문제: 동적으로 추가되는 버튼들을 처리하세요

  const container = document.getElementById("button-container");

  // 여기에 구현
  // - 버튼 클릭 시 해당 버튼의 data-action 속성에 따라 다른 동작
  // - add: 새 버튼 추가
  // - remove: 해당 버튼 삭제
  // - toggle: 활성화/비활성화 토글
}
