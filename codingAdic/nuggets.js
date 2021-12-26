// fetching JSON  ============================================>

async function getProducts() {
  try {
    const result = await fetch("products.json");
    const data = await result.json();
    let products = data.items;
    products = products.map((item) => {
      const { title, price, amount } = item.fields;
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      return { title, price, id, image, amount };
    });
    return products;
  } catch (err) {
    console.error(err);
  }
}

//  유니크 values , array 로 바꾸기

document.addEventListener("DOMContentLoaded", () => {
  const h = document.querySelector(".h");
  getProducts()
    .then((item) => {
      let product = [...new Set(item.map((i) => i.price))];
      const newItem = item.map((i) => i);

      let { totalItems, cartTotal } = newItem.reduce(
        (acc, curr) => {
          const { price, amount } = curr;
          console.log(price);
          acc.totalItems += amount;
          acc.cartTotal += price * amount;
          return acc;
        },
        {
          totalItems: 0,
          cartTotal: 0,
        }
      );
      cartTotal = parseFloat(cartTotal.toFixed(2));
      console.log(totalItems, cartTotal);

      h.innerHTML = product
        .map((price) => {
          return `<button>${price}</button>`;
        })
        .join(" ");
    })
    .catch((err) => console.log(err));
});

// Dyamic Object key ============================================>

// const person = {
//   name: "john",
//   feature: ["item"],
// };

// person.age = 25;

// console.log(person);

// let appState = "loading";
// const keyname = "computer";
// const app = {
//   [appState]: true,
// };

// app[keyname] = "apple";
// console.log(app);

// const state = {
//   loding: true,
//   name: "",
//   job: "",
// };

// function updateState(key, value) {
//   state[key] = value;
// }

// updateState("name", "sujin");

// console.log(state);

// ----------------------------  function 안에 function

const example = (a, b) => (c, d) => (e, f) => a * b * c * e * f;

// 위에거 해석

function example(a, b) {
  return function (c, d) {
    return function (e, f) {
      //  쓸수 있음
      return a * b * c + d * e * f;
    };
  };
}

//  3숫자 앞뒤로 같은 숫자 몇개인지  *******************

const first = [8, 6, 8, 6, 7, 4, 7];
const second = [4, 5, 5, 7, 5, 5, 9];
const third = [3, 3, 2, 8, 7, 6, 5];

const count = (data) => {
  return data.reduce((total, item, index) => {
    let match = item === data[index + 2] && item !== data[index + 1];
    if (match) return total + 1;
    return total;
  }, 0);
};

console.log(count(first));

const count = (data) => {
  return data.reduce(
    (total, item, index) =>
      total + (item === data[index + 2] && item !== data[index + 1]),
    0
  );
};

console.log(count(first));

//  argument 합이 짝수, 홀수 인지

const sum = (num) => {
  const items = [...(num + "")];
  const result = items.reduce((total, item) => {
    console.log(item);

    return total + Number(item);
  }, 0);
  return result % 2 === 0 ? "even" : "odd";
};

console.log(sum(55));

// 위에 간략하게

const sum = (num) =>
  [...number.toStrin()].reduce((total, item) => total + Number(item), 0) % 2 ===
  0
    ? "Even"
    : "Idd";
