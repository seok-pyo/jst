// function debounce<T extends (...args: any[]) => void>(
//   fn: T,
//   delay: number
// ): (...args: Parameters<T>) => void;

// function debounce(
//   fn: (...args: any[]) => void,
//   delay: number
// ): (...args: () => void) => void; // X 함수들의 배열

// function debounce(
//   fn: (...args: any[]) => void, // args는 인자들의 배열 ?
//   delay: number
// ): (...args: any[]) => void;

// const log = (msg: string, count: number) => console.log(msg, count);

// const debounce1 = debounceGeneric(log, 300);
// debounce1("hi", 5);
// debounce1(123);

// const debounce2 = debounceAny(log, 300);
// debounce2("hi", 300);

// function debounce<T extends (...args: any[]) => void>(fn: T, delay: number) {
//   let timer: ReturnType<typeof setTimeout>;

//   return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
//     // while (timer < delay) {
//     //   clearTimeout(timer);
//     // }

//     // timer = setTimeout(fn, delay);
//     if (timer) {
//       clearTimeout(timer);
//     }

//     timer = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// }

function debounce2<T extends (...args: any[]) => void>(fn: T, delay: number) {
  let timer: number | null;
  timer = null;

  return function (this: Object, ...args: Parameters<T>) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
