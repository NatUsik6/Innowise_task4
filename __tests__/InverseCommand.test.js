import { InverseCommand } from '../src/calculator/commands/InverseCommand';

describe('InverseCommand', () => {
  test('execute() returns the reciprocal of a positive number', () => {
    const command = new InverseCommand(4);
    expect(command.execute()).toBe(0.25);
  });

  test('execute() returns the reciprocal of a negative number', () => {
    const command = new InverseCommand(-2);
    expect(command.execute()).toBe(-0.5);
  });

  test('execute() throws an error when dividing by zero', () => {
    const command = new InverseCommand(0);
    expect(() => command.execute()).toThrow(
      'Error: division by zero is prohibited',
    );
  });

  test('undo() returns the original value', () => {
    const command = new InverseCommand(5);
    expect(command.undo()).toBe(5);
  });
});
