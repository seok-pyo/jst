// JSON
// const a = {
//   x: 1,
//   y: {
//     z: 2,
//     f: () => 3,
//   },
// };

// console.log(JSON.stringify(a));
// console.log(JSON.parse(JSON.stringify(a)));
// const b = JSON.parse(JSON.stringify(a));

// console.log(b.y.f);

// slice
// const a = [{ x: 1 }, { x: 2 }];

// const b = a.slice();
// b[0].x = 100;

// console.log(a[0].x);

// deepcopy
function deepCopy(ori) {
  // Null 처리 추가.
  if (ori === null) return null;

  let resultObj = {};
  let resultArr = [];

  if (Array.isArray(ori)) {
    for (const e of ori) {
      // if (Array.isArray(e)) {
      //   resultArr.push(deepCopy(e));
      // } else {
      //   resultArr.push(e);
      // }
      resultArr.push(deepCopy(e));
    }
    // return resultArr; // 여기서 호출해도 아래에서 호출한 것과 동일.
  } else if (typeof ori === "object") {
    for (const key of Object.keys(ori)) {
      resultObj[key] = deepCopy(ori[key]);
    }
    // return resultObj; //
  } else {
    const copy = ori;
    return copy;
  }

  if (Array.isArray(ori)) return resultArr;
  if (typeof ori === "object") return resultObj;
}

const origin = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4],
  },
};
// const origin = [1, [2, 3]];
const copy = deepCopy(origin);
console.log(copy);
console.log(origin === copy);

copy.b.c = 99;

console.log(origin.b.c); // 2가 나와야 함
