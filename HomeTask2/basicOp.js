/**
 * evaluates the expression formed with binary operator and numbers
 * @param {string} operation Any character from , '+','-','*','/'
 * @param {number} value1 number 1
 * @param {number} value2 number 2
 * @example basicOp('+', 4, 7)
 * 
 * @returns {number} evaluation of the expression
 */

function basicOp(operation, value1, value2) {
    const operators = {
        '+': (number1, number2) => {
            return number1 + number2;
        },
        '-': (number1, number2) => {
            return number1 - number2;
        },
        '/': (number1, number2) => {
            return number1 / number2;
        },
        '*': (number1, number2) => {
            return number1 * number2;
        }
    }

    return operators[operation](value1, value2);
}

console.log(basicOp('+', 4, 7)); //expected 11
console.log(basicOp('-', 15, 18)); //expected -3
console.log(basicOp('*', 5, 5)); //expected 25
console.log(basicOp('/', 49, 7)); //expected 7