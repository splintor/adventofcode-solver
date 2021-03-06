const { part1, part2 } = require('./day15');
const readInput = require('../utils/read-input');

const input = readInput(__filename);

describe('day15 2017', () => {
  describe('part1', () => {
    it('should work for part 1 examples', () => {
      expect(
        part1(
          `Generator A starts with 65
Generator B starts with 8921`,
          5,
        ),
      ).toEqual(1);

      expect(
        part1(`Generator A starts with 65
Generator B starts with 8921`),
      ).toEqual(588);
    });

    it('should work for part 1 input', () => {
      expect(part1(input)).toEqual(638);
    });
  });

  describe('part2', () => {
    it('should work for part 2 examples', () => {
      expect(
        part2(
          `Generator A starts with 65
Generator B starts with 8921`,
          1056,
        ),
      ).toEqual(1);
      expect(
        part2(`Generator A starts with 65
Generator B starts with 8921`),
      ).toEqual(309);
    });

    it('should work for part 2 input', () => {
      expect(part2(input)).toEqual(343);
    });
  });
});
