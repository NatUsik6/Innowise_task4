import { Command } from '../command.js';

export class DivideCommand extends Command {
  constructor(a, b) {
    super();
    if (b === 0) throw new Error('Error: division by zero is prohibited');
    this.a = a;
    this.b = b;
  }

  execute() {
    return this.a / this.b;
  }

  undo() {
    return this.a * this.b;
  }
}
