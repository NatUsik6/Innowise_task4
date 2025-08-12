import { PercentCommand } from '../src/calculator/commands/PercentCommand';

describe('PercentCommand', () => {
  test('execute() returns a percent of b (a * b / 100)', () => {
    const command = new PercentCommand(50, 200);
    expect(command.execute()).toBe(100);
  });

  test('undo() returns the original a', () => {
    const command = new PercentCommand(30, 100);
    expect(command.undo()).toBe(30);
  });

  test('works when both a and b are zero', () => {
    const command = new PercentCommand(0, 0);
    expect(command.execute()).toBe(0);
    expect(command.undo()).toBe(0);
  });

  test('works with negative values', () => {
    const command = new PercentCommand(-20, 150);
    expect(command.execute()).toBe(-30);
    expect(command.undo()).toBe(-20);
  });

  test('works with decimal values', () => {
    const command = new PercentCommand(12.5, 80);
    expect(command.execute()).toBeCloseTo(10);
    expect(command.undo()).toBe(12.5);
  });
});
