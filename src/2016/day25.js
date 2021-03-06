function toReducer(str) {
  const params = str.split(/\s+/);
  const ops = {
    cpy: (src, register) => state =>
      (state[register] =
        state[src] === undefined ? parseInt(src, 10) : state[src]),
    inc: register => state => state[register]++,
    dec: register => state => state[register]--,
    jnz: (register, distance) => state => {
      if (
        (state[register] !== undefined && state[register] !== 0) ||
        (state[register] === undefined && register !== '0')
      ) {
        distance =
          state[distance] === undefined
            ? parseInt(distance, 10)
            : state[distance];
        state.index += distance - 1;
      }
    },
    out: register => state => (state.out += state[register]),
  };
  const cmd = ops[params.shift()](...params);
  return state => {
    cmd(state);
    state.index++;
  };
}

function run(commands, state) {
  while (commands.length > state.index && state.out.length < 100) {
    commands[state.index](state);
  }
  return state;
}

function part1(input) {
  const commands = input.split('\n').map(toReducer);
  let a = 0;
  while (
    run(commands, { a, b: 0, c: 0, d: 0, index: 0, out: '' }).out !==
    '0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101'
  ) {
    a++;
  }
  return a;
}

module.exports = { part1, part2: () => undefined };
