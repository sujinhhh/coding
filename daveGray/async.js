// const users = fetch("https://jsonplaceholder.typicode.com/users/")
//   .then((reponse) => reponse.json())

//   .then(
//     (data) =>
//       (document.querySelector("#view").innerHTML = data.forEach((data) => data))
//   );

// console.log("ㅗㅗ");

// document.querySelector("#view").innerHTML = `${console.log("document")}`;

const myAsync = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data = await response.json();
  console.log(data);
  return data;
};

const anotherFunc = async () => {
  const data = await myAsync();
  console.log(data);
};
