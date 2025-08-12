import { DivideCommand } from '../src/calculator/commands/DivideCommand';

describe('DivideCommand', () => {
  test('execute() returns a divided by b', () => {
    const command = new DivideCommand(10, 2);
    expect(command.execute()).toBe(5);
  });

  test('undo() returns a multiplied by b', () => {
    const command = new DivideCommand(10, 2);
    expect(command.undo()).toBe(20);
  });

  test('throws an error when b is zero in constructor', () => {
    expect(() => new DivideCommand(10, 0)).toThrow(
      'Error: division by zero is prohibited',
    );
  });

  test('works with negative numbers', () => {
    const command = new DivideCommand(-10, 2);
    expect(command.execute()).toBe(-5);
    expect(command.undo()).toBe(-20);
  });

  test('works with floating point numbers', () => {
    const command = new DivideCommand(5.5, 2.2);
    expect(command.execute()).toBeCloseTo(2.5);
    expect(command.undo()).toBeCloseTo(12.1);
  });

  test('works with small decimals', () => {
    const command = new DivideCommand(0.1, 0.2);
    expect(command.execute()).toBeCloseTo(0.5);
    expect(command.undo()).toBeCloseTo(0.02);
  });
});
