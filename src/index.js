import './style.css';
import { Calculator } from './calculator/calculator.js';
import { AddCommand } from './calculator/commands/AddCommand.js';
import { SubtractCommand } from './calculator/commands/SubtractCommand.js';
import { MultiplyCommand } from './calculator/commands/MultiplyCommand.js';
import { DivideCommand } from './calculator/commands/DivideCommand.js';
import { PercentCommand } from './calculator/commands/PercentCommand.js';
import { NegativeCommand } from './calculator/commands/NegativeCommand.js';
import { SquareCommand } from './calculator/commands/SquareCommand.js';
import { CubeCommand } from './calculator/commands/CubeCommand.js';
import { PowerCommand } from './calculator/commands/PowerCommand.js';
import { TenPowerCommand } from './calculator/commands/TenPowerCommand.js';
import { InverseCommand } from './calculator/commands/InverseCommand.js';
import { SquareRootCommand } from './calculator/commands/SquareRootCommand.js';
import { CubeRootCommand } from './calculator/commands/CubeRootCommand.js';
import { NthRootCommand } from './calculator/commands/NthRootCommand.js';
import { FactorialCommand } from './calculator/commands/FactorialCommand.js';
import { MemoryClearCommand } from './calculator/commands/MemoryClearCommand.js';
import { MemoryRecallCommand } from './calculator/commands/MemoryRecallCommand.js';
import { MemoryAddCommand } from './calculator/commands/MemoryAddCommand.js';
import { MemorySubtractCommand } from './calculator/commands/MemorySubtractCommand.js';

const themeToggleCheckbox = document.getElementById('themeToggleCheckbox');

let currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);
themeToggleCheckbox.checked = currentTheme === 'light';

themeToggleCheckbox.addEventListener('change', () => {
  currentTheme = themeToggleCheckbox.checked ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('theme', currentTheme);
});

const calculator = new Calculator();

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';

function updateDisplay(value) {
  display.textContent = value;
}

