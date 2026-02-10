/**
 * 미완성 문제: kebab-case 변환
 * 난이도: ★★☆
 *
 * 보너스 문제 (snakeToCamel 응용)
 */

function kebabToCamel(str) {
  // 구현하세요
  // "hello-world" → "helloWorld"
}

function camelToKebab(str) {
  // 구현하세요
  // "helloWorld" → "hello-world"
}

// 테스트: kebabToCamel
console.log(kebabToCamel("hello-world")); // "helloWorld"
console.log(kebabToCamel("get-user-by-id")); // "getUserById"
console.log(kebabToCamel("--hello--world--")); // "helloWorld"
console.log(kebabToCamel("already")); // "already"

// 테스트: camelToKebab
console.log(camelToKebab("helloWorld")); // "hello-world"
console.log(camelToKebab("getUserById")); // "get-user-by-id"
console.log(camelToKebab("XMLHttpRequest")); // "xml-http-request"

// 보너스: CSS 속성 변환
// JavaScript: backgroundColor → CSS: background-color
function cssPropertyToJS(cssProperty) {
  // 구현하세요
}

function jsToCSSProperty(jsProperty) {
  // 구현하세요
}

console.log(cssPropertyToJS("background-color")); // "backgroundColor"
console.log(jsToCSSProperty("backgroundColor")); // "background-color"
