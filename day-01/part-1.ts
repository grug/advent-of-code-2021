const fs = require("fs");

const answer = fs
  .readFileSync("day-01/input.txt", "utf8")
  .split("\n")
  .map(Number)
  .reduce((acc, curr, idx, arr) => (curr > arr[idx - 1] ? acc + 1 : acc), 0);

console.log(answer);

export {};
