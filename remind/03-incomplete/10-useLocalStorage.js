/**
 * 미완성 문제: useLocalStorage 커스텀 훅
 * 난이도: ★★☆
 */

// React 없이 로직만 구현
function useLocalStorage(key, initialValue) {
  // 구현하세요
  // 반환: [storedValue, setStoredValue]
}

// 의사 코드 (React 버전)
/*
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
*/

// 사용 예시
/*
function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [user, setUser] = useLocalStorage('user', null);

  return (
    <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
      Toggle Theme: {theme}
    </button>
  );
}
*/
