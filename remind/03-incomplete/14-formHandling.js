/**
 * 미완성 문제: 폼 처리
 * 난이도: ★★☆
 */

// 1. 폼 데이터 수집
function getFormData(formSelector) {
  // 구현하세요
  // FormData 또는 직접 구현
  // 반환: { name: value, ... }
}

// 2. 폼 유효성 검사
function validateForm(formData, rules) {
  // 구현하세요
  // rules: { fieldName: [validator1, validator2, ...] }
  // 반환: { isValid: boolean, errors: { fieldName: string } }
}

// 유효성 검사 함수들
const validators = {
  required: (value) => (value ? null : "필수 입력입니다"),
  email: (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : "이메일 형식이 아닙니다",
  minLength: (min) => (value) =>
    value.length >= min ? null : `최소 ${min}자 이상 입력하세요`,
  maxLength: (max) => (value) =>
    value.length <= max ? null : `최대 ${max}자까지 입력 가능합니다`,
};

// 3. 폼 제출 처리
function handleFormSubmit(formSelector, onSubmit) {
  // 구현하세요
  // - submit 이벤트 가로채기
  // - 데이터 수집
  // - 유효성 검사
  // - onSubmit 콜백 호출
}

// 테스트 HTML
/*
<form id="signup">
  <input name="username" type="text" />
  <input name="email" type="email" />
  <input name="password" type="password" />
  <button type="submit">가입</button>
</form>
*/

// 사용 예시
/*
handleFormSubmit('#signup', async (data) => {
  console.log('제출됨:', data);
  await fetch('/api/signup', {
    method: 'POST',
    body: JSON.stringify(data)
  });
});
*/
