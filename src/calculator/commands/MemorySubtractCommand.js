import { Command } from '../command.js';

export class MemorySubtractCommand extends Command {
  constructor(calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
    this.prevMemory = calculator.getMemory();
  }

  execute() {
    this.calculator.subtractFromMemory(this.value);
    return this.calculator.getValue();
  }

  undo() {
    this.calculator.setMemory(this.prevMemory);
    return this.prevMemory;
  }
}
