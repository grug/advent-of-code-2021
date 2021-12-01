const fs = require("fs");

const answer = fs
  .readFileSync("day-01/input.txt", "utf8")
  .split("\n")
  .map(Number)
  .reduce(
    (acc, curr, index, arr) =>
      index + 3 > arr.length ? acc : [...acc, arr.slice(index, index + 3)],
    []
  )
  .map((item) => item.reduce((acc, curr) => acc + curr, 0))
  .reduce(
    (acc, curr, idx, arr) =>
      idx + 1 < arr.length ? (curr < arr[idx + 1] ? acc + 1 : acc) : acc,
    0
  );

console.log(answer);
