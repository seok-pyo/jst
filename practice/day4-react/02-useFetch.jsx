/**
 * 문제: useFetch 커스텀 훅 구현하기
 *
 * 요구사항:
 * - url이 변경되면 자동으로 fetch 실행
 * - loading, error, data 상태 관리
 * - cleanup으로 race condition 방지
 * - (보너스) refetch 함수 제공
 */

import { useState, useEffect } from "react";

function useFetch(url) {
  // 여기에 구현
  // return { data, loading, error, refetch };
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const refetch = () => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((rej) => {
        setError(rej);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    refetch();
  }, [url]);

  return { data, loading, error, refetch };
}

// 사용 예시
function UserProfile({ userId }) {
  const { data, loading, error, refetch } = useFetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러: {error.message}</div>;

  return (
    <div>
      <h1>{data?.name}</h1>
      <p>{data?.email}</p>
      <button onClick={refetch}>새로고침</button>
    </div>
  );
}

export { useFetch, UserProfile };
