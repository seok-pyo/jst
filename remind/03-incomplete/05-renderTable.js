/**
 * 미완성 문제: 테이블 동적 생성
 * 난이도: ★★☆
 */

const users = [
  { id: 1, name: "철수", email: "cs@example.com" },
  { id: 2, name: "영희", email: "yh@example.com" },
  { id: 3, name: "민수", email: "ms@example.com" },
];

function renderTable(container, data, columns) {
  // 구현하세요
  // columns: ['id', 'name', 'email'] 형태의 배열
  // thead와 tbody 구분
}

/*
 * 결과 예시:
 * <table>
 *   <thead>
 *     <tr><th>id</th><th>name</th><th>email</th></tr>
 *   </thead>
 *   <tbody>
 *     <tr><td>1</td><td>철수</td><td>cs@example.com</td></tr>
 *     <tr><td>2</td><td>영희</td><td>yh@example.com</td></tr>
 *     <tr><td>3</td><td>민수</td><td>ms@example.com</td></tr>
 *   </tbody>
 * </table>
 */

// 사용 예시
// renderTable(document.getElementById('app'), users, ['id', 'name', 'email']);

// 보너스: 정렬 기능 추가
// 헤더 클릭 시 해당 컬럼으로 정렬
