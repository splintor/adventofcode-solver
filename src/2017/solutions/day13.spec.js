const {day} = require('./day13');
const {expect} = require('chai');
const readInput = require('../../read-input');
const input = readInput(__filename);

describe('day13 2017', () => {
  describe('part1', () => {
    it('should work for part 1 examples', () => {
      expect(day(`0: 3
1: 2
4: 4
6: 4`).shift()).to.equal(24);
    });

    it('should work for part 1 input', () => {
      expect(day(input).shift()).to.equal(3184);
    });
  });

  describe('part2', () => {
    it('should work for part 2 examples', () => {
      expect(day(`0: 3
1: 2
4: 4
6: 4`).pop()).to.equal(10);
    });

    it('should work for part 2 input', () => {
      expect(day(input).pop()).to.equal(3878062);
    });
  });
});