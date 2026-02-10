/**
 * 문제 4: 커스텀 모달 구현
 *
 * 요구사항:
 * - JavaScript로 모달 생성/제거
 * - 열기/닫기 기능
 * - 배경 클릭 시 닫기
 * - ESC 키로 닫기
 * - 애니메이션 (선택)
 */

// ========== 문제 4-1: 기본 모달 클래스 ==========

class Modal {
  constructor(options = {}) {
    this.title = options.title || "알림";
    this.content = options.content || "";
    this.onConfirm = options.onConfirm || (() => {});
    this.onCancel = options.onCancel || (() => {});

    this.modalElement = null;
    this.overlayElement = null;
  }

  // 모달 DOM 생성
  create() {
    // 여기에 구현
    // - overlay (배경) 생성
    // - modal 컨테이너 생성
    // - 제목, 내용, 버튼 추가
    // - body에 추가
  }

  // 모달 열기
  open() {
    // 여기에 구현
    // - create() 호출
    // - display: block 또는 클래스 추가
    // - 이벤트 리스너 등록
  }

  // 모달 닫기
  close() {
    // 여기에 구현
    // - DOM에서 제거
    // - 이벤트 리스너 제거
  }

  // 이벤트 바인딩
  bindEvents() {
    // 여기에 구현
    // - 확인/취소 버튼 클릭
    // - 배경 클릭 시 닫기
    // - ESC 키 누르면 닫기
  }
}

// 사용 예시
// const modal = new Modal({
//   title: '확인',
//   content: '정말 삭제하시겠습니까?',
//   onConfirm: () => console.log('삭제됨'),
//   onCancel: () => console.log('취소됨')
// });
// modal.open();

// ========== 문제 4-2: 간편 함수 ==========

function alert(message) {
  // 여기에 구현
  // - 확인 버튼만 있는 알림 모달
  // - Promise 반환
}

function confirm(message) {
  // 여기에 구현
  // - 확인/취소 버튼
  // - Promise<boolean> 반환
}

function prompt(message, defaultValue = "") {
  // 여기에 구현
  // - 입력 필드 포함
  // - Promise<string | null> 반환
}

// 사용 예시
// await alert('저장되었습니다');
// const ok = await confirm('삭제하시겠습니까?');
// const name = await prompt('이름을 입력하세요', '홍길동');

// ========== 문제 4-3: 포커스 트랩 ==========
// 모달이 열려있을 때 Tab 키로 모달 밖으로 포커스가 나가지 않도록

function trapFocus(modalElement) {
  // 여기에 구현
  // - 모달 내 포커스 가능한 요소들 찾기
  // - Tab/Shift+Tab 처리
  // - 첫/마지막 요소에서 순환
}

// ========== 스타일 예시 ==========
const modalStyles = `
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .modal {
    background: white;
    border-radius: 8px;
    padding: 20px;
    min-width: 300px;
    max-width: 500px;
  }

  .modal-header {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  .modal-content {
    margin-bottom: 20px;
  }

  .modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }
`;
