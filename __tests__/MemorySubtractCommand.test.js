import { Calculator } from '../src/calculator/calculator.js';
import { MemorySubtractCommand } from '../src/calculator/commands/MemorySubtractCommand.js';

describe('MemorySubtractCommand', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
    calculator.setMemory(10);
  });

  test('should subtract value from memory', () => {
    const command = new MemorySubtractCommand(calculator, 4);
    command.execute();
    expect(calculator.getMemory()).toBe(6);
  });

  test('should restore memory on undo', () => {
    const command = new MemorySubtractCommand(calculator, 4);
    command.execute();
    command.undo();
    expect(calculator.getMemory()).toBe(10);
  });
});
