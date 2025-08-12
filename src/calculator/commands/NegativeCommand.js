import { Command } from '../command.js';

export class NegativeCommand extends Command {
  constructor(value) {
    super();
    this.value = value;
  }

  execute() {
    return -this.value;
  }

  undo() {
    return this.value;
  }
}
