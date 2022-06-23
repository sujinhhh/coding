// reverse

const reverse = (str) => {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    char;
    res = char + res;
  }
  console.log(res);
};
reverse("hello");

// reverse2

const reverse = (str) => {
  return str.split("").reduce((total, curr) => {
    total = curr + total;
    return total;
  }, "");
};

console.log(reverse("hello"));
