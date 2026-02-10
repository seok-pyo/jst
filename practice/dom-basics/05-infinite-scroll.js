/**
 * 문제 5: 무한 스크롤 구현
 *
 * 요구사항:
 * - 스크롤이 하단에 도달하면 데이터 로드
 * - 로딩 상태 표시
 * - 중복 요청 방지
 * - Intersection Observer API 사용
 */

// ========== 문제 5-1: 기본 무한 스크롤 (scroll 이벤트) ==========

function setupInfiniteScroll(container, loadMore) {
  // 여기에 구현
  // - scroll 이벤트 리스너 등록
  // - 스크롤이 하단 근처에 도달하면 loadMore() 호출
  // - 로딩 중에는 추가 요청 방지
  // - throttle/debounce 적용

  /*
   * 하단 도달 감지:
   * const { scrollTop, scrollHeight, clientHeight } = container;
   * const isNearBottom = scrollTop + clientHeight >= scrollHeight - threshold;
   */
}

// ========== 문제 5-2: Intersection Observer 방식 (권장) ==========

function setupInfiniteScrollObserver(options) {
  const { container, sentinel, loadMore, threshold = 100 } = options;

  // 여기에 구현
  // - sentinel: 감시할 요소 (리스트 맨 아래에 배치)
  // - sentinel이 뷰포트에 들어오면 loadMore() 호출
  // - IntersectionObserver 사용

  /*
   * const observer = new IntersectionObserver((entries) => {
   *   entries.forEach(entry => {
   *     if (entry.isIntersecting) {
   *       loadMore();
   *     }
   *   });
   * }, { rootMargin: '100px' });
   *
   * observer.observe(sentinel);
   */
}

// ========== 문제 5-3: 전체 구현 예시 ==========

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
    // 여기에 구현
    // - 초기 데이터 로드
    // - observer 설정
    // - sentinel 요소 생성
  }

  async loadMore() {
    // 여기에 구현
    // - 로딩 중이거나 더 이상 데이터 없으면 return
    // - 로딩 상태 표시
    // - fetchData 호출
    // - 결과 렌더링
    // - 페이지 증가
  }

  renderItems(items) {
    // 여기에 구현
    // - 아이템들을 DOM에 추가
    // - sentinel 앞에 삽입
  }

  showLoading() {
    // 여기에 구현
  }

  hideLoading() {
    // 여기에 구현
  }
}

// 사용 예시
// const list = new InfiniteList(
//   document.getElementById('list'),
//   async (page) => {
//     const res = await fetch(`/api/items?page=${page}`);
//     return res.json();
//   }
// );

// ========== 문제 5-4: 가상 스크롤 (Virtual Scroll) 개념 ==========

/*
 * 가상 스크롤이란?
 * - 화면에 보이는 아이템만 렌더링
 * - 수만 개의 아이템도 부드럽게 스크롤
 * - DOM 요소 수를 최소화
 *
 * 구현 개념:
 * 1. 전체 높이를 가진 컨테이너 생성
 * 2. 스크롤 위치에 따라 보이는 범위 계산
 * 3. 해당 범위의 아이템만 렌더링
 * 4. 스크롤 시 아이템 재활용 (recycling)
 *
 * 라이브러리: react-virtualized, react-window
 */

// ========== 테스트용 HTML ==========
const testHTML = `
<!DOCTYPE html>
<html>
<head>
  <style>
    #list {
      height: 400px;
      overflow-y: auto;
      border: 1px solid #ccc;
    }
    .item {
      padding: 20px;
      border-bottom: 1px solid #eee;
    }
    .loading {
      text-align: center;
      padding: 20px;
    }
    .sentinel {
      height: 1px;
    }
  </style>
</head>
<body>
  <div id="list">
    <!-- 아이템들이 여기에 추가됨 -->
    <div class="sentinel"></div>
  </div>

  <script src="05-infinite-scroll.js"></script>
</body>
</html>
`;
