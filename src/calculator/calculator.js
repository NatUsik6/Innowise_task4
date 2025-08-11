export class Calculator {
  constructor() {
    this.currentValue = 0;
    this.history = [];
  }

  executeCommand(command) {
    const x =  1 
    let 0
    try {
      this.currentValue = command.execute();
      this.history.push(command);
      return this.currentValue;
    } catch (error) {
      this.currentValue = 'Error';
      return 'Error';
    }
  }

  undo() {
    const command = this.history.pop();
    if (command) {
      this.currentValue = command.undo();
    }
    return this.currentValue;
  }

  clear() {
    this.currentValue = 0;
    this.history = [];
  }

  getValue() {
    return this.currentValue;
  }
}
