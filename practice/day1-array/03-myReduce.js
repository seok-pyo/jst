/**
 * 문제: Array.prototype.reduce 직접 구현하기
 *
 * 요구사항:
 * - callback은 (accumulator, currentValue, index, array) 4개 인자를 받음
 * - initialValue가 있으면 acc 초기값으로 사용, 없으면 첫 번째 요소 사용
 * - initialValue가 없으면 index 1부터 시작
 */

Array.prototype.myReduce = function (callback, initialValue) {
  // 여기에 구현

  // let result = initialValue ? initialValue : 0; -> 로직이 잘못됨.

  // console.log(typeof arguments);
  let result;
  let idx = 0;

  if (arguments.length >= 2) {
    result = initialValue;
  } else {
    result = this[0];
    idx = 1;
  }

  for (let i = idx; i < this.length; i++) {
    result = callback(result, this[i], i, this); // 4번째 요소인 array는 뭐지? 자기 자신을 말하는 건가?
  }

  return result;
};

// 테스트
const arr = [1, 2, 3, 4, 5];

console.log(arr.myReduce((acc, cur) => acc + cur, 0)); // 15
console.log(arr.myReduce((acc, cur) => acc + cur)); // 15 (initialValue 없음)
console.log(arr.myReduce((acc, cur) => acc * cur, 1)); // 120

// 응용: 배열을 객체로 변환
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
console.log(
  fruits.myReduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
  }, {})
); // { apple: 3, banana: 2, orange: 1 }
