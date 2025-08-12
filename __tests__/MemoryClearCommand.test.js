import { Calculator } from '../src/calculator/calculator.js';
import { MemoryClearCommand } from '../src/calculator/commands/MemoryClearCommand.js';

describe('MemoryClearCommand', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
    calculator.setMemory(50);
  });

  test('should clear memory', () => {
    const command = new MemoryClearCommand(calculator);
    command.execute();
    expect(calculator.getMemory()).toBe(0);
  });

  test('should restore memory on undo', () => {
    const command = new MemoryClearCommand(calculator);
    command.execute();
    command.undo();
    expect(calculator.getMemory()).toBe(50);
  });
});
