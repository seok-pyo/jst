/**
 * 복습 문제: Function.prototype.apply 구현
 * 난이도: ★★☆
 */

Function.prototype.myApply = function (context, args = []) {
  // 구현하세요
  // 힌트: call과 비슷하지만 인자를 배열로 받음
};

// 테스트
function introduce(age, city) {
  console.log(`${this.name}, ${age}세, ${city}`);
}

const user = { name: "민수" };
introduce.myApply(user, [25, "서울"]); // "민수, 25세, 서울"

// Math.max 같은 경우
console.log(Math.max.myApply(null, [1, 5, 3, 9, 2])); // 9
