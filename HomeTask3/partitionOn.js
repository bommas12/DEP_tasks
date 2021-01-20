/**
 * 
 * @param {number} predicate the condition on which partioning should be done on
 * @param {array} array the array that needs to be partitioned
 * 
 * @returns {number} boundary- the index of the second partition's first element
 */
function partitionOn(predicate, array) {
    let truths = [], falses = [];
    array.forEach(item => {
        if (predicate(item)) {
            truths.push(item);
        }
        else {
            falses.push(item);
        }
    })
    array.splice(0, array.length);
    array.push(...falses, ...truths);
    return falses.length;
}

/**
 * demonstartion
 */
let items = [1, 2, 3, 4, 5, 6];
function isEven(n) { return n % 2 == 0 }

let boundary = partitionOn(isEven, items);

console.log(boundary);//expected 3
console.log(items.slice(0, boundary))//expected [1, 3, 5]
console.log(items.slice(boundary))//expected [2, 4, 6]