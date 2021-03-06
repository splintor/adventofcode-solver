const { part1, part2 } = require('./day19');
const readInput = require('../utils/read-input');

const input = readInput(__filename);

describe('day19 2017', () => {
  describe('part1', () => {
    it('should work for part 1 examples', () => {
      expect(
        part1(`.....|..........
.....|..+--+....
.....A..|..C....
.F---|----E|--+.
.....|..|..|..D.
.....+B-+..+--+.`),
      ).toEqual('ABCDEF');
    });

    it('should work for part 1 input', () => {
      expect(part1(input)).toEqual('KGPTMEJVS');
    });
  });

  describe('part2', () => {
    it('should work for part 2 examples', () => {
      expect(
        part2(`.....|..........
.....|..+--+....
.....A..|..C....
.F---|----E|--+.
.....|..|..|..D.
.....+B-+..+--+.`),
      ).toEqual(38);
    });

    it('should work for part 2 input', () => {
      expect(part2(input)).toEqual(16328);
    });
  });
});
