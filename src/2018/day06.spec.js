const { part1, part2 } = require('./day06');
const readInput = require('../utils/read-input');

const input = readInput(__filename);

describe('day06 2018', () => {
  describe('part1', () => {
    it('should work for part 1 examples', () => {
      expect(
        part1(['1, 1', '1, 6', '8, 3', '3, 4', '5, 5', '8, 9'].join('\n')),
      ).toEqual(17);
    });

    it('should work for part 1 input', () => {
      expect(part1(input)).toEqual(5975);
    });
  });

  describe('part2', () => {
    it('should work for part 2 examples', () => {
      expect(
        part2(['1, 1', '1, 6', '8, 3', '3, 4', '5, 5', '8, 9'].join('\n'), 32),
      ).toEqual(16);
    });

    it('should work for part 2 input', () => {
      expect(part2(input)).toEqual(38670);
    });
  });
});
