import { createMachine, interpret } from 'xstate';

const lightMachine = createMachine({
  // Your state machine blueprint here

});


const service = interpret(lightMachine);

export { lightMachine, service };