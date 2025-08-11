import { SquareCommand } from '../src/calculator/commands/SquareCommand';

describe('SquareCommand', () => {
  test('execute() returns the square of a positive number', () => {
    const command = new SquareCommand(4);
    expect(command.execute()).toBe(16);
  });

  test('execute() returns the square of a negative number', () => {
    const command = new SquareCommand(-3);
    expect(command.execute()).toBe(9);
  });

  test('execute() returns 0 when input is 0', () => {
    const command = new SquareCommand(0);
    expect(command.execute()).toBe(0);
  });

  test('execute() returns correct square for decimal values', () => {
    const command = new SquareCommand(2.5);
    expect(command.execute()).toBeCloseTo(6.25);
  });

  test('undo() returns the original input value', () => {
    const command = new SquareCommand(7);
    expect(command.undo()).toBe(7);
  });
});
