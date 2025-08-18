import { AddCommand } from '../src/calculator/commands/AddCommand';

describe('AddCommand', () => {
  test('execute should return the sum of two numbers', () => {
    const command = new AddCommand(1, 2);
    expect(command.execute()).toBe(3);
  });
  test('undo should return the difference of two numbers', () => {
    const command = new AddCommand(1, 2);
    expect(command.undo()).toBe(-1);
  });
  test('work with negative number', () => {
    const command = new AddCommand(-2, -2);
    expect(command.execute()).toBe(-4);
    expect(command.undo()).toBe(0);
  });
  test('work with zeros', () => {
    const command = new AddCommand(0, 0);
    expect(command.execute()).toBe(0);
    expect(command.undo()).toBe(0);
  });
  test('work with fractional numbers', () => {
    const command = new AddCommand(2.5, 1.2);
    expect(command.execute()).toBeCloseTo(3.7);
    expect(command.undo()).toBeCloseTo(1.3);
  });
}); 