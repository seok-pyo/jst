/**
 * 부분완성 문제: useDebounce 커스텀 훅
 * 난이도: ★★★
 */

// React 없이 로직만 구현해보세요
// 실제 React 환경에서는 useState, useEffect 사용

function useDebounce(value, delay) {
  // 구현하세요
  // 1. debouncedValue 상태 관리
  // 2. value나 delay가 변경되면 타이머 설정
  // 3. delay 후에 debouncedValue 업데이트
  // 4. cleanup에서 타이머 정리
}

// 의사 코드 (React 버전)
/*
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
*/

// 사용 예시
/*
function SearchComponent() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearch) {
      // API 호출
      fetchResults(debouncedSearch);
    }
  }, [debouncedSearch]);

  return <input onChange={e => setSearch(e.target.value)} />;
}
*/

// 질문: useDebounce와 일반 debounce 함수의 차이점은?
// 답:
