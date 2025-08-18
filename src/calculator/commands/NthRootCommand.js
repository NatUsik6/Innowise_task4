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

    const isEvenRoot = this.b % 2 === 0;
    const isNegativeBase = this.a < 0;

    if (isEvenRoot && isNegativeBase) {
      throw new Error('Even root of negative number');
    }

    const base = isNegativeBase ? -this.a : this.a;
    const root = base ** (1 / this.b);

    return isNegativeBase ? -root : root;
  }

  undo() {
    return this.a;
  }
}
