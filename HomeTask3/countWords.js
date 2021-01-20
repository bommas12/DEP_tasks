/**
 * Counts the words a given string contains
 * @param {string} str string in which the function should count words
 * @returns {number} the number of words the string contain
 * 
 * @example countWords("Hello\nworld") return 2 
 */
function countWords(str) {
    let strings = str.split(/\s/);
    strings = strings.filter((ele) => ele !== "");
    return strings.length;
}


console.log(countWords("Hello world     "));//expected 2
console.log(countWords("Hello\nworld"));//expected 2
console.log(countWords("With! Symbol@ #Around! (Every) %Word$"));//expected 5
console.log(countWords(""));//expected 0
console.log(countWords("Dear   Victoria, I love  to press   space button."));//expected 8