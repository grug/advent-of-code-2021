const fs = require("fs");

const input = fs
  .readFileSync("day-03/test.txt", "utf8")
  .split("\n")
  .reduce((acc, curr) => [...acc, curr.split("").map(Number)], []);

const transpose = (matrix: number[][]) =>
  matrix[0].map((_, i) => matrix.map((row) => row[i]));

const processed = transpose(input).map((row) =>
  row.filter((num) => num === 1).length > input.length / 2 ? 1 : 0
);

const gamma = parseInt(processed.join(""), 2);
const epsilon = parseInt(processed.map((i) => (i === 1 ? 0 : 1)).join(""), 2);

console.log(gamma * epsilon);

export {};
