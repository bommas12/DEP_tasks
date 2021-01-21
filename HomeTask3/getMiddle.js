//https://www.codewars.com/kata/get-the-middle-character
/**
 * Calculates and returns the middle part of string
 * @param {string} str the string from which you want the middle characters
 * 
 * @returns {string} middle string
 * @example getMiddle("test") returns "es", getMiddle("tests") returns "s"
 */
function getMiddle(str) {
    const strlen = str.length;
    const numberOfCharacters = strlen % 2 == 0 ? 2 : 1;
    const middleStr = str.substr((strlen - 1) / 2, numberOfCharacters);
    return middleStr;
}

console.log(getMiddle("test"));//expected "es"
console.log(getMiddle("testing"));//expected "t"
console.log(getMiddle("middle"));//expected "dd"
console.log(getMiddle("A"));//expected "A"
console.log(getMiddle(""));//expected ""