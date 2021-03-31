const { checkNumberOfArguments } = require('./utils');

const operations = {
    addition: (...argsArray) => argsArray.reduce((prev, cur) => prev + cur, 0),
    multiply: (...argsArray) => argsArray.reduce((prev, cur) => prev * cur, 1),
    subtraction: (...argsArray) => {
        checkNumberOfArguments(argsArray, `subtraction`);
        const [a, b] = argsArray;
        return a - b;
    },
    division: (...argsArray) => {
        const [a, b] = argsArray;
        checkNumberOfArguments(argsArray, `division`);
        if (b === 0) {
            throw new Error(`Divisor cannot be zero`);
        }
        return a / b;
    },
}

module.exports = operations;