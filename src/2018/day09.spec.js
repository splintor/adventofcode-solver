const { part1, part2 } = require('./day09');
const readInput = require('../utils/read-input');

const input = readInput(__filename);

describe('day09 2018', () => {
  describe('part1', () => {
    it('should work for part 1 examples', () => {
      expect(part1('9 players; last marble is worth 25')).toEqual(32);
      expect(part1('10 players; last marble is worth 1618')).toEqual(8317);
      expect(part1('13 players; last marble is worth 7999 points')).toEqual(
        146373,
      );
      expect(part1('17 players; last marble is worth 1104 points')).toEqual(
        2764,
      );
      expect(part1('21 players; last marble is worth 6111 points')).toEqual(
        54718,
      );
      expect(part1('30 players; last marble is worth 5807 points')).toEqual(
        37305,
      );
    });

    it('should work for part 1 input', () => {
      expect(part1(input)).toEqual(439089);
    });
  });

  describe('part2', () => {
    it('should work for part 2 examples', () => {
      // expect(part2('1')).toEqual(0);
    });

    it('should work for part 2 input', () => {
      expect(part2(input)).toEqual(3668541094);
    });
  });
});
