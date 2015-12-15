'use strict';

export function day15(input) {
  function add(digits, param, i) {
    i = i || 0;
    if (i < digits.length) {
      let sum = digits[i] + param;
      let pass = Math.floor(sum / 101);
      digits[i] = sum % 101;
      return pass ? add(digits, pass, i + 1) : digits;
    }
  }

  function objMap(obj, fn) {
    return Object.keys(obj).reduce((result, key) => {
      return Object.assign(result, {[key]: fn(obj[key], key)});
    }, {});
  }

  let ingredients = input.split('\n')
                         .map(x => x.match(/^.*: capacity ([-\d]+), durability ([-\d]+), flavor ([-\d]+), texture ([-\d]+), calories ([-\d]+)$/).slice(1))
                         .map(x => ({capacity: x[0], durability: x[1], flavor: x[2], texture: x[3], calories: x[4]}))
                         .map(x => objMap(x, num => parseInt(num, 10)));

  let part1 = 0, part2 = 0;
  let spoons = new Array(ingredients.length).fill(0);
  while (add(spoons, 100)) {
    if (spoons.reduce((prev, x) => prev + x) === 100) {
      let amounts = ingredients.map((x, index) => objMap(x, property => property * spoons[index]));
      let sum = amounts.reduce((prev, x) => objMap(x, (value, key) => prev[key] + value));
      let properties = Object.keys(sum).filter(x => x !== 'calories');
      let result = properties.map(x => Math.max(0, sum[x])).reduce((prev, x) => prev * x);

      part1 = Math.max(part1, result);
      if (sum.calories === 500) {
        part2 = Math.max(part2, result);
      }
    }
  }

  return [part1, part2];
}
