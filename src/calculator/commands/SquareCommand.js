import { Command } from '../command.js';

export class SquareCommand extends Command {
  constructor(value) {
    super();
    this.value = value;
  }

  execute() {
    return this.value ** 2;
  }

  undo() {
    return this.value;
  }
}
