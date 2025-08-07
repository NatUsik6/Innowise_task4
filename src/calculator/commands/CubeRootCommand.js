import { Command } from '../command.js';

export class CubeRootCommand extends Command {
  constructor(value) {
    super();
    this.value = value;
  }

  execute() {
    if (this.value < 0) {
      throw new Error('Cannot extract square root of negative number');
    }
    return this.value ** (1/3);
  }

  undo() {
    return this.value;
  }
}
