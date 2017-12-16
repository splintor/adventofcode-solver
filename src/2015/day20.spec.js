const {day} = require('./day20');
const {expect} = require('chai');
const readInput = require('../read-input');
const input = readInput(__filename);

describeHeavy('day20 2015', () => {
  describe('part1', () => {
    it('should work for part 1 examples', () => {
      expect(day('10', true).shift()).to.equal(1);
      expect(day('30', true).shift()).to.equal(2);
      expect(day('40', true).shift()).to.equal(3);
      expect(day('70', true).shift()).to.equal(4);
      expect(day('120', true).shift()).to.equal(6);
      expect(day('150', true).shift()).to.equal(8);
    });
  });

  it('should work for input', () => {
    const [part1, part2] = day(input);
    expect(part1).to.equal(776160);
    expect(part2).to.equal(786240);
  });
});