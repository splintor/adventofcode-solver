'use strict';

function init(width, height) {
  return new Array(height).fill().map(() => new Array(width).fill(false));
}

function rect(state, x, y) {
  for (let j = 0; j < y; j++) {
    for (let i = 0; i < x; i++) {
      state[j][i] = true;
    }
  }
  return state;
}

function rotateRow(state, x, y) {
  const moved = state[y].splice(-x, x);
  state[y] = moved.concat(state[y]);
  return state;
}

function flip(state) {
  return state[0].map((x, i) => state.map(row => row[i]));
}

function rotateColumn(state, x, y) {
  return flip(rotateRow(flip(state), y, x));
}

function flatten(screen) {
  return screen.reduce((all, row) => all.concat(row), []);
}

function parseCommand(command) {
  if (command.startsWith('rect')) {
    const [, x, y] = command.match(/^rect (\d+)x(\d+)$/);
    return state => rect(state, parseInt(x, 10), parseInt(y, 10));
  } else if (command.startsWith('rotate row')) {
    const [, y, x] = command.match(/^rotate row y=(\d+) by (\d+)$/);
    return state => rotateRow(state, parseInt(x, 10), parseInt(y, 10));
  } else if (command.startsWith('rotate column')) {
    const [, x, y] = command.match(/^rotate column x=(\d+) by (\d+)$/);
    return state => rotateColumn(state, parseInt(x, 10), parseInt(y, 10));
  }
}

function day(input, width = 50, height = 6) {
  const screen = init(width, height);
  const final = input.split('\n').map(parseCommand).reduce((state, fn) => fn(state), screen);
  const part1 = flatten(final).filter(x => x).length;
  const part2 = `\n${final.map(row => row.map(x => x ? '#' : '.').join('')).join('\n')}`;
  return [part1, part2];
}

module.exports = day;