// const example = async () => {
//   const greeting = await "hello";
//   return greeting;
// };

// const dohe = async () => {
//   console.log(await example());
// };
// dohe();

const users = [
  { id: 1, name: "john" },
  { id: 2, name: "sujin" },
  { id: 3, name: "mery" },
];

const articles = [
  { userId: 1, articles: ["one", "two", "three"] },
  { userId: 1, articles: ["four", "five"] },
  { userId: 1, articles: ["six", "seven", "eight", "nine"] },
];

console.log(getUser("sujin"));
async function getUser(name) {
  const response = await users.find((user) => user.name === name);
  console.log(response);
}
