import { PowerCommand } from '../src/calculator/commands/PowerCommand';

describe('PowerCommand', () => {
  test('execute() returns a raised to the power of b', () => {
    const command = new PowerCommand(2, 3);
    expect(command.execute()).toBe(8);
  });

  test('execute() with exponent 0 returns 1', () => {
    const command = new PowerCommand(5, 0);
    expect(command.execute()).toBe(1);
  });

  test('execute() with base 0 returns 0 when exponent > 0', () => {
    const command = new PowerCommand(0, 5);
    expect(command.execute()).toBe(0);
  });

  test('execute() with negative exponent returns fractional value', () => {
    const command = new PowerCommand(2, -2);
    expect(command.execute()).toBeCloseTo(0.25);
  });

  test('undo() returns the original base value', () => {
    const command = new PowerCommand(2, 3);
    expect(command.undo()).toBe(2);
  });
});
