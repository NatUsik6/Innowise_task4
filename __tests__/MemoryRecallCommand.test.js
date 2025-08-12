import { Calculator } from '../src/calculator/calculator.js';
import { MemoryRecallCommand } from '../src/calculator/commands/MemoryRecallCommand.js';

describe('MemoryRecallCommand', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
    calculator.setMemory(42);
    calculator.currentValue = 10;
  });

  test('should recall memory value into currentValue', () => {
    const command = new MemoryRecallCommand(calculator);
    command.execute();
    expect(calculator.getValue()).toBe(42);
  });

  test('should restore previous value on undo', () => {
    const command = new MemoryRecallCommand(calculator);
    command.execute();
    command.undo();
    expect(calculator.getValue()).toBe(10);
  });
});
