//https://www.codewars.com/kata/53844152aa6fc137d8000589/train/javascript

function always(num) {
    return () => num;
}

console.log(always(10)());//expected 10
const three = always(3);
console.log(three());//expected 3

const truth = always(true);
console.log(truth());//expected true
const infinity = always(Infinity);
console.log(infinity());//expected Infinity
