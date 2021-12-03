const fs = require("fs");

const input = fs.readFileSync("day-03/input.txt", "utf8").split("\n");

let breakdown = {
  "0": { "0": 0, "1": 0 },
  "1": { "0": 0, "1": 0 },
  "2": { "0": 0, "1": 0 },
  "3": { "0": 0, "1": 0 },
  "4": { "0": 0, "1": 0 },
  "5": { "0": 0, "1": 0 },
  "6": { "0": 0, "1": 0 },
  "7": { "0": 0, "1": 0 },
  "8": { "0": 0, "1": 0 },
  "9": { "0": 0, "1": 0 },
  "10": { "0": 0, "1": 0 },
  "11": { "0": 0, "1": 0 },
};

input.forEach((item) => {
  const digits = item.split("");

  digits.forEach((digit, index) => {
    breakdown[index] = {
      ...breakdown[index],
      [digit]: breakdown[index][digit] + 1,
    };
  });
});

let processed = "";

Object.keys(breakdown).forEach((key) => {
  if (breakdown[key]["0"] > breakdown[key]["1"]) {
    processed += "0";
  } else {
    processed += "1";
  }
});

const gamma = parseInt(processed, 2);

processed = "";
Object.keys(breakdown).forEach((key) => {
  if (breakdown[key]["0"] > breakdown[key]["1"]) {
    processed += "1";
  } else {
    processed += "0";
  }
});

const epsilon = parseInt(processed, 2);

console.log(gamma * epsilon);

export {};
