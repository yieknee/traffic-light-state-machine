import { createMachine, interpret } from 'xstate';

const lightMachine = createMachine({
  id: 'lightToggle',
  initial: 'red',
  states: {
    red: {
      on: {
        changeLight: 'green',
      },
    },
    yellow: {
      on: {
        changeLight: 'red',
      },
    },
    green: {
      on: {
        changeLight: 'yellow',
      },
    },
  },
});


const service = interpret(lightMachine);

export { lightMachine, service };