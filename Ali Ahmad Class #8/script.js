// script.js
function calculate() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let operator = prompt("Enter the operator (+, -, *, /):");
    let num2 = parseFloat(prompt("Enter the second number:"));
    let result;

    // Perform the calculation based on the operator
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = 'Cannot divide by zero';
        }
    } else {
        result = 'Invalid operator';
    }

    // Display the result in the console
    console.log("Result: " + result);
}

calculate(); // Call the function to start the calculation
