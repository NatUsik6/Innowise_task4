import { Command } from '../command.js';

export class SquareRootCommand extends Command {
  constructor(value) {
    super();
    this.value = value;
  }

  execute() {
    if (this.value < 0) {
      throw new Error('Cannot extract square root of negative number');
    }
    return this.value ** (1 / 2);
  }

  undo() {
    return this.value;
  }
}
