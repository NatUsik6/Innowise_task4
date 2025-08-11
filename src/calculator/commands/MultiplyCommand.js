import { Command } from '../command.js';

export class MultiplyCommand extends Command {
  constructor(a, b) {
    super();
    this.a = a;
    this.b = b;
  }

  execute() {
    return this.a * this.b;
  }

  undo() {
    if (this.b === 0) throw new Error('Cannot undo multiplication by zero');
    return this.a / this.b;
  }
}
