const fs = require("fs");
const input = fs
  .readFileSync("day-07/input.txt", "utf8")
  .split(",")
  .map(Number);

function findCheapest(arr) {
  let cheapest = 0;
  let cheapestDiff = Infinity;
  for (let i = 0; i < arr.length; i++) {
    let diff = 0;
    for (let j = 0; j < arr.length; j++) {
      diff += Math.abs(arr[i] - arr[j]);
    }
    if (diff < cheapestDiff) {
      cheapest = arr[i];
      cheapestDiff = diff;
    }
  }
  return cheapest;
}

const cheapestPosition = findCheapest(input);

const fuelConsumed = input.reduce(
  (acc, curr) => acc + Math.abs(curr - cheapestPosition),
  0
);

console.log(fuelConsumed);

export {};
