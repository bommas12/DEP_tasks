//https://www.codewars.com/kata/5421c6a2dda52688f6000af8/train/javascript
function compose(f, g) {
    return (...args) => f(g(...args));
}


const addOne = (num) => num + 1;
const addTwo = (num) => num + 2;
console.log(compose(addOne, addTwo)(1));//expected 4
