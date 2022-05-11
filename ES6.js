// Destructuring assignment

const student = {
  name: "sujin",
  level: 1,
};

// const name = 'haha'
// const level =100

// const sujin = {
//     name,
//     level
// }

student.name = "hahaa";
const { name, level } = student;
console.log(name, level);

// 다른 이름으로 선언

const { name: me, level: developer } = student;

// Array 에서도 가능

const speak = ["practice", "watch"];

const [first, second] = speak;
console.log(first, second);

// spread sytacx

{
  const obj1 = { key: "hh" };
  const obj2 = { key: "ss" };
  const arr = [obj1, obj2];
  console.log([...arr, { key: "xxx" }]);
}

// default parameters
{
  function printMessage(message = "default message") {
    console.log(message);
  }
  printMessage();
}

// ES11 ======================================================

{
  // optional chaining
  const person1 = {
    name: "sujin",
    job: {
      title: "developer",
      manager: {
        name: "lee",
      },
    },
  };
  const person2 = {
    name: "Bob",
  };

  function printManager(person) {
    console.log(person.job?.manager?.name);
  }
  printManager(person2);
}

// Nullish coalescing Operator
// false  : '', 0, null, undefined
{
  const name = "sujin";
  const userName = name || "Guest";
  //  앞이 true 면 앞에거 출력, 거짓이면 뒤에거 출력 // 버그날 가능성 많아짐
  //  그래서 이 밑에거를 써야 할 때가 있음
  const num = "";
  const nullish = num ?? "undefined";
  // 값이 있을 때는 ?? 앞에 있는 것을 쓰고 없을 때만 undefined
  console.log(nullish);
  console.log(userName);
}
