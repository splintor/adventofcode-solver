const {day} = require('./day17');
const {expect} = require('chai');
const readInput = require('../read-input');
const input = readInput(__filename);

describeHeavy('day17 2015', () => {
  it('should work for example', () => {
    const [part1, part2] = day(`20
15
10
5
5`, 25);
    expect(part1).to.equal(4);
    expect(part2).to.equal(3);
  });

  it('should work for input', () => {
    const [part1, part2] = day(input);
    expect(part1).to.equal(654);
    expect(part2).to.equal(57);
  });
});