/**
 * 문제 3: querySelector 활용하기
 *
 * 다양한 선택자로 요소를 찾는 방법
 */

// ========== 기본 선택자 ==========

/*
HTML 구조:
<div id="app">
  <header class="header">
    <h1>제목</h1>
    <nav>
      <a href="/" class="nav-link active">홈</a>
      <a href="/about" class="nav-link">소개</a>
    </nav>
  </header>
  <main>
    <article data-id="1" data-category="tech">
      <h2>글 제목 1</h2>
      <p class="content">내용...</p>
    </article>
    <article data-id="2" data-category="life">
      <h2>글 제목 2</h2>
      <p class="content">내용...</p>
    </article>
  </main>
  <form id="contact-form">
    <input type="text" name="name" required>
    <input type="email" name="email">
    <button type="submit" disabled>제출</button>
  </form>
</div>
*/

// ========== 문제 3-1: 다양한 선택자로 요소 찾기 ==========

function findElements() {
  // 1. ID로 찾기
  const app = null; // #app

  // 2. 클래스로 찾기
  const header = null; // .header

  // 3. 태그로 찾기
  const articles = null; // 모든 article

  // 4. 속성으로 찾기
  const techArticle = null; // data-category="tech"인 article

  // 5. 자식 선택자
  const navLinks = null; // nav 바로 아래의 a 태그들

  // 6. 자손 선택자
  const allLinks = null; // header 안의 모든 a 태그

  // 7. 인접 형제 선택자
  const h2AfterH1 = null; // h1 바로 다음의 h2

  // 8. :first-child, :last-child
  const firstArticle = null; // 첫 번째 article

  // 9. :nth-child
  const secondNavLink = null; // 두 번째 nav-link

  // 10. :not()
  const inactiveLinks = null; // active가 아닌 nav-link

  // 11. [attribute^=], [attribute$=], [attribute*=]
  const emailInput = null; // type이 "email"로 시작하는 input

  // 12. :disabled, :enabled, :checked
  const disabledBtn = null; // disabled된 button

  // 13. 복합 선택자
  const requiredInputs = null; // required 속성이 있는 input

  return {
    app,
    header,
    articles /* ... */,
  };
}

// ========== 문제 3-2: closest 활용 ==========

function handleClick(e) {
  // 클릭된 요소에서 가장 가까운 article 찾기
  const article = null; // 구현

  if (article) {
    const id = article.dataset.id;
    console.log(`Article ${id} clicked`);
  }
}

// ========== 문제 3-3: matches 활용 ==========

function isNavLink(element) {
  // element가 .nav-link인지 확인
  return false; // 구현
}

// ========== 문제 3-4: 요소 탐색 메서드들 ==========

function traverseDOM() {
  const article = document.querySelector("article");

  // 부모 요소
  const parent = null; // article.parentElement

  // 자식 요소들
  const children = null; // article.children

  // 첫 번째/마지막 자식
  const firstChild = null; // article.firstElementChild
  const lastChild = null; // article.lastElementChild

  // 형제 요소
  const nextSibling = null; // article.nextElementSibling
  const prevSibling = null; // article.previousElementSibling
}

// ========== 문제 3-5: NodeList vs HTMLCollection ==========

/*
querySelectorAll → NodeList (정적)
getElementsByClassName → HTMLCollection (동적)

차이점:
1. NodeList: forEach 사용 가능, 정적 (스냅샷)
2. HTMLCollection: forEach 불가, 동적 (라이브)
*/

function compareCollections() {
  // NodeList (정적)
  const nodeList = document.querySelectorAll(".item");
  nodeList.forEach((item) => console.log(item)); // OK

  // HTMLCollection (동적)
  const htmlCollection = document.getElementsByClassName("item");
  // htmlCollection.forEach() // Error!
  Array.from(htmlCollection).forEach((item) => console.log(item)); // OK

  // 동적 특성 확인
  // HTMLCollection은 DOM 변경 시 자동 업데이트
  // NodeList는 변경 안 됨
}
