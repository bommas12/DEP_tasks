//https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/javascript
function add(n) {
    const fn = function (x) {
        return add(n + x);
    };

    fn.valueOf = function () {
        return n;
    };

    return fn;
}

console.log(add(1) == 1);//expected true
console.log(add(1)(2)(3) == 6);//expected true
console.log(add(1)(5)(7) == 13);//expected true