function sum(a) {
  let result = a;

  function inner(b) {
    if (b === undefined) {
      return result;
    }
    result += b;
    return inner; // 자바스크립트에서 인자없이 함수명으로 전달할 수 있다.
  }

  return inner;
}

console.log(sum(1)(2)(3)());
console.log(sum(10)(20)());
console.log(sum(1)(2)(3)(4)(5)());
