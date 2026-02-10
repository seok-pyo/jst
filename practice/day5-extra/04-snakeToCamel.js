/**
 * 문제: snake_case를 camelCase로 변환하기
 *
 * 요구사항:
 * - 언더스코어(_) 다음 문자를 대문자로
 * - 첫 글자는 소문자 유지
 * - 연속된 언더스코어 처리
 */

function snakeToCamel(str) {
  // 여기에 구현
  return str
    .split("_")
    .filter(Boolean)
    .map((word, i) => {
      return i === 0 ? word : word[0].toUpperCase() + word.slice(1);
    })
    .join("");
}

// 테스트 1: 기본 사용
console.log(snakeToCamel("hello_world")); // "helloWorld"
console.log(snakeToCamel("user_first_name")); // "userFirstName"
console.log(snakeToCamel("get_user_by_id")); // "getUserById"

// 테스트 2: 단일 단어
console.log(snakeToCamel("hello")); // "hello"
console.log(snakeToCamel("HELLO")); // "hello" 또는 "HELLO" (정의에 따라)

// 테스트 3: 연속 언더스코어
console.log(snakeToCamel("hello__world")); // "helloWorld"
console.log(snakeToCamel("__hello_world")); // "helloWorld"

// 테스트 4: 빈 문자열
console.log(snakeToCamel("")); // ""

// 보너스 1: camelCase를 snake_case로
function camelToSnake(str) {
  // 여기에 구현
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === str[i].toUpperCase() &&
      str[i + 1] !== str[i + 1].toUpperCase()
    ) {
      result += `_${str[i].toLowerCase()}`;
      continue;
    }
    result += str[i];
  }
  return result;
}

console.log(camelToSnake("helloWorld")); // "hello_world"
console.log(camelToSnake("getUserById")); // "get_user_by_id"
console.log(camelToSnake("XMLHttpRequest")); // "xml_http_request" 또는 "xmlhttp_request"

// 보너스 2: 객체의 모든 키를 변환
function convertObjectKeys(obj, converter) {
  // 중첩 객체도 재귀적으로 변환
  const result = {};

  for (const item in obj) {
    if (typeof obj[item] === "object") {
      result[convert er(item)] = convertObjectKeys(obj[item], converter);
    } else {
      result[converter(item)] = obj[item];
    }
  }

  return result;
}

const snakeObj = {
  user_name: "철수",
  user_info: {
    first_name: "철수",
    last_name: "김",
  },
};

console.log(convertObjectKeys(snakeObj, snakeToCamel));
// {
//   userName: "철수",
//   userInfo: {
//     firstName: "철수",
//     lastName: "김"
//   }
// }

////

// function camelToSnake(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= "A" && str[i] <= "Z") {
//       if (i > 0) result += "_"; // 첫 글자 아닐 때만
//       result += str[i].toLowerCase();
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
// }
