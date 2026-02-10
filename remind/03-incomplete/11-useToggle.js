/**
 * 미완성 문제: useToggle 커스텀 훅
 * 난이도: ★☆☆
 */

// React 없이 로직만 구현
function useToggle(initialValue = false) {
  // 구현하세요
  // 반환: [value, toggle, setValue]
}

// 의사 코드 (React 버전)
/*
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(v => !v);
  }, []);

  return [value, toggle, setValue];
}
*/

// 사용 예시
/*
function Modal() {
  const [isOpen, toggle, setIsOpen] = useToggle(false);

  return (
    <div>
      <button onClick={toggle}>Toggle Modal</button>
      <button onClick={() => setIsOpen(true)}>Open</button>
      <button onClick={() => setIsOpen(false)}>Close</button>

      {isOpen && <div className="modal">Modal Content</div>}
    </div>
  );
}
*/

// 질문: useCallback을 쓰는 이유는?
// 답:
