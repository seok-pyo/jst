/**
 * 복습 문제: snake_case ↔ camelCase 변환
 * 난이도: ★★☆
 */

function snakeToCamel(str) {
  // 구현하세요
}

function camelToSnake(str) {
  // 구현하세요
}

// 테스트: snakeToCamel
console.log(snakeToCamel("hello_world")); // "helloWorld"
console.log(snakeToCamel("get_user_by_id")); // "getUserById"
console.log(snakeToCamel("__hello__world__")); // "helloWorld"
console.log(snakeToCamel("already")); // "already"

// 테스트: camelToSnake
console.log(camelToSnake("helloWorld")); // "hello_world"
console.log(camelToSnake("getUserById")); // "get_user_by_id"
console.log(camelToSnake("XMLHttpRequest")); // "xml_http_request"
