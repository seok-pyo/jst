/**
 * 문제: useToggle 커스텀 훅 구현하기
 *
 * 요구사항:
 * - boolean 상태를 토글하는 간단한 훅
 * - toggle() 호출 시 true <-> false 전환
 * - (보너스) setValue로 직접 값 설정 가능
 */

import { useState, useCallback } from "react";

function useToggle(initialValue = false) {
  // 여기에 구현
  // return [value, toggle, setValue];
}

// 사용 예시
function Modal() {
  const [isOpen, toggle, setIsOpen] = useToggle(false);

  return (
    <div>
      <button onClick={toggle}>모달 {isOpen ? "닫기" : "열기"}</button>

      {isOpen && (
        <div className="modal">
          <h2>모달 내용</h2>
          <button onClick={() => setIsOpen(false)}>닫기</button>
        </div>
      )}
    </div>
  );
}

function PasswordInput() {
  const [showPassword, togglePassword] = useToggle(false);

  return (
    <div>
      <input type={showPassword ? "text" : "password"} placeholder="비밀번호" />
      <button onClick={togglePassword}>
        {showPassword ? "숨기기" : "보기"}
      </button>
    </div>
  );
}

export { useToggle, Modal, PasswordInput };
