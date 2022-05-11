{
  function destroyer(arr) {
    let num = [...arguments].slice(1);

    const regex = /[2-3]/g;
    const found = arr.match(regex);

    console.log(found);
    const filteredArr = [];
    for (let i of arr) {
      if (!num.includes(i)) {
        filteredArr.push(i);
      }
    }
    console.log(filteredArr);
  }
  destroyer("1, 2, 3, 1, 2, 3", 2, 3);
}
