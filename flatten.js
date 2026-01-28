const da = [1, [2, [3, 4], 5], 6];

// const nda = da.flat(Infinity);

// console.log(nda);

function flat(arr) {
  const newArray = [];

  const dfs = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (!Array.isArray(arr[i])) {
        newArray.push(arr[i]);
      } else {
        dfs(arr[i]);
      }
    }
  };

  dfs(arr);

  return newArray;
}

console.log(flat(da));
