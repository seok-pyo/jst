/**
 * 미완성 문제: useFetch 커스텀 훅
 * 난이도: ★★★
 */

// React 없이 로직만 구현
function useFetch(url) {
  // 구현하세요
  // 반환: { data, loading, error }
}

// 의사 코드 (React 버전)
/*
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    setError(null);

    fetch(url, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error('HTTP error');
        return res.json();
      })
      .then(setData)
      .catch(err => {
        if (err.name !== 'AbortError') {
          setError(err);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}
*/

// 사용 예시
/*
function UserProfile({ userId }) {
  const { data, loading, error } = useFetch(`/api/users/${userId}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>{data.name}</div>;
}
*/

// 질문: AbortController는 왜 필요한가요?
// 답:
