const { part1, part2 } = require('./day11');
const readInput = require('../utils/read-input');

const input = readInput(__filename);

describe('day11 2017', () => {
  describe('part1', () => {
    it('should work for part 1 examples', () => {
      expect(part1('ne,ne,ne')).toEqual(3);
      expect(part1('ne,ne,sw,sw')).toEqual(0);
      expect(part1('ne,ne,s,s')).toEqual(2);
      expect(part1('se,sw,se,sw,sw')).toEqual(3);
    });

    it('should work for part 1 input', () => {
      expect(part1(input)).toEqual(747);
    });
  });

  describe('part2', () => {
    it('should work for part 2 input', () => {
      expect(part2(input)).toEqual(1544);
    });
  });
});
