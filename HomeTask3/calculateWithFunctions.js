//https://www.codewars.com/kata/calculating-with-functions
/**
 * 
 * @param {number} num the number passed to return calculated value
 * @param {function} func the function that needs to executed with num default value returns number
 * 
 * @throws {error} if the return number accepts number function again like zero
 */
const returnNumber = (num1, func = (num2) => num2) => {
    if (typeof func != "function") {
        throw new Error("Operator not found between numbers");
    }
    return func(num1);
}

function zero(fun) {
    return returnNumber(0, fun);
}

function one(fun) {
    return returnNumber(1, fun);
}

function two(fun) {
    return returnNumber(2, fun);
}

function three(fun) {
    return returnNumber(3, fun);
}

function four(fun) {
    return returnNumber(4, fun);
}

function five(fun) {
    return returnNumber(5, fun);
}

function six(fun) {
    return returnNumber(6, fun);
}

function seven(fun) {
    return returnNumber(7, fun);
}

function eight(fun) {
    return returnNumber(8, fun);
}

function nine(fun) {
    return returnNumber(9, fun);
}

/**
 * 
 * @param {number} number2 the number you want to add to another number
 * @returns {function} the function which takes number1 as inputs and adds with number1 
 */
function plus(number2) {
    return (number1) => number1 + number2;
}

/**
 * 
 * @param {number} number2 the number you want to add to another number
 * @returns {function} the function which takes number1 as inputs and adds with number1 
 */
function minus(number2) {
    return (number1) => number1 - number2;
}


/**
 * 
 * @param {number} number2 the number you want to add to another number
 * @returns {function} the function which takes number1 as inputs and adds with number1 
 */
function times(number2) {
    return (number1) => number1 * number2;
}


/**
 * 
 * @param {number} number2 the number you want to add to another number 
 * @returns {function} the function which takes number1 as inputs and adds with number1 
 */
function dividedBy(number2) {
    return (number1) => {
        if (number2 == 0) {
            throw new Error("divisor can't be zero results in infinity");
        }
        return number1 / number2;
    }
}



function demonstration() {
    try {
        console.log(seven(times(five())));//expected 35
        console.log(times(five()));//expected anonymus function

        console.log(times(five(five())));//throws error Operator not found between numbers

        console.log(five(dividedBy(zero())));//throws divisor can't be zero
    }
    catch (e) {
        console.error(e.message);
    }
}

demonstration();