/**
 * 미완성 문제: 커스텀 모달 구현
 * 난이도: ★★★
 */

class Modal {
  constructor(options = {}) {
    this.title = options.title || "알림";
    this.content = options.content || "";
    this.onConfirm = options.onConfirm || (() => {});
    this.onCancel = options.onCancel || (() => {});

    this.modalElement = null;
    this.overlayElement = null;
  }

  create() {
    // 구현하세요
    // - overlay (배경) 생성
    // - modal 컨테이너 생성
    // - 제목, 내용, 버튼 추가
    // - body에 추가
  }

  open() {
    // 구현하세요
    // - create() 호출
    // - 이벤트 리스너 등록
  }

  close() {
    // 구현하세요
    // - DOM에서 제거
    // - 이벤트 리스너 제거
  }

  bindEvents() {
    // 구현하세요
    // - 확인/취소 버튼 클릭
    // - 배경 클릭 시 닫기
    // - ESC 키 누르면 닫기
  }
}

// 사용 예시
/*
const modal = new Modal({
  title: '확인',
  content: '정말 삭제하시겠습니까?',
  onConfirm: () => console.log('삭제됨'),
  onCancel: () => console.log('취소됨')
});
modal.open();
*/

// 간편 함수
function confirm(message) {
  // Promise<boolean> 반환
  // 구현하세요
}

// await confirm('삭제하시겠습니까?') // true 또는 false
