//https://www.codewars.com/kata/5655c60db4c2ce0c2e000026/train/javascript
function composeMultiple(...args) {
    return (param) => args.reduceRight((result, fun) => {
        result = fun(result);
        return result;
    }, param);
}



const addOne = (num) => num + 1;
const addTwo = (num) => num + 2;
const answer = composeMultiple(addOne, addTwo)(1);

console.log(answer);//expected 4
