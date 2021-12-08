const fs = require("fs");

const input = fs
  .readFileSync("day-08/input.txt", "utf8")
  .trim()
  .split("\n")
  .map((l) => l.split(" | ").map((s) => s.split(" ")))
  .map((part) => part.map((xs) => xs.map((s) => [...s].sort().join(""))));

const subset = (big, sml, overlap = sml.length) =>
  [...sml].filter((c) => [...big].includes(c)).length == overlap;

const part2 = input
  .map(([signal, out]) => {
    const map = new Map();
    map.set(
      1,
      signal.find((s) => s.length == 2)
    );
    map.set(
      7,
      signal.find((s) => s.length == 3)
    );
    map.set(
      4,
      signal.find((s) => s.length == 4)
    );
    map.set(
      8,
      signal.find((s) => s.length == 7)
    );
    map.set(
      3,
      signal.find((s) => s.length == 5 && subset(s, map.get(1)))
    );
    map.set(
      6,
      signal.find((s) => s.length == 6 && !subset(s, map.get(1)))
    );
    map.set(
      2,
      signal.find((s) => s.length == 5 && subset(s, map.get(4), 2))
    );
    map.set(
      9,
      signal.find((s) => s.length == 6 && subset(s, map.get(4)))
    );
    map.set(
      5,
      signal.find((s) => s.length == 5 && ![...map.values()].includes(s))
    );
    map.set(
      0,
      signal.find((s) => s.length == 6 && ![...map.values()].includes(s))
    );
    return Number(
      out.map((s) => [...map.entries()].find(([k, v]) => v == s)![0]).join("")
    );
  })
  .reduce((a, b) => a + b);

console.log(part2);

export {};
