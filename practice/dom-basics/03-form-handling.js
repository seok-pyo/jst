/**
 * 문제 3: 폼 처리 (Form Handling)
 *
 * 요구사항:
 * - 폼 데이터 수집
 * - 유효성 검사
 * - 제출 처리
 */

// ========== 문제 3-1: 폼 데이터 수집 ==========

/*
<form id="userForm">
  <input name="username" type="text" />
  <input name="email" type="email" />
  <input name="age" type="number" />
  <select name="country">
    <option value="kr">한국</option>
    <option value="us">미국</option>
  </select>
  <input name="newsletter" type="checkbox" />
  <button type="submit">제출</button>
</form>
*/

function getFormData(formSelector) {
  // 여기에 구현
  // - 폼의 모든 입력값을 객체로 반환
  // - { username: '철수', email: 'test@test.com', ... }
}

// FormData API 사용 버전
function getFormDataModern(formSelector) {
  // 여기에 구현
  // - new FormData(form) 사용
  // - Object.fromEntries() 활용
}

// ========== 문제 3-2: 유효성 검사 ==========

const validationRules = {
  username: {
    required: true,
    minLength: 2,
    maxLength: 20,
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  age: {
    required: true,
    min: 0,
    max: 150,
  },
};

function validateForm(data, rules) {
  // 여기에 구현
  // - 각 필드별로 규칙 검사
  // - 에러가 있으면 { field: errorMessage } 형태로 반환
  // - 에러가 없으면 null 반환

  /*
   * 반환 예시:
   * {
   *   username: '최소 2자 이상 입력하세요',
   *   email: '올바른 이메일 형식이 아닙니다'
   * }
   */
}

// ========== 문제 3-3: 에러 메시지 표시 ==========

function showErrors(formSelector, errors) {
  // 여기에 구현
  // - 각 입력 필드 옆에 에러 메시지 표시
  // - 에러가 있는 필드에 'error' 클래스 추가
  // - 기존 에러 메시지 제거 후 새로 표시
}

function clearErrors(formSelector) {
  // 여기에 구현
  // - 모든 에러 메시지 제거
  // - 'error' 클래스 제거
}

// ========== 문제 3-4: 폼 제출 처리 ==========

function setupForm(formSelector, onSubmit) {
  // 여기에 구현
  // - submit 이벤트 처리
  // - 기본 동작 방지 (e.preventDefault())
  // - 유효성 검사 후 onSubmit 콜백 호출

  /*
   * 사용 예시:
   * setupForm('#userForm', async (data) => {
   *   const response = await fetch('/api/users', {
   *     method: 'POST',
   *     body: JSON.stringify(data)
   *   });
   *   // ...
   * });
   */
}

// ========== 문제 3-5: 실시간 유효성 검사 ==========

function setupRealtimeValidation(formSelector, rules) {
  // 여기에 구현
  // - 각 입력 필드에 blur 또는 input 이벤트 등록
  // - 입력할 때마다 해당 필드만 검사
  // - 즉시 에러 메시지 표시/제거
}

// ========== 테스트용 HTML ==========
const testHTML = `
<!DOCTYPE html>
<html>
<head>
  <style>
    .error { border-color: red; }
    .error-message { color: red; font-size: 12px; }
  </style>
</head>
<body>
  <form id="userForm">
    <div>
      <label>Username:</label>
      <input name="username" type="text" />
    </div>
    <div>
      <label>Email:</label>
      <input name="email" type="email" />
    </div>
    <div>
      <label>Age:</label>
      <input name="age" type="number" />
    </div>
    <button type="submit">제출</button>
  </form>

  <script src="03-form-handling.js"></script>
</body>
</html>
`;
