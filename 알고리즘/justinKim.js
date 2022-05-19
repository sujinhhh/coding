const symOfTwo = (arr1, arr2) => {
  const output = [];

  for (const el of arr1) {
    el;
    if (!output.includes(el) && !arr2.includes(el)) {
      output.push(el);
    }
    for (const el of arr2) {
      el;
      if (!output.includes(el) && !arr1.includes(el)) {
        output.push(el);
      }
    }
    return output;
  }
};
function sym(args) {
  const arrofArray = [...arguments];
  let output = arrofArray[0];
  for (let i = 1; i < arrofArray.length; i++) {
    output = symOfTwo(output, arrofArray[i]);
  }
  console.log(output);
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
