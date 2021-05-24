const IsUnique = (str) => {
  let obj = {};
  for (let i of str) {
    !obj[i] ? (obj[i] = 1) : obj[i]++;
  }

  let uniquChar = "";
  for (let i in obj) {
    if (obj[i] === 1) uniquChar += `${i} `;
  }
  console.log(uniquChar);

  console.log(uniquChar ? `true, unique char is ${uniquChar}` : "false");
};

console.log({
  IsUnique: IsUnique("223344"),
});
