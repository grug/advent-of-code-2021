const fs = require("fs");

const lines = fs.readFileSync("day-08/input.txt", "utf8").split("\n");

const answer = lines.reduce(
  (acc, line) =>
    acc +
    line
      .split("|")[1]
      .split(" ")
      .filter(
        (x) =>
          x.length === 2 || x.length === 4 || x.length === 3 || x.length === 7
      ).length,
  0
);

console.log(answer);

export {};
