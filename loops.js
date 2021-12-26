// Fibonacci Sequence
// 0,1,1,2,3,5,8,13,21,

// while ================================================>

// const fibonacci = (num, array = [0, 1]) => {
//   while (num > 2) {
//     const [nextToLast, last] = array.slice(-2);
//     array.push(nextToLast + last);
//     num -= 1;
//   }

//   console.log(array);

//   return array[array.length-1];
// };
// console.log(fibonacci(8));

// Fibonacci with Recursion ================================================>
const fib = (num, arr = [0, 1]) => {
  if (num <= 2) return arr;
  const [first, next] = arr.slice(-2);
  return fib(num - 1, [...arr, first + next]);
};
console.log(fib(8));

// Fibonacci with Recursion ================================================>

const fibo = (pos) => {
  if (pos < 2) return pos;
  return fibo(pos - 1) + fibo(pos - 2);
};
console.log(fibo(6));

// Fibonacci with Recursion ================================================>

const fibos = (pos) => (pos < 2 ? pos : fibos(pos - 1) + fibos(pos - 2));
console.log(fibos(8));
