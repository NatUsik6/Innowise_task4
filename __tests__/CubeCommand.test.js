import { CubeCommand } from '../src/calculator/commands/CubeCommand';

describe('CubeCommand', () => {
  test('execute() returns the square of a positive number', () => {
    const command = new CubeCommand(2);
    expect(command.execute()).toBe(8);
  });

  test('execute() returns the square of a negative number', () => {
    const command = new CubeCommand(-3);
    expect(command.execute()).toBe(-27);
  });

  test('execute() returns 0 when input is 0', () => {
    const command = new CubeCommand(0);
    expect(command.execute()).toBe(0);
  });

  test('execute() returns correct square for decimal values', () => {
    const command = new CubeCommand(2.5);
    expect(command.execute()).toBeCloseTo(15.625);
  });

  test('undo() returns the original input value', () => {
    const command = new CubeCommand(7);
    expect(command.undo()).toBe(7);
  });
});
