function solve(maze, mutate) {
  let current = 0;
  let steps = 0;
  while (maze[current] !== undefined) {
    const prev = maze[current];
    maze[current] = mutate(maze[current]);
    current += prev;
    steps++;
  }
  return steps;
}

function parse(input) {
  return input.split('\n').map(x => parseInt(x, 10));
}

const part1 = input => solve(parse(input), x => x + 1);
const part2 = input => solve(parse(input), x => (x >= 3 ? x - 1 : x + 1));

module.exports = { part1, part2 };
