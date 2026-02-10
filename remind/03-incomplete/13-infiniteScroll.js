/**
 * 미완성 문제: 무한 스크롤 구현
 * 난이도: ★★★
 */

// 방법 1: scroll 이벤트
function setupInfiniteScroll(container, loadMore) {
  // 구현하세요
  // - scroll 이벤트 리스너 등록
  // - 스크롤이 하단 근처에 도달하면 loadMore() 호출
  // - 로딩 중에는 추가 요청 방지
  // - throttle 적용
}

// 방법 2: Intersection Observer (권장)
function setupInfiniteScrollObserver(options) {
  const { container, sentinel, loadMore } = options;

  // 구현하세요
  // - sentinel: 감시할 요소 (리스트 맨 아래에 배치)
  // - sentinel이 뷰포트에 들어오면 loadMore() 호출
}

// 전체 구현
class InfiniteList {
  constructor(container, fetchData) {
    this.container = container;
    this.fetchData = fetchData;
    this.page = 1;
    this.isLoading = false;
    this.hasMore = true;

    this.init();
  }

  init() {
    // 구현하세요
  }

  async loadMore() {
    // 구현하세요
  }

  renderItems(items) {
    // 구현하세요
  }
}

// 사용 예시
/*
const list = new InfiniteList(
  document.getElementById('list'),
  async (page) => {
    const res = await fetch(`/api/items?page=${page}`);
    return res.json();
  }
);
*/
