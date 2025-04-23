const displayValue = document.querySelector('.display-value');
const helperButtons = document.querySelector('.helperButtons');
const numberButtons = document.querySelector('.numberButtons');

// Store variables
let currentValue = '';
let firstValue = '';
let secondValue = '';
let operatorType = '';

// Create an array of the number buttons
const numberButtonsArray = Array.from(numberButtons.querySelectorAll('button'));
const operatorButtonsArray = Array.from(helperButtons.querySelectorAll('.operator'));
const clearButton = helperButtons.querySelector('.clear');
const equalButton = helperButtons.querySelector('.equal');

// Event listeners for number buttons
numberButtonsArray.forEach(button => {
    button.addEventListener('click', () => {
        currentValue += button.textContent;
        displayValue.textContent = currentValue;
        if (operatorType === '') {
            firstValue = currentValue;
        } else {
            secondValue = currentValue;
        }
    });
});

// Event listeners for operator buttons
operatorButtonsArray.forEach(button => {
    button.addEventListener('click', () => {
        operatorType = button.textContent;
        currentValue = '';
    });
});

// Operation functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0 ? 'Error' : a / b);

const operate = (a, operatorType, b) => {
    if (operatorType === '+') {
        return add(a, b);
    } else if (operatorType === '-') {
        return subtract(a, b);
    } else if (operatorType === 'x') {
        return multiply(a, b);
    } else if (operatorType === '/') {
        return divide(a, b);
    }
};

// Event listener for equal button
equalButton.addEventListener('click', () => {
    if (operatorType === '' || firstValue === '' || secondValue === '') {
        displayValue.textContent = 'Error';
        currentValue = '';
        operatorType = '';
        firstValue = '';
        secondValue = '';
    } else {
        displayValue.textContent = operate(parseInt(firstValue), operatorType, parseInt(secondValue));
    }
});

// Event listener for clear button
clearButton.addEventListener('click', () => {
    displayValue.textContent = '0';
    currentValue = '';
    operatorType = '';
    firstValue = '';
    secondValue = '';
});
