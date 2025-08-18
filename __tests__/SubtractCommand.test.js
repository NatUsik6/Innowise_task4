import { SubtractCommand } from "../src/calculator/commands/SubtractCommand";

describe('SubtractCommand', () => {
  test('execute should return the subtract of two numbers', () => {
    const command = new SubtractCommand(3, 2);
    expect(command.execute()).toBe(1);
  });
  test('undo should return the sum of two numbers', () => {
    const command = new SubtractCommand(1, 2);
    expect(command.undo()).toBe(3);
  });
  test('work with negative number', () => {
    const command = new SubtractCommand(-5, -2);
    expect(command.execute()).toBe(-3);
    expect(command.undo()).toBe(-7);
  });
  test('work with zeros', () => {
    const command = new SubtractCommand(0, 0);
    expect(command.execute()).toBe(0);
    expect(command.undo()).toBe(0);
  });
  test('work with fractional numbers', () => {
    const command = new SubtractCommand(5.5, 2.2);
    expect(command.execute()).toBeCloseTo(3.3);
    expect(command.undo()).toBeCloseTo(7.7);
  });
}); 