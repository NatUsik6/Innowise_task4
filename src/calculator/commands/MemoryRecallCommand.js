import { Command } from '../command.js';

export class MemoryRecallCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
    this.prevValue = calculator.getValue();
  }

  execute() {
    const memoryValue = this.calculator.getMemory();

    if (memoryValue === null || memoryValue === undefined) {
      return this.prevValue;
    }

    this.calculator.currentValue = memoryValue;
    return memoryValue;
  }

  undo() {
    this.calculator.currentValue = this.prevValue;
    return this.prevValue;
  }
}
