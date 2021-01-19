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
        '+': (number1, number2) => number1 + number2,
        '-': (number1, number2) => number1 - number2,
        '*': (number1, number2) => number1 * number2,
        '/': (number1, number2) => {
            if (Number(number2) === 0) {
                throw new Error("number2 can't be zero");
            }
            return number1 / number2;
        },

    }

    return operators[operation](value1, value2);
}

console.log(basicOp('+', 4, 7)); //expected 11
console.log(basicOp('-', 15, 18)); //expected -3
console.log(basicOp('*', 5, 5)); //expected 25
console.log(basicOp('/', 49, 7)); //expected 7
function test() {
    try {
        let result = basicOp('/', 49, 0); //expected to throw error
        console.log(result);
    }
    catch (e) {
        console.error(e.message);
    }

}

test();//execution test expecting to console error message
