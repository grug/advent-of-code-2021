const fs = require("fs");

const input = fs
  .readFileSync("day-05/input.txt", "utf-8")
  .trim()
  .split("\n")
  .map((pair) => pair.split(/,| -> /).map(Number));

const update = (map, [x, y]) =>
  map.set(x + "," + y, map.get(x + "," + y) + 1 || 1);

const traverse = (map, [x1, y1, x2, y2]) => {
  const [dx, dy] = [Math.sign(x2 - x1), Math.sign(y2 - y1)];
  const n = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1)) + 1;
  return [...Array(n).keys()]
    .map((i) => [x1 + i * dx, y1 + i * dy])
    .reduce(update as any, map);
};

const straight = ([x1, y1, x2, y2]) => x1 === x2 || y1 === y2;

console.log(
  Array.from(input.reduce(traverse, new Map()).values()).filter(
    (x: any) => x > 1
  ).length
);

export {};
