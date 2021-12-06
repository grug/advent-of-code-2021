const fs = require("fs");

const input = fs
  .readFileSync("day-06/input.txt", "utf8")
  .split(",")
  .map(Number);

const init = [...Array(9)].map((_, i) => input.filter((x) => x === i).length);

const step = (state) => {
  const births = state.shift();

  state.push(births);
  state[6] += births;

  return state;
};

const solve = (numDays) =>
  [...(Array(numDays).keys() as any)]
    .reduce(step, init)
    .reduce((a, b) => a + b, 0);

console.log(solve(256));

export {};
