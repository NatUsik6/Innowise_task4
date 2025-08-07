import { Command } from '../command.js';

export class FactorialCommand extends Command {
  constructor(value) {
    super();
    this.value = value;
  }

  execute() {
    let n = this.value;
    if (n < 0 || n % 1 !== 0) throw new Error("Invalid factorial input");
    if (n === 0 || n === 1) return 1;

    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }


  undo() {
    return this.value;
  }
}
