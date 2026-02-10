# Frontend 면접 질문 모음

---

## JavaScript 핵심 질문

### 실행 컨텍스트 & 스코프

1. 실행 컨텍스트가 무엇인지 설명해주세요.
2. 호이스팅이 무엇이고, var / let / const의 차이를 호이스팅 관점에서 설명해주세요.
3. TDZ(Temporal Dead Zone)가 무엇인가요?
4. 렉시컬 스코프와 동적 스코프의 차이는?
5. 스코프 체인이 어떻게 동작하는지 설명해주세요.

### 클로저

1. 클로저를 설명하고, 실무에서 어떻게 활용하나요?
2. 클로저로 인한 메모리 누수는 어떻게 발생하나요?
3. for 루프 + setTimeout 문제를 클로저로 해결해주세요.

### this

1. JavaScript에서 this는 어떻게 결정되나요?
2. call, apply, bind의 차이를 설명해주세요.
3. 화살표 함수에서 this가 다른 이유는?

### 프로토타입

1. 프로토타입 체인을 설명해주세요.
2. `__proto__`와 `prototype`의 차이는?
3. class와 생성자 함수의 차이는?
4. instanceof는 내부적으로 어떻게 동작하나요?

### 이벤트 루프 & 비동기

1. 이벤트 루프를 설명해주세요.
2. 마이크로태스크와 매크로태스크의 차이는?
3. Promise와 async/await의 차이는?
4. Promise.all과 Promise.allSettled의 차이는?
5. 아래 코드의 출력 순서를 말해주세요:

```javascript
console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
queueMicrotask(() => console.log('D'));
console.log('E');
```

### 타입 & 데이터

1. 원시 타입과 참조 타입의 차이는?
2. `==`와 `===`의 차이를 설명해주세요.
3. 깊은 복사와 얕은 복사의 차이, 구현 방법은?
4. `typeof null`이 `"object"`인 이유는?
5. 불변성(Immutability)이 왜 중요한가요?

### ES6+

1. 구조분해 할당의 동작 원리를 설명해주세요.
2. `??`(Nullish Coalescing)와 `||`의 차이는?
3. 옵셔널 체이닝 `?.`은 어떤 문제를 해결하나요?
4. Symbol은 어디에 쓰나요?
5. Map과 일반 객체의 차이는?

### 함수

1. 일급 객체(First-class Function)란?
2. 고차 함수(Higher-Order Function)의 예시를 들어주세요.
3. 커링(Currying)이란 무엇이고, 언제 사용하나요?
4. debounce와 throttle의 차이를 설명하고 구현해주세요.
5. 순수 함수란 무엇인가요?

---

## HTML / CSS 핵심 질문

### HTML

1. 시맨틱 태그를 왜 사용해야 하나요?
2. `<script>`, `<script defer>`, `<script async>`의 차이는?
3. `data-*` 속성은 무엇인가요?
4. DOCTYPE의 역할은?
5. 웹 접근성(a11y)을 위해 어떤 점을 고려하나요?

### CSS

1. `display: none` vs `visibility: hidden` vs `opacity: 0`의 차이는?
2. position 속성의 각 값(static, relative, absolute, fixed, sticky)을 설명해주세요.
3. CSS 선택자 우선순위(Specificity)를 계산하는 방법은?
4. `box-sizing: content-box`와 `border-box`의 차이는?
5. Flexbox와 Grid의 차이, 각각 언제 쓰나요?
6. BFC(Block Formatting Context)란?
7. rem, em, vw, vh의 차이는?
8. CSS-in-JS, CSS Modules, Tailwind의 장단점을 비교해주세요.
9. 반응형 디자인과 적응형 디자인의 차이는?
10. margin collapsing이 무엇인가요?

---

## React 핵심 질문

### 기초

1. Virtual DOM이 무엇이고, 왜 사용하나요?
2. React의 Reconciliation(재조정) 과정을 설명해주세요.
3. JSX는 무엇이고, 내부적으로 어떻게 변환되나요?
4. key를 왜 써야 하고, index를 key로 쓰면 안 되는 이유는?

### Hooks

1. useState의 동작 원리를 설명해주세요. 왜 비동기적으로 동작하나요?
2. useEffect의 의존성 배열이 빈 배열, 없는 경우, 값이 있는 경우 각각 어떻게 동작하나요?
3. useRef는 어디에 쓰나요? useState와의 차이는?
4. useMemo와 useCallback의 차이와 사용 시점은?
5. useReducer는 언제 useState 대신 사용하나요?
6. 커스텀 훅을 만들어본 경험을 설명해주세요.

### 상태 관리

1. Props Drilling 문제를 어떻게 해결하나요?
2. Context API의 한계는 무엇인가요?
3. Redux, Zustand, Recoil, Jotai를 비교해주세요.
4. 전역 상태 vs 서버 상태(React Query/TanStack Query)의 차이는?

### 최적화

1. React에서 불필요한 리렌더링을 방지하는 방법들은?
2. React.memo는 어떻게 동작하나요?
3. React DevTools Profiler를 사용해본 적 있나요?
4. 코드 스플리팅을 React에서 어떻게 구현하나요?

