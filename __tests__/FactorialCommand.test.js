import { FactorialCommand } from '../src/calculator/commands/FactorialCommand';

describe('FactorialCommand', () => {
  test('execute() returns 1 for 0!', () => {
    const command = new FactorialCommand(0);
    expect(command.execute()).toBe(1);
  });

  test('execute() returns 1 for 1!', () => {
    const command = new FactorialCommand(1);
    expect(command.execute()).toBe(1);
  });

  test('execute() returns correct factorial for positive integers', () => {
    const command = new FactorialCommand(5);
    expect(command.execute()).toBe(120);
  });

  test('execute() throws error for negative numbers', () => {
    const command = new FactorialCommand(-3);
    expect(() => command.execute()).toThrow('Invalid factorial input');
  });

  test('execute() throws error for non-integer values', () => {
    const command = new FactorialCommand(3.5);
    expect(() => command.execute()).toThrow('Invalid factorial input');
  });

  test('undo() returns the original input value', () => {
    const command = new FactorialCommand(4);
    expect(command.undo()).toBe(4);
  });
});
