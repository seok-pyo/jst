/**
 * 문제: curry 함수 구현하기
 *
 * 요구사항:
 * - 다중 인자 함수를 단일 인자 함수 체인으로 변환
 * - 모든 인자가 모이면 원래 함수 실행
 * - 인자를 한 번에 여러 개 전달해도 동작
 */

function curry(fn) {
  // 여기에 구현

  function curried(coll) {
    return function (...collected) {
      const all = [...coll, ...collected];
      if (all.length >= fn.length) {
        return fn(...all);
      }
      return curried(all);
    };
  }

  return curried([]);
}

// 테스트
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6
console.log(curriedAdd(1, 2, 3)); // 6

// 실용 예시
function formatDate(year, month, day) {
  return `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
}

const curriedFormat = curry(formatDate);
const format2024 = curriedFormat(2024);
const formatJan2024 = format2024(1);

console.log(formatJan2024(15)); // "2024-01-15"
console.log(format2024(12, 25)); // "2024-12-25"
