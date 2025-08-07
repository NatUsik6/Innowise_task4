import { Command } from '../command.js';

export class SubtractCommand extends Command {
  constructor(a, b) {
    super();
    this.a = a;
    this.b = b;
  }

  execute() {
    return this.a - this.b;
  }

  undo() {
    return this.a + this.b;
  }
}
