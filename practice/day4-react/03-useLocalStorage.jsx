/**
 * 문제: useLocalStorage 커스텀 훅 구현하기
 *
 * 요구사항:
 * - useState처럼 동작하되, localStorage에 자동 저장
 * - 초기값은 localStorage에 저장된 값 또는 initialValue
 * - JSON 직렬화/역직렬화 처리
 * - SSR 환경 대응 (window 체크)
 */

import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  // 여기에 구현
  // return [storedValue, setValue];
}

// 사용 예시
function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      현재 테마: {theme}
    </button>
  );
}

function TodoApp() {
  const [todos, setTodos] = useLocalStorage("todos", []);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };

  return (
    <div>
      <button onClick={() => addTodo("새 할일")}>할일 추가</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export { useLocalStorage, ThemeToggle, TodoApp };
