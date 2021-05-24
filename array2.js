function makeUppercase(value) {
  console.log(value.toUpperCase());
}

function makeNumber(value) {
  console.log(value.split(" ").reverse().join(" "));
}

handleName("sujin", (value) => {
  console.log(value);
});

function handleName(name, cb) {
  const fullName = `${name} is programmer`;
  cb(fullName);
}
