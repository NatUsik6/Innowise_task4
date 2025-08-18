import { NegativeCommand } from '../src/calculator/commands/NegativeCommand';

describe('NegativeCommand', () => {
  test('execute() returns the negative of the input value', () => {
    const command = new NegativeCommand(5);
    expect(command.execute()).toBe(-5);
  });

  test('execute() returns positive value when input is negative', () => {
    const command = new NegativeCommand(-7);
    expect(command.execute()).toBe(7);
  });

  test('execute() returns zero when input is zero', () => {
    const command = new NegativeCommand(0);
    expect(command.execute()).toBeCloseTo(0);
  });

  test('execute() works with decimal values', () => {
    const command = new NegativeCommand(3.14);
    expect(command.execute()).toBeCloseTo(-3.14);
  });

  test('undo() returns the original input value', () => {
    const command = new NegativeCommand(42);
    expect(command.undo()).toBe(42);
  });
});
