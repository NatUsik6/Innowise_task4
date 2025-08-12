export class Command {
  execute() {
    throw new Error('The method execute() must be implemented');
  }

  undo() {
    throw new Error('The method undo() must be implemented');
  }
}
