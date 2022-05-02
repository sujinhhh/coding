function add(...number2) {
  console.log(number2);
  let sum = 0;
  for (let i = 0; i < number2.length; i++) {
    sum += number2[i];
  }
  return sum;
}
console.log("add", add(2));
