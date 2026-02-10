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
    // for 문으로 들어왔다는 건 이미 arr라는 뜻. arr 단계, 즉 arr의 모든 원소를 다 돌것이기 때문에,
    // 모든 원소를 순회하면서 arr이든 obj이든, 다른 자료형이든 새로운 배열에 추가해서
    // 그걸 리턴하면 된다. 이 단계에서는 아래의 조건문들은 어짜치 들어가지 않기 때문에
    // 맨 아래에서 하나, 이미 array로 조건문을 통과한 상태에서 새로운 배열을 반환하나 결과는 동일하다.
    // 조건문을 한번더 적을 필요없이, 배열을 확인한 현재 위치의 조건문 안에서
    // 만들어진 새로운 배열을 반환하면 된다.
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
