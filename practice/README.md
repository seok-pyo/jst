# JS 라이브 코딩 연습 문제

## 학습 계획 (5일)

| 일차  | 폴더              | 문제 수 | 목표 시간             |
| ----- | ----------------- | ------- | --------------------- |
| 0일차 | day0-basics       | 5문제   | 복습 (이미 풀어본 것) |
| 1일차 | day1-array        | 4문제   | 문제당 10-15분        |
| 2일차 | day2-function     | 5문제   | 문제당 15-20분        |
| 3일차 | day3-promise      | 4문제   | 문제당 15-20분        |
| 4일차 | day4-react        | 4문제   | 문제당 15분           |
| 5일차 | day5-extra + 복습 | 5문제   | 시간 재며 풀기        |
| 추가  | ts-basics         | 5문제   | 개념 이해 중심        |
| 추가  | dom-basics        | 5문제   | 브라우저에서 테스트   |

**총 37문제** (JS 27 + TS 5 + DOM 5)

---

## Day 0: 기본 (복습용)

- [ ] `01-debounce.js` - 연속 호출 시 마지막만 실행
- [ ] `02-throttle.js` - 일정 간격으로만 실행
- [ ] `03-once.js` - 한 번만 실행
- [ ] `04-deepcopy.js` - 깊은 복사
- [ ] `05-flatten.js` - 배열 평탄화

**핵심 포인트:**

- 클로저로 상태 유지 (timer, flag, lastTime)
- 재귀로 중첩 구조 처리
- 정답은 `before` 폴더에서 확인

---

## Day 1: Array 메서드 구현

- [v] `01-myMap.js` - Array.prototype.map 구현
- [v] `02-myFilter.js` - Array.prototype.filter 구현
- [v] `03-myReduce.js` - Array.prototype.reduce 구현
- [v] `04-myForEach.js` - Array.prototype.forEach 구현

**핵심 포인트:**

- `this`로 배열 접근
- callback에 (element, index, array) 전달
- 원본 배열 변경 X

---

## Day 2: 함수 유틸리티

- [ ] `01-myCall.js` - Function.prototype.call 구현
- [ ] `02-myApply.js` - Function.prototype.apply 구현
- [ ] `03-myBind.js` - Function.prototype.bind 구현
- [ ] `04-curry.js` - 커링 함수 구현
- [ ] `05-memoize.js` - 메모이제이션 구현

**핵심 포인트:**

- `this` 바인딩 원리 이해
- 클로저로 상태 유지
- 재귀적 인자 수집 (curry)

---

## Day 3: Promise

- [ ] `01-promiseAll.js` - Promise.all 구현
- [ ] `02-promiseRace.js` - Promise.race 구현
- [ ] `03-promiseAllSettled.js` - Promise.allSettled 구현
- [ ] `04-retry.js` - 재시도 함수 구현

**핵심 포인트:**

- Promise 생성자 사용법
- 결과 순서 유지 (Promise.all)
- 에러 처리

---

## Day 4: React 커스텀 훅

- [ ] `01-useDebounce.jsx` - 디바운스 훅
- [ ] `02-useFetch.jsx` - 데이터 페칭 훅
- [ ] `03-useLocalStorage.jsx` - 로컬스토리지 훅
- [ ] `04-useToggle.jsx` - 토글 훅

**핵심 포인트:**

- useState, useEffect 조합
- cleanup 함수 (타이머, 구독 해제)
- 의존성 배열

---

## Day 5: 추가 문제 + 복습

- [ ] `01-updateById.js` - 배열에서 id로 객체 수정 (불변성)
- [ ] `02-updateNested.js` - 중첩 객체 값 변경 (불변성)
- [ ] `03-mostFrequentChar.js` - 가장 많이 등장한 문자
- [ ] `04-snakeToCamel.js` - snake_case → camelCase 변환
- [ ] `05-eventLoopQuiz.js` - 이벤트 루프 실행 순서 퀴즈

**핵심 포인트:**

- 불변성 유지 (spread, map 활용)
- 문자열 조작 (정규식, split/join)
- 이벤트 루프 (동기 → 마이크로태스크 → 매크로태스크)

---

---

## TypeScript 기초 (ts-basics)

- [ ] `01-generic-function.ts` - 제네릭 함수 타입 작성
- [ ] `02-utility-types.ts` - Partial, Pick, Omit 등 직접 구현
- [ ] `03-type-guard.ts` - 타입 가드 구현 (is 키워드)
- [ ] `04-interface-vs-type.ts` - interface와 type 차이
- [ ] `05-practical-types.ts` - 실무 타입 패턴

**핵심 포인트:**

- 제네릭 `<T>` 문법
- Mapped Types (`[K in keyof T]`)
- Conditional Types (`T extends U ? X : Y`)
- `infer` 키워드

---

## DOM 조작 (dom-basics)

- [ ] `01-event-delegation.js` - 이벤트 위임 구현
- [ ] `02-dom-manipulation.js` - DOM CRUD 조작
- [ ] `03-form-handling.js` - 폼 처리 및 유효성 검사
- [ ] `04-custom-modal.js` - 모달 컴포넌트 구현
- [ ] `05-infinite-scroll.js` - 무한 스크롤 (Intersection Observer)

**핵심 포인트:**

- 이벤트 버블링/캡처링
- `createElement`, `appendChild`, `querySelector`
- `classList`, `dataset`
- `IntersectionObserver` API

---

## 정답 참고 (before 폴더)

| 문제             | 정답 파일              |
| ---------------- | ---------------------- |
| debounce         | `before/1-2.js`        |
| throttle         | `before/throttle.js`   |
| once             | `before/once.js`       |
| deepcopy         | `before/deepcopy.js`   |
| flatten          | `before/flatten.js`    |
| 이벤트 루프      | `before/async.js`      |
| 데이터 필터/정렬 | `before/p1.js ~ p3.js` |

---

## 실행 방법

```bash
# 개별 파일 실행
node practice/day1-array/01-myMap.js

# React 파일은 프로젝트에서 import하여 테스트
```

## 팁

1. 먼저 빈 함수 상태로 테스트 돌려보기
2. 시간 재면서 풀기 (목표: 15-20분)
3. 막히면 힌트 보지 말고 10분 더 고민
4. 풀고 나서 before 폴더 코드와 비교
