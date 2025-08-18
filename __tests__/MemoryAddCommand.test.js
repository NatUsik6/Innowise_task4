import { Calculator } from '../src/calculator/calculator.js';
import { MemoryAddCommand } from '../src/calculator/commands/MemoryAddCommand.js';

describe('MemoryAddCommand', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
    calculator.setMemory(5);
  });

  test('should add value to memory', () => {
    const command = new MemoryAddCommand(calculator, 3);
    command.execute();
    expect(calculator.getMemory()).toBe(8);
  });

  test('should restore memory on undo', () => {
    const command = new MemoryAddCommand(calculator, 3);
    command.execute();
    command.undo();
    expect(calculator.getMemory()).toBe(5);
  });
});
