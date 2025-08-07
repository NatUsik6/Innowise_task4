import { Command } from '../command.js';

export class NthRootCommand extends Command {
  constructor(a, b) {
    super();
    this.a = a;
    this.b = b;
  }

  execute() {
    if (this.b === 0) {
      throw new Error('Zero root is invalid');
    }
    if (this.a < 0 && this.b % 2 === 0) {
      throw new Error('Even root of negative number');
    } 
    return this.a ** (1 / this.b);
  }

  undo() {
    return this.a;
  }
}
