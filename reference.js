//1.  첫째자리 마지막 자리 수 같은거 갯수 찾기
const first = [8, 6, 8, 6, 7, 4, 7];

const count = (data) => {
  return data.reduce((total, item, index) => {
    const match = item === data[index + 2] && item !== data[index + 1];
    console.log(match);
    if (match) return total + 1;
    return total;
  }, 0);
};
// refactory
const count = (data) =>
  data.reduce(
    (total, item, index) =>
      total + (item === data[index + 2] && item !== data[index + 1]),
    0
  );

console.log(count(first));
