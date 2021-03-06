const { part1, part2 } = require('./day09');
const readInput = require('../utils/read-input');

const input = readInput(__filename);

describe('day09 2015', () => {
  describe('part1', () => {
    it('should work for part 1 examples', () => {
      expect(
        part1(`London to Dublin = 464
London to Belfast = 518
Dublin to Belfast = 141`),
      ).toEqual(605);
    });

    it('should work for part 1 input', () => {
      expect(part1(input)).toEqual(251);
    });
  });

  describe('part2', () => {
    it('should work for part 2 examples', () => {
      expect(
        part2(`London to Dublin = 464
London to Belfast = 518
Dublin to Belfast = 141`),
      ).toEqual(982);
    });

    it('should work for part 2 input', () => {
      expect(part2(input)).toEqual(898);
    });
  });
});
