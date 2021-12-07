const fs = require("fs");

const input = fs
  .readFileSync("day-07/input.txt", "utf8")
  .split(",")
  .map(Number);

const min = Math.min(...input);
const max = Math.max(...input);

const movesPerColumn: number[] = [];
const loops = max - min;

for (let i = 0; i < loops; i++) {
  let moves = 0;
  input.forEach((value) => {
    let currentDistance = Math.abs(value - i);

    const newMoves = (currentDistance * (currentDistance + 1)) / 2;

    moves += newMoves;
  });

  movesPerColumn.push(moves);
}

console.log(Math.min(...movesPerColumn));

export {};
