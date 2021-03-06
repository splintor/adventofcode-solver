const { part1, part2 } = require('./day03');
const readInput = require('../utils/read-input');

const input = readInput(__filename);

describe('day03 2015', () => {
  describe('part1', () => {
    it('should work for part 1 examples', () => {
      expect(part1('>')).toEqual(2);
      expect(part1('^>v<')).toEqual(4);
      expect(part1('^v^v^v^v^v')).toEqual(2);
    });

    it('should work for part 1 input', () => {
      expect(part1(input)).toEqual(2592);
    });
  });

  describe('part2', () => {
    it('should work for part 2 examples', () => {
      expect(part2('^v')).toEqual(3);
      expect(part2('^>v<')).toEqual(3);
      expect(part2('^v^v^v^v^v')).toEqual(11);
    });

    it('should work for part 2 input', () => {
      expect(part2(input)).toEqual(2360);
    });
  });
});
