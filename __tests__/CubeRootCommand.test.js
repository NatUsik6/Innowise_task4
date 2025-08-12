import { CubeRootCommand } from '../src/calculator/commands/CubeRootCommand';

describe('CubeRootCommand', () => {
  test('execute() returns cube root of a positive number', () => {
    const command = new CubeRootCommand(27);
    expect(command.execute()).toBeCloseTo(3);
  });

  test('execute() returns cube root of a negative number', () => {
    const command = new CubeRootCommand(-8);
    expect(command.execute()).toBeCloseTo(-2);
  });

  test('execute() returns 0 for input 0', () => {
    const command = new CubeRootCommand(0);
    expect(command.execute()).toBe(0);
  });

  test('undo() returns the original value', () => {
    const command = new CubeRootCommand(64);
    expect(command.undo()).toBe(64);
  });
});
