const fs = require("fs");

const data = fs
  .readFileSync("day-02/input.txt", "utf8")
  .split("\n")
  .map((item) => {
    const [direction, distance] = item.split(" ");
    return { direction, distance: parseInt(distance) };
  })
  .reduce(
    (acc, item) => {
      if (item.direction === "forward") {
        return { ...acc, x: acc.x + item.distance };
      }

      if (item.direction === "up") {
        return { ...acc, y: acc.y - item.distance };
      }

      if (item.direction === "down") {
        return { ...acc, y: acc.y + item.distance };
      }

      return acc;
    },
    { x: 0, y: 0 }
  );

console.log(data.x * data.y);

export {};
