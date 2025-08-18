export class Calculator {
  constructor() {
    this.currentValue = 0;
    this.history = [];
    this.memory = 0;
  }

  executeCommand(command) {
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

  setMemory(value) {
    this.memory = value;
  }

  getMemory() {
    return this.memory;
  }

  addToMemory(value) {
    this.memory += value;
  }

  subtractFromMemory(value) {
    this.memory -= value;
  }

  clearMemory() {
    this.memory = 0;
  }
}
