import { Command } from '../command.js';

export class MemoryClearCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
    this.prevMemory = calculator.getMemory();
  }

  execute() {
    this.calculator.clearMemory();
    return this.calculator.getValue();
  }

  undo() {
    this.calculator.setMemory(this.prevMemory);
    return this.prevMemory;
  }
}
