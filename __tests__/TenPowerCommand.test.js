import { TenPowerCommand } from '../src/calculator/commands/TenPowerCommand';

describe('TenPowerCommand', () => {
  test('execute() returns 10 raised to the given power', () => {
    const command = new TenPowerCommand(2);
    expect(command.execute()).toBe(100);
  });

  test('execute() with power 0 returns 1', () => {
    const command = new TenPowerCommand(0);
    expect(command.execute()).toBe(1);
  });

  test('execute() with negative power returns fractional result', () => {
    const command = new TenPowerCommand(-2);
    expect(command.execute()).toBeCloseTo(0.01);
  });

  test('undo() returns the original input value', () => {
    const command = new TenPowerCommand(3);
    expect(command.undo()).toBe(3);
  });
});
