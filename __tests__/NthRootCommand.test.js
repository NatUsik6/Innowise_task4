import { NthRootCommand } from '../src/calculator/commands/NthRootCommand';

describe('NthRootCommand', () => {
  test('execute() returns correct nth root of a positive number', () => {
    const command = new NthRootCommand(27, 3);
    expect(command.execute()).toBeCloseTo(3);
  });

  test('execute() returns correct root for b=1 (1st root is the number itself)', () => {
    const command = new NthRootCommand(5, 1);
    expect(command.execute()).toBe(5);
  });

  test('execute() returns correct root of 0', () => {
    const command = new NthRootCommand(0, 3);
    expect(command.execute()).toBe(0);
  });

  test('execute() throws error when root is zero', () => {
    const command = new NthRootCommand(8, 0);
    expect(() => command.execute()).toThrow('Zero root is invalid');
  });

  test('execute() throws error on even root of a negative number', () => {
    const command = new NthRootCommand(-8, 2);
    expect(() => command.execute()).toThrow('Even root of negative number');
  });

  test('execute() works for odd root of a negative number', () => {
    const command = new NthRootCommand(-8, 3);
    expect(command.execute()).toBeCloseTo(-2);
  });

  test('undo() returns the original number', () => {
    const command = new NthRootCommand(100, 2);
    expect(command.undo()).toBe(100);
  });
});
