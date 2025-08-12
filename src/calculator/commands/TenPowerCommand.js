import { Command } from '../command.js';

export class TenPowerCommand extends Command {
  constructor(value) {
    super();
    this.value = value;
  }

  execute() {
    return 10 ** this.value;
  }

  undo() {
    return this.value;
  }
}