let firstOperand = null;
let pendingOperation = null;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const btnValue = button.textContent.trim();

    if (!isNaN(btnValue)) {
      currentInput += btnValue;
      updateDisplay(currentInput);
    } else if (btnValue === ',') {
      if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay(currentInput);
      }
    } else {
      const numInput = parseFloat(currentInput);

      switch (btnValue) {
        case '+':
        case '−':
        case '×':
        case '÷':
        case '%':
        case 'xʸ':
        case 'ʸ√x':
          if (!isNaN(numInput)) {
            if (firstOperand !== null && pendingOperation) {
              let command;
              switch (pendingOperation) {
                case '+':
                  command = new AddCommand(firstOperand, numInput);
                  break;
                case '−':
                  command = new SubtractCommand(firstOperand, numInput);
                  break;
                case '×':
                  command = new MultiplyCommand(firstOperand, numInput);
                  break;
                case '÷':
                  command = new DivideCommand(firstOperand, numInput);
                  break;
                case '%':
                  command = new PercentCommand(firstOperand, numInput);
                  break;
                case 'xʸ':
                  command = new PowerCommand(firstOperand, numInput);
                  break;
                case 'ʸ√x':
                  command = new NthRootCommand(firstOperand, numInput);
                  break;
              }
              calculator.executeCommand(command);
              firstOperand = calculator.getValue();
              updateDisplay(firstOperand);
            } else {
              firstOperand = numInput;
            }

            pendingOperation = btnValue;
            currentInput = '';
          }
          break;

        case '=':
          if (!isNaN(numInput) && firstOperand !== null && pendingOperation) {
            try {
              let command;

              switch (pendingOperation) {
                case '+':
                  command = new AddCommand(firstOperand, numInput);
                  break;
                case '−':
                  command = new SubtractCommand(firstOperand, numInput);
                  break;
                case '×':
                  command = new MultiplyCommand(firstOperand, numInput);
                  break;
                case '÷':
                  command = new DivideCommand(firstOperand, numInput);
                  break;
                case '%':
                  command = new PercentCommand(firstOperand, numInput);
                  break;
                case 'xʸ':
                  command = new PowerCommand(firstOperand, numInput);
                  break;
                case 'ʸ√x':
                  command = new NthRootCommand(firstOperand, numInput);
                  break;
              }

              calculator.executeCommand(command);
              updateDisplay(calculator.getValue());
              currentInput = calculator.getValue().toString();
            } catch (error) {
              updateDisplay(error.message);
              currentInput = '';
            }
            pendingOperation = null;
            firstOperand = null;
          }
          break;

        case '+/-':
          if (!isNaN(numInput)) {
            const command = new NegativeCommand(numInput);
            try {
              calculator.executeCommand(command);
              updateDisplay(calculator.getValue());
              currentInput = calculator.getValue().toString();
            } catch (error) {
              updateDisplay(error.message);
            }
          }
          break;

        case 'x²':
          if (!isNaN(numInput)) {
            const command = new SquareCommand(numInput);
            try {
              calculator.executeCommand(command);
              updateDisplay(calculator.getValue());
              currentInput = calculator.getValue().toString();
            } catch (error) {
              updateDisplay(error.message);
            }
          }
          break;

        case 'x³':
          if (!isNaN(numInput)) {
            const command = new CubeCommand(numInput);
            try {
              calculator.executeCommand(command);
              updateDisplay(calculator.getValue());
              currentInput = calculator.getValue().toString();
            } catch (error) {
              updateDisplay(error.message);
            }
          }
          break;

        case '10ˣ':
          if (!isNaN(numInput)) {
            const command = new TenPowerCommand(numInput);
            try {
              calculator.executeCommand(command);
              updateDisplay(calculator.getValue());
              currentInput = calculator.getValue().toString();
            } catch (error) {
              updateDisplay(error.message);
            }
          }
          break;

        case '1/x':
          if (!isNaN(numInput)) {
            const command = new InverseCommand(numInput);
            try {
              calculator.executeCommand(command);
              updateDisplay(calculator.getValue());
              currentInput = calculator.getValue().toString();
            } catch (error) {
              updateDisplay(error.message);
            }
          }
          break;

        case '²√x':
          if (!isNaN(numInput)) {
            const command = new SquareRootCommand(numInput);
            try {
              calculator.executeCommand(command);
              updateDisplay(calculator.getValue());
              currentInput = calculator.getValue().toString();
            } catch (error) {
              updateDisplay(error.message);
            }
          }
          break;

        case '³√x':
          if (!isNaN(numInput)) {
            const command = new CubeRootCommand(numInput);
            try {
              calculator.executeCommand(command);
              updateDisplay(calculator.getValue());
              currentInput = calculator.getValue().toString();
            } catch (error) {
              updateDisplay(error.message);
            }
          }
          break;

        case 'x!':
          if (!isNaN(numInput)) {
            const command = new FactorialCommand(numInput);
            try {
              calculator.executeCommand(command);
              updateDisplay(calculator.getValue());
              currentInput = calculator.getValue().toString();
            } catch (error) {
              updateDisplay(error.message);
            }
          }
          break;

        case 'AC':
          calculator.clear();
          currentInput = '';
          pendingOperation = null;
          firstOperand = null;
          updateDisplay(0);
          break;

        case 'mc':
          calculator.executeCommand(new MemoryClearCommand(calculator));
          break;

        case 'mr':
          calculator.executeCommand(new MemoryRecallCommand(calculator));
          currentInput = calculator.getValue().toString();
          updateDisplay(currentInput);
          break;

        case 'm+':
          if (!isNaN(parseFloat(currentInput))) {
            calculator.executeCommand(
              new MemoryAddCommand(calculator, parseFloat(currentInput)),
            );
          }
          break;

        case 'm-':
          if (!isNaN(parseFloat(currentInput))) {
            calculator.executeCommand(
              new MemorySubtractCommand(calculator, parseFloat(currentInput)),
            );
          }
          break;

        default:
          break;
      }
    }
  });
});
