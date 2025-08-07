import { Command } from '../command.js';

export class PercentCommand extends Command {
  constructor(a, b) {
    super();
    this.a = a;
    this.b = b;
  }

  execute() {
    return this.a * this.b / 100;
  }

  undo() {
    return this.a;
  }
}
