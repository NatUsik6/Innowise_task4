import { Command } from '../command.js';

export class CubeRootCommand extends Command {
  constructor(value) {
    super();
    this.value = value;
  }

  execute() {
    const absValue = this.value < 0 ? -this.value : this.value;
    const root = absValue ** (1 / 3);
    return this.value < 0 ? -root : root;
  }

  undo() {
    return this.value;
  }
}
