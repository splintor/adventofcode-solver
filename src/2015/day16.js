const expect1 = {
  id: () => true,
  children: 3,
  cats: 7,
  samoyeds: 2,
  pomeranians: 3,
  akitas: 0,
  vizslas: 0,
  goldfish: 5,
  trees: 3,
  cars: 2,
  perfumes: 1,
};

const expect2 = {
  ...expect1,
  cats: x => x > expect1.cats,
  trees: x => x > expect1.trees,
  pomeranians: x => x < expect1.pomeranians,
  goldfish: x => x < expect1.goldfish,
};

function parseMap(s, p1, p2) {
  return s
    .split(p1)
    .map(x => x.split(p2))
    .reduce((obj, pair) => ({ ...obj, [pair[0]]: parseInt(pair[1], 10) }), {});
}

function matches(x, expect) {
  return Object.keys(x).every(key => {
    return typeof expect[key] === 'function'
      ? expect[key](x[key])
      : expect[key] === x[key];
  });
}

function parse(input) {
  return input
    .split('\n')
    .map(x => x.match(/^Sue ([^:]*): (.*)/))
    .map(x => [x[1], parseMap(x[2], ', ', ': ')])
    .map(x => ({ id: parseInt(x[0], 10), ...x[1] }));
}

const part1 = input =>
  parse(input)
    .filter(x => matches(x, expect1))
    .map(x => x.id)
    .shift();
const part2 = input =>
  parse(input)
    .filter(x => matches(x, expect2))
    .map(x => x.id)
    .shift();

module.exports = { part1, part2 };
