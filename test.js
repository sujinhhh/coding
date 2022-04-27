const date1 = new Date("June 16, 2021");
const date2 = new Date("July 14, 2021");

const getDays = (date1, date2) =>
  Math.round(Math.abs(date2 - date1) / (1000 * 3600 * 24));

console.log(getDays(date1, date2));
