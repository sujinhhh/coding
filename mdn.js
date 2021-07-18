const num = [1, 6, 3, 6, 3, 2];

const a = [...new Set(num)];

const text = document.querySelector(".text");

text.innerHTML = a
  .map((i) => {
    return `<h1>${i}</h1>`;
  })
  .join("");
