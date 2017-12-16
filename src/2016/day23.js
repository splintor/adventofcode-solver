const ops = {
  cpy: (src, register) => state => {
    if (state[register] !== undefined) {
      src = state[src] === undefined ? parseInt(src, 10) : state[src];
      state[register] = src;
    }
  },
  inc: register => state => {
    if (state[register] !== undefined) {
      state[register]++;
    }
  },
  dec: register => state => {
    if (state[register] !== undefined) {
      state[register]--;
    }
  },
  jnz: (register, distance) => state => {
    if ((state[register] !== undefined && state[register] !== 0) || (state[register] === undefined && register !== '0')) {
      distance = state[distance] === undefined ? parseInt(distance, 10) : state[distance];
      state.index += distance - 1;
    }
  },
  tgl: distance => (state, commands) => {
    distance = state[distance] === undefined ? parseInt(distance, 10) : state[distance];
    toggle(commands[state.index + distance]);
  }
};

function toggle(command) {
  const dic = {
    cpy: 'jnz',
    inc: 'dec',
    dec: 'inc',
    jnz: 'cpy',
    tgl: 'inc'
  };
  if (command) {
    command.name = dic[command.name];
  }
}

function toReducer(str) {
  const params = str.split(/\s+/);
  const cmd = {name: params.shift(), params};
  return cmd;
}

function run(commands, state) {
  while (commands.length > state.index) {
    if (state.index === 4 && commands.slice(4, 10).map(x => x.name).join(' ') === 'cpy inc dec jnz dec jnz') {
      state.a += state.b * state.d;
      state.c = 0;
      state.d = 0;
      state.index = 10;
    } else {
      const cmd = commands[state.index];
      ops[cmd.name](...cmd.params)(state, commands);
      state.index++;
    }
  }
  return state;
}

function day(input, state) {
  const commands1 = input.split('\n').map(toReducer);
  const part1 = run(commands1, state || {a: 7, b: 0, c: 0, d: 0, index: 0}).a;

  const commands2 = input.split('\n').map(toReducer);
  const part2 = run(commands2, state || {a: 12, b: 0, c: 0, d: 0, index: 0}).a;

  return [part1, part2];
}

module.exports = {day};