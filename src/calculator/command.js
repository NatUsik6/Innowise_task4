export class Command {
  execute() {
    throw new Error('Метод execute() должен быть реализован');
  }

  undo() {
    throw new Error('Метод undo() должен быть реализован');
  }
}
