function parse(input, fn) {
  const regexp = /^(swap position|swap letter|rotate based|rotate|reverse positions|move position) ([^\s]+)\s.*\s([^\s]+)$/;
  const ops = {
    'swap position': (a, b) => str => {
      [a, b] = [parseInt(a, 10), parseInt(b, 10)].sort((a, b) => a - b);
      const arr = str.match(new RegExp(`^(.{${a}})(.)(.{${b - a - 1}})(.)(.*)$`)).slice(1);
      return [arr[0], arr[3], arr[2], arr[1], arr[4]].join('');
    },
    'swap letter': (a, b) => str => {
      [a, b] = [str.indexOf(a), str.indexOf(b)].sort((a, b) => a - b);
      const arr = str.match(new RegExp(`^(.{${a}})(.)(.{${b - a - 1}})(.)(.*)$`)).slice(1);
      return [arr[0], arr[3], arr[2], arr[1], arr[4]].join('');
    },
    'rotate based': (a, b) => str => {
      b = (str.indexOf(b) + 1 + (str.indexOf(b) >= 4 ? 1 : 0)) % str.length;
      return str.match(new RegExp(`^(.*)(.{${b}})$`)).slice(1).reverse().join('');
    },
    'un rotate based': (a, b) => str => {
      return new Array(str.length).fill().map((x, i) => {
        const rotate = (i + 1 + (i >= 4 ? 1 : 0)) % str.length;
        return str.match(new RegExp(`^(.{${rotate}})(.*)$`)).slice(1).reverse().join('');
      }).filter((x, i) => x.indexOf(b) === i).pop();
    },
    rotate: (a, b) => str => {
      b = parseInt(b, 10) % str.length;
      const regexp = (a === 'left' ? `^(.{${b}})(.*)$` : `^(.*)(.{${b}})$`);
      return str.match(new RegExp(regexp)).slice(1).reverse().join('');
    },
    'reverse positions': (a, b) => str => {
      [a, b] = [parseInt(a, 10), parseInt(b, 10)].sort((a, b) => a - b);
      const arr = str.match(new RegExp(`^(.{${a}})(.)(.{${b - a - 1}})(.)(.*)$`)).slice(1);
      return [arr[0], arr[3], ...arr[2].split('').reverse(), arr[1], arr[4]].join('');
    },
    'move position': (a, b) => str => {
      const arr = str.split('');
      const moved = arr.splice(parseInt(a, 10), 1).pop();
      arr.splice(parseInt(b, 10), 0, moved);
      return arr.join('');
    }
  };
  return input.split('\n').map(x => fn(x.replace(/ (\d+) (steps?)$/, ' $2 $1').match(regexp).slice(1))).map(cmd => ops[cmd[0]](cmd[1], cmd[2]));
}

function undo(x) {
  switch (x[0]) {
    case 'rotate': return [x[0], x[1] === 'left' ? 'right' : 'left', x[2]];
    case 'move position': return [x[0], x[2], x[1]];
    case 'rotate based': return ['un rotate based', x[1], x[2]];
    default: return x;
  }
}

function day(input, password, encoded) {
  const part1 = parse(input, x => x).reduce((x, f) => f(x), password || 'abcdefgh');
  const part2 = parse(input, undo).reverse().reduce((x, f) => f(x), encoded || 'fbgdceah');
  return [part1, part2];
}

module.exports = {day};