### React 심화

1. Controlled vs Uncontrolled Component의 차이는?
2. HOC(Higher-Order Component), Render Props, Custom Hook 패턴을 비교해주세요.
3. Error Boundary란?
4. React 18의 주요 변경사항은? (Concurrent Mode, Automatic Batching, Suspense)
5. React Server Components란 무엇이고, 기존 SSR과 어떻게 다른가요?
6. useTransition과 useDeferredValue는 어떤 문제를 해결하나요?
7. React의 Fiber 아키텍처란?

---

## 브라우저 & 네트워크 질문

### 브라우저

1. "주소창에 URL을 입력하면 무슨 일이 일어나나요?" (킬러 질문)
2. 브라우저 렌더링 과정을 설명해주세요. (CRP - Critical Rendering Path)
3. Reflow와 Repaint의 차이, 최소화 방법은?
4. Cookie, localStorage, sessionStorage, IndexedDB의 차이는?
5. CORS가 무엇이고, 어떻게 해결하나요?
6. CSP(Content Security Policy)란?
7. 브라우저 캐시 전략(Cache-Control, ETag)을 설명해주세요.

### 네트워크

1. HTTP/1.1 vs HTTP/2 vs HTTP/3의 차이는?
2. HTTPS의 동작 원리(TLS 핸드셰이크)를 설명해주세요.
3. REST API 설계 원칙과 HTTP 메서드별 특성(멱등성 포함)을 설명해주세요.
4. GraphQL의 장단점, REST와 비교해주세요.
5. WebSocket vs SSE(Server-Sent Events) vs Long Polling의 차이는?
6. CDN이란 무엇이고, 어떻게 성능을 개선하나요?

---

## TypeScript 질문

1. TypeScript를 왜 사용하나요? JavaScript 대비 장점은?
2. interface와 type의 차이는? 언제 어떤 걸 쓰나요?
3. 제네릭(Generic)을 설명하고 실용 사례를 들어주세요.
4. any, unknown, never의 차이는?
5. 유틸리티 타입 Partial, Pick, Omit, Record를 설명해주세요.
6. 타입 가드(Type Guard)란 무엇이고, 어떻게 구현하나요?
7. as const는 어떤 역할을 하나요?
8. Discriminated Union(판별 유니온)이란?

---

## 성능 최적화 질문

1. Core Web Vitals(LCP, FID/INP, CLS)를 각각 설명해주세요.
2. Lighthouse로 성능을 측정해본 경험이 있나요?
3. Tree Shaking이란 무엇이고, 어떤 조건에서 동작하나요?
4. 이미지 최적화 방법들을 설명해주세요. (WebP, lazy loading, srcset)
5. 번들 사이즈를 줄이기 위해 어떤 방법을 사용하나요?
6. 웹 폰트 최적화 (FOUT, FOIT, font-display)를 설명해주세요.
7. requestAnimationFrame은 어디에 사용하나요?

---

## Next.js / SSR 질문

1. CSR, SSR, SSG, ISR을 각각 설명하고 언제 사용하나요?
2. Next.js의 App Router와 Pages Router의 차이는?
3. Server Component와 Client Component의 경계를 어떻게 정하나요?
4. getServerSideProps, getStaticProps, getStaticPaths를 설명해주세요.
5. Next.js Middleware는 어디에 활용하나요?
6. Hydration이란 무엇이고, Hydration Mismatch는 왜 발생하나요?

---

## 빌드 & 도구 질문

1. Webpack과 Vite의 차이는? Vite가 왜 빠른가요?
2. Babel의 역할과 동작 원리는?
3. HMR(Hot Module Replacement)이란?
4. Source Map은 무엇이고 왜 필요한가요?
5. Monorepo의 장단점, 도구(Turborepo, Nx)를 설명해주세요.

---

## 보안 질문

1. XSS 공격의 종류와 방어 방법을 설명해주세요.
2. CSRF 공격과 방어 방법은?
3. JWT와 Session 기반 인증의 차이는?
4. OAuth 2.0의 동작 흐름을 설명해주세요.

---

## 테스팅 질문

1. 단위/통합/E2E 테스트의 차이와 테스팅 피라미드를 설명해주세요.
2. React Testing Library의 철학은 무엇이고, Enzyme과 어떻게 다른가요?
3. 테스트에서 Mock, Stub, Spy의 차이는?
4. TDD를 실무에 적용해본 경험이 있나요?

---

## Git & 협업 질문

1. git rebase와 git merge의 차이는?
2. Git Flow와 Trunk-based Development를 비교해주세요.
3. 코드 리뷰에서 중요하게 보는 점은?
4. CI/CD 파이프라인을 구성해본 경험이 있나요?

---

## 소프트 스킬 / 경험 질문

1. 가장 어려웠던 기술적 문제와 해결 과정을 설명해주세요.
2. 성능을 개선해본 경험이 있나요? 어떤 지표가 얼마나 개선되었나요?
3. 팀 내 기술적 의견 충돌이 있었을 때 어떻게 해결했나요?
4. 새로운 기술을 도입할 때 어떤 기준으로 결정하나요?
