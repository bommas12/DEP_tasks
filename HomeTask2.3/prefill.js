//https://www.codewars.com/kata/54129112fb7c188740000162/train/javascript
const isInt = (num) => num % 1 === 0;
const isPostive = (num) => num >= 0;

function prefill(arrlen, value) {
    const ALLOWED_TYPES = ['string', 'number'];
    const arrlenNumber = Number(arrlen);
    if (ALLOWED_TYPES.includes(typeof arrlen) && isInt(arrlenNumber) && isPostive(arrlenNumber)) {
        return new Array(arrlenNumber).fill(value);
    }
    else {
        throw new TypeError(`${arrlen} is invalid`);
    }
}

try {
    console.log(prefill('1', 1));//expected [1]
    console.log(prefill('2', 1));//expected [1,1]
    console.log(prefill(3, "abc"));//expected ["abc","abc","abc"]
    console.log(prefill(5.2, 1));//throws error for arrlen=float value
}
catch (e) {
    console.log(e.message);//catches error for arrlen=boolean,negative,Infinity,float values
}