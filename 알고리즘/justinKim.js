// Big O  - O(n^3)

{
  function helper(arr1, arr2) {
    let firstArray = [];
    for (const i of arr1) {
      if (!firstArray.includes(i) && !arr2.includes(i)) {
        firstArray.push(i);
      }
    }
    for (const i of arr2) {
      if (!firstArray.includes(i) && !arr1.includes(i)) {
        firstArray.push(i);
      }
    }
    return firstArray;
  }
  function sym(args) {
    const arrays = [...arguments];
    let arrayFisrt = arrays[0];
    for (let i = 1; i < arrays.length; i++) {
      arrayFisrt = helper(arrayFisrt, arrays[i]);
    }
    console.log(arrayFisrt.sort((a, b) => a - b));
  }

  sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
}

// Big O  - O(n^2)

function helper(arr1, arr2) {
  const set1 = [...new Set(arr1)];
  const set2 = [...new Set(arr2)];

  const combined = [...set1, ...set2];
  const output = [];
  const elObj = {};
  for (let el of combined) {
    if (el in elObj) {
      elObj[el]++;
    } else {
      elObj[el] = 1;
    }
  }
  for (let el in elObj) {
    if (elObj[el] === 1) {
      output.push(el);
    }
  }
  console.log(output);
}
function sym(args) {
  const arrays = [...arguments];
  let arrayFisrt = arrays[0];
  for (let i = 1; i < arrays.length; i++) {
    arrayFisrt = helper(arrayFisrt, arrays[i]);
  }
  console.log(arrayFisrt);
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);

{
  function updateInventory(arr1, arr2) {
    const obj1 = arr1.reduce(
      (acc, [quant, item]) => ({
        ...acc,
        [item]: quant,
      }),
      {}
    );
    const obj2 = arr2.reduce(
      (acc, [quant, item]) => ({
        ...acc,
        [item]: quant,
      }),
      {}
    );

    console.log(obj1);

    for (let name in obj2) {
      if (name in obj1) {
        obj1[name] += obj2[name];
        console.log(obj1[name]);
        obj1[name];
      } else {
        obj1[name] = obj2[name];
      }
    }
    console.log(obj1);
    const output = [];
    for (const name in obj1) {
      output.push([obj1[name], name]);
    }
    return output.sort((arr1, arr2) => arr1[1].localeCompare(arr2[1]));
  }
}
