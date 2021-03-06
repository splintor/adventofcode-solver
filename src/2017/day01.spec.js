const readInput = require('../utils/read-input');
const { part1, part2 } = require('./day01');

const input = readInput(__filename);

describe('day01 2017', () => {
  describe('part1', () => {
    it('should work for part 1 examples', () => {
      expect(part1('1122')).toEqual(3);
      expect(part1('1111')).toEqual(4);
      expect(part1('1234')).toEqual(0);
      expect(part1('91212129')).toEqual(9);
    });

    it('should work for part 1 input', () => {
      expect(part1(input)).toEqual(1136);
    });
  });

  describe('part2', () => {
    it('should work for part 2 examples', () => {
      expect(part2('1212')).toEqual(6);
      expect(part2('1221')).toEqual(0);
      expect(part2('123425')).toEqual(4);
      expect(part2('123123')).toEqual(12);
      expect(part2('12131415')).toEqual(4);
    });

    it('should work for part 2 input', () => {
      expect(part2(input)).toEqual(1092);
    });
  });
});
