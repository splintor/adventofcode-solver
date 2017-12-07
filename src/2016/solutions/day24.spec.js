const {day} = require('./day24');
const {expect} = require('chai');
const readInput = require('../../read-input');
const input = readInput(__filename);

describe.skip('day24', () => {
  describe('part1', () => {
    it('should work for part 1 examples', () => {
      expect(day(`###########
#0.1.....2#
#.#######.#
#4.......3#
###########`).shift()).to.equal(14);
    });

    it('should work for part 1 input', () => {
      expect(day(input).shift()).to.equal(412);
    });
  });

  describe('part2', () => {
    it('should work for part 2 examples', () => {
      expect(day(`###########
#0.1.....2#
#.#######.#
#4.......3#
###########`).pop()).to.equal(20);
    });

    it('should work for part 2 input', () => {
      expect(day(input).pop()).to.equal(664);
    });
  });
});