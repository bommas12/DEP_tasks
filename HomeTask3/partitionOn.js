//https://www.codewars.com/kata/partition-on
/**
 * 
 * @param {number} predicate the condition on which partioning should be done on
 * @param {array} array the array that needs to be partitioned
 * 
 * @returns {number} boundary- the index of the second partition's first element
 */
function partitionOn(predicate, array) {
    const result = array.reduce((obj, item) => {
        if (predicate(item)) {
            obj["trueArray"].push(item);
        }
        else {
            obj["falseArray"].push(item);
        }
        return obj;
    }, {
        falseArray: [],
        trueArray: []
    })
    array.splice(0, array.length);
    const { falseArray, trueArray } = result;
    array.push(...falseArray, ...trueArray);
    return falseArray.length;
}

/**
 * demonstartion
 */
const items = [1, 2, 3, 4, 5, 6];
function isEven(n) { return n % 2 == 0 }

const boundary = partitionOn(isEven, items);

console.log(boundary);//expected 3
console.log(items.slice(0, boundary))//expected [1, 3, 5]
console.log(items.slice(boundary))//expected [2, 4, 6]