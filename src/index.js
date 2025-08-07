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

const calculator = new Calculator();

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';

function updateDisplay(value) {
  display.textContent = value;
}

let savedValue = null;
let pendingOperation = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const btnValue = button.textContent.trim();

    if (!isNaN(btnValue) || btnValue === ',') {
      currentInput += btnValue === ',' ? '.' : btnValue;
      updateDisplay(currentInput);
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
            savedValue = numInput;
            pendingOperation = btnValue;
            currentInput = '';
          }
          break;

        case '=':
          if (!isNaN(numInput) && savedValue !== null && pendingOperation) {
            let command;
 
            switch (pendingOperation) {
              case '+':
                command = new AddCommand(savedValue, numInput);
                break;
              case '−':
                command = new SubtractCommand(savedValue, numInput);
                break;
              case '×':
                command = new MultiplyCommand(savedValue, numInput);
                break;
              case '÷':
                command = new DivideCommand(savedValue, numInput);
                break;
              case '%':
                command = new PercentCommand(savedValue, numInput);
                break;
              case 'xʸ': 
                command = new PowerCommand(savedValue, numInput);
                break;
              case 'ʸ√x':
                command = new NthRootCommand(savedValue, numInput);
                break;
            }

            try {
              calculator.executeCommand(command);
              updateDisplay(calculator.getValue());
            } catch (error) {
              updateDisplay(error.message);
            }


            currentInput = '';
            pendingOperation = null;
            savedValue = null;
          }
          break;

        case '+/-':
          if (!isNaN(numInput)) {
            const command = new NegativeCommand(numInput);
            try {
              calculator.executeCommand(command);
              updateDisplay(calculator.getValue());
            } catch (error) {
              updateDisplay(error.message);
            }
            currentInput = '';
          }
          break;

        case 'x²':
          if (!isNaN(numInput)) {
            const command = new SquareCommand(numInput);
            try {
              calculator.executeCommand(command);
              updateDisplay(calculator.getValue());
            } catch (error) {
              updateDisplay(error.message);
            }
            currentInput = '';
          }
          break;

        case 'x³':
          if (!isNaN(numInput)) {
            const command = new CubeCommand(numInput);
          try {
            calculator.executeCommand(command);
            updateDisplay(calculator.getValue());
          } catch (error) {
            updateDisplay(error.message);
          }
            currentInput = '';
          }
          break;

        case '10ˣ':
          if (!isNaN(numInput)) {
            const command = new TenPowerCommand(numInput);
          try {
            calculator.executeCommand(command);
            updateDisplay(calculator.getValue());
          } catch (error) {
            updateDisplay(error.message);
          }
            currentInput = '';
          }
          break;

        case '1/x':
          if (!isNaN(numInput)) {
            const command = new InverseCommand(numInput);
          try {
            calculator.executeCommand(command);
            updateDisplay(calculator.getValue());
          } catch (error) {
            updateDisplay(error.message);
          }
            currentInput = '';
          }
          break;

        case '²√x':
        if (!isNaN(numInput)) {
          const command = new SquareRootCommand(numInput);
        try {
          calculator.executeCommand(command);
          updateDisplay(calculator.getValue());
        } catch (error) {
          updateDisplay(error.message);
        }
          currentInput = '';
        }
        break;

      case '³√x':
        if (!isNaN(numInput)) {
          const command = new CubeRootCommand(numInput);
        try {
          calculator.executeCommand(command);
          updateDisplay(calculator.getValue());
        } catch (error) {
          updateDisplay(error.message);
        }
          currentInput = '';
        }
        break;

      case 'x!':
        if (!isNaN(numInput)) {
          const command = new FactorialCommand(numInput);
        try {
          calculator.executeCommand(command);
          updateDisplay(calculator.getValue());
        } catch (error) {
          updateDisplay(error.message);
        }
          currentInput = '';
        }
        break;


      case 'AC':
        calculator.clear();
        currentInput = '';
        pendingOperation = null;
        savedValue = null;
        updateDisplay(0);
        break;

      default:
        break;
      }
    }
  });
});


