const fs = require("fs");

const input = fs
  .readFileSync("day-11/input.txt", "utf8")
  .split("\n")
  .map((line) => line.split("").map(Number));

const neighbours = ([i, j], a) =>
  [
    [i - 1, j],
    [i + 1, j],
    [i, j - 1],
    [i, j + 1],
    [i - 1, j - 1],
    [i - 1, j + 1],
    [i + 1, j + 1],
    [i + 1, j - 1],
  ].filter(([i, j]) => a[i]?.[j] != undefined);

const coords = (grid) => grid.map((l, i) => l.map((n, j) => [i, j])).flat();

const search = (i, j, list) =>
  list.filter(([x, y]) => i === x && j === y).length > 0;

const step = (arr, iterations, count = 1, total = 0) => {
  let flashed: any = [];
  arr = arr.map((l) => [...l].map((n) => n + 1));
  const toFlash = coords(arr).filter(([i, j]) => arr[i][j] > 9);
  while (toFlash.length > 0) {
    var [i, j] = toFlash.pop();
    flashed.push([i, j]);
    neighbours([i, j], arr).forEach(([i, j]) => {
      arr[i][j] += 1;
      if (arr[i][j] > 9 && !search(i, j, flashed.concat(toFlash)))
        toFlash.push([i, j]);
    });
  }
  flashed.forEach(([i, j]) => {
    arr[i][j] = 0;
    total += 1;
  });
  if (arr.flat().reduce((a, b) => a + b) === 0) return count;
  return count === iterations ? total : step(arr, iterations, count + 1, total);
};

console.log(step(input, 100));

export {};
