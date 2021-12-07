const fs = require("fs");

const input = fs
  .readFileSync("day-07/input.txt", "utf8")
  .split(",")
  .map(Number);

const max = Math.max(...input);

const leastFuel = (fuelSpent: (distance: number) => number) =>
  Array.from({ length: max }, (_, i) => i)
    .map((option) =>
      input
        .map((pos) => Math.abs(pos - option))
        .map(fuelSpent)
        .reduce((sum, x) => sum + x, 0)
    )
    .reduce((best, x) => Math.min(x, best));

console.log(leastFuel((x) => (x * (x + 1)) / 2));

export {};
