import { Command } from '../command.js';

export class CubeCommand extends Command {
  constructor(value) {
    super();
    this.value = value;
  }

  execute() {
    return this.value ** 3;
  }

  undo() {
    return this.value;
  }
}
