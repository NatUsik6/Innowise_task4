import { MultiplyCommand } from '../src/calculator/commands/MultiplyCommand';

describe('MultiplyCommand', () => {
  test('execute() should return the multiply of two numbers', () => {
    const command = new MultiplyCommand(4, 5);
    expect(command.execute()).toBe(20);
  });

  test('undo() should return the divide of two numbers', () => {
    const command = new MultiplyCommand(20, 5);
    expect(command.undo()).toBe(4);
  });

  test('work with negative number', () => {
    const command = new MultiplyCommand(-3, 2);
    expect(command.execute()).toBe(-6);
    expect(command.undo()).toBe(-1.5);
  });

  test('work with fractional numbers', () => {
    const command = new MultiplyCommand(2.5, 4.0);
    expect(command.execute()).toBe(10.0);
    expect(command.undo()).toBeCloseTo(0.625);
  });

  test('execute() work with zeros', () => {
    const command = new MultiplyCommand(100, 0);
    expect(command.execute()).toBe(0);
  });

  test('undo() throws an error when multiplied by 0', () => {
    const command = new MultiplyCommand(100, 0);
    expect(() => command.undo()).toThrow('Cannot undo multiplication by zero');
  });
});
