const { part1, part2 } = require('./day24');
const readInput = require('../utils/read-input');

const input = readInput(__filename);

describe('day24 2016', () => {
  describe('part1', () => {
    it('should work for part 1 examples', () => {
      expect(
        part1(`###########
#0.1.....2#
#.#######.#
#4.......3#
###########`),
      ).toEqual(14);
    });

    it('should work for part 1 input', () => {
      expect(part1(input)).toEqual(412);
    });
  });

  describe('part2', () => {
    it('should work for part 2 examples', () => {
      expect(
        part2(`###########
#0.1.....2#
#.#######.#
#4.......3#
###########`),
      ).toEqual(20);
    });

    it('should work for part 2 input', () => {
      expect(part2(input)).toEqual(664);
    });
  });
});
