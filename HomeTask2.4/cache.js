//https://www.codewars.com/kata/525481903700c1a1ff0000e1/train/javascript
function cache(func) {
    const cachedValues = new Map();
    return (...args) => {
        //generates the key from arguments
        const key = args.reduce((ivalue, arg) => {
            ivalue += JSON.stringify(arg) + ",";
            return ivalue;
        }, "")

        let result;
        if (cachedValues.has(key)) {
            //if the value is cached
            result = cachedValues.get(key);
            console.log(`result found retrieving cached value`);
        }
        else {
            //if the value isn't cached
            result = func(...args);
            cachedValues.set(key, result);
            console.log(`result not found caching values`);
        }
        return result;
    }
}

const add = (num1, num2) => num1 + num2;

const addCache = cache(add);

console.log(addCache(1, 2));//expected to log the log in else statement
console.log(addCache(1, 2));//expected to log the log in if statement

console.log(addCache(2, 1));//expected to log the log in else statement
