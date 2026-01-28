function debounce(fn, delay) {
  let timer = null; // closure로 timer를 유지.
  // !!!! timer는 debounce가 실행될 때 '한 번' 생성된다!

  return (...args) => {
    // let timer = null;
    // 옆처럼 화살표 함수를 쓰면 안됨.
    // 여기서 화살표함수를 쓰면 안되는 이유. 화살표 함수는 항상 상위 스코프를 가르킴.
    // 객체 메서드를 사용할 경우 오류가 발생할 가능성이 있음.
    if (timer) {
      clearTimeout(timer); // 호출될 때마다 이전 호출을 취소.
    }

    timer = setTimeout(() => {
      fn.apply(this, args); // fn을 실행하되, 실행 중인 fn 내부의 this로 설정해라.
    }, delay); // delay 이후에만 실행하도록.
  };
}

const print = () => console.log("YES");

const d = debounce(print, 600);
d();
d();
d();
d();
d();

// 화살표 함수는 상위 스코프의 this로 고정시킨다.
