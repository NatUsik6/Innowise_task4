import { SquareRootCommand } from '../src/calculator/commands/SquareRootCommand';

describe('SquareRootCommand', () => {
  test('execute() returns square root of a positive number', () => {
    const command = new SquareRootCommand(9);
    expect(command.execute()).toBe(3);
  });

  test('execute() returns 0 for input 0', () => {
    const command = new SquareRootCommand(0);
    expect(command.execute()).toBe(0);
  });

  test('execute() throws an error for negative input', () => {
    const command = new SquareRootCommand(-4);
    expect(() => command.execute()).toThrow(
      'Cannot extract square root of negative number',
    );
  });

  test('undo() returns the original value', () => {
    const command = new SquareRootCommand(16);
    expect(command.undo()).toBe(16);
  });
});
