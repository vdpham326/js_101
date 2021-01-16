const readline = require('readline-sync');

console.log("Welcome to Calculator!");

// Ask the user for the first number.
console.log("What's the first number?");
let number1 = readline.question();

// Ask the user for the second number.
console.log("What's the second number?");
let number2 = readline.question();

console.log(`${number1} ${number2}`);
// Ask the user for an operation to perform.
console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();
// Perform the operation on the two numbers.
let output;
if (operation === '1') {
    output = Number(number1) + Number(number2);
} else if (operation === '2') {
    output = Number(number1) - Number(number2);
} else if (operation === '3') {
    output = Number(number1) * Number(number2);
} else if (operation === '4') {
    output = Number(number1) / Number(number2);
}

console.log(`The result is: ${output}`)
// Print the result to the terminal.
