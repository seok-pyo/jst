function once(fn) {
  let flag = true;

  return function () {
    if (flag) {
      flag = false;
      fn();
    }
  };
}

const init = once(() => console.log("HI"));

init();
init();
init();
init();
