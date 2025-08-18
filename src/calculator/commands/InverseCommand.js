import { Command } from '../command.js';

export class InverseCommand extends Command {
  constructor(value) {
    super();
    this.value = value;
  }

  execute() {
    if (this.value === 0) {
      throw new Error('Error: division by zero is prohibited');
    }
    return 1 / this.value;
  }

  undo() {
    return this.value;
  }
}
