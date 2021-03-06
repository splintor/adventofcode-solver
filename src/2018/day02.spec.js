const { part1, part2 } = require('./day02');
const readInput = require('../utils/read-input');

const input = readInput(__filename);

describe('day02 2018', () => {
  describe('part1', () => {
    it('should work for part 1 examples', () => {
      expect(
        part1(
          [
            'abcdef',
            'bababc',
            'abbcde',
            'abcccd',
            'aabcdd',
            'abcdee',
            'ababab',
          ].join('\n'),
        ),
      ).toEqual(12);
    });

    it('should work for part 1 input', () => {
      expect(part1(input)).toEqual(7221);
    });
  });

  describe('part2', () => {
    it('should work for part 2 examples', () => {
      expect(
        part2(
          ['abcde', 'fghij', 'klmno', 'pqrst', 'fguij', 'axcye', 'wvxyz'].join(
            '\n',
          ),
        ),
      ).toEqual('fgij');
    });

    it('should work for part 2 input', () => {
      expect(part2(input)).toEqual('mkcdflathzwsvjxrevymbdpoq');
    });
  });
});
