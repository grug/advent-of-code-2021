const fs = require("fs");

const input = fs.readFileSync("day-04/input.txt", "utf8").split("\n");

const draws = input[0].split(",");

const boards = [...Array((input.length - 1) / 6).keys()]
  .map((i) => input.slice(2 + 6 * i, 7 + 6 * i))
  .map((b) =>
    b.map((l) =>
      l
        .split(/ +/)
        .filter((x) => x)
        .map(Number)
    )
  );

const transpose = (board) => board.map((l, i) => board.map((l) => l[i]));

const win = (board) =>
  board.concat(transpose(board)).some((l) => l.every((i) => i[0] == "*"));

const score = (board, n) =>
  board.flat().reduce((a, b) => (typeof b == "string" ? a : a + b), 0) * n;

const play = (boards, n) =>
  boards.map((b) => b.map((l) => l.map((i) => (i == n ? "*" + i : i))));

const solve = (boards, endgame) => {
  let winners = [];
  for (let i = 0; i < draws.length; i++) {
    boards = play(boards, draws[i]);
    if (boards.find(win)) winners = winners.concat(boards.filter(win));
    boards = boards.filter((b) => !win(b));
    console.log(draws[i], boards.length, winners.length);
    if (winners.length == endgame) return score(winners.pop(), draws[i]);
  }
};

console.log(solve(boards, boards.length));

export {};
