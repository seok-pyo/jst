/**
 * 문제: useDebounce 커스텀 훅 구현하기
 *
 * 요구사항:
 * - value가 변경된 후 delay ms 동안 변경이 없으면 debouncedValue 업데이트
 * - 검색 입력, API 호출 최적화 등에 사용
 * - cleanup 함수로 타이머 정리
 */

import { useState, useEffect } from "react";

function useDebounce(value, delay) {
  // 여기에 구현
  const [de, setDe] = useState(value);

  let timer;
  useEffect(() => {
    timer = setTimeout(() => setDe(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return de;
}

// 사용 예시
function SearchComponent() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      console.log("API 호출:", debouncedQuery);
      // fetch(`/api/search?q=${debouncedQuery}`)
    }
  }, [debouncedQuery]);

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="검색어 입력..."
    />
  );
}

export { useDebounce, SearchComponent };
