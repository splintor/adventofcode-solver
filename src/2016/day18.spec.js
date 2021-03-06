const { part1, part2 } = require('./day18');
const readInput = require('../utils/read-input');

const input = readInput(__filename);

describe('day18 2016', () => {
  describe('part1', () => {
    it('should work for part 1 examples', () => {
      expect(part1('..^^.', 3)).toEqual(6);
      expect(part1('.^^.^.^^^^', 10)).toEqual(38);
    });

    it('should work for part 1 input', () => {
      expect(part1(input)).toEqual(1951);
    });
  });

  describe('part2', () => {
    it('should work for part 2 input', () => {
      expect(part2(input)).toEqual(20002936);
    });
  });
});
