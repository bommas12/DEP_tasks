//https://www.codewars.com/kata/closures-and-scopes/train/javascript
function createFunctions(n) {
    var callbacks = [];

    for (let i = 0; i < n; i++) {
        callbacks.push(function () {
            return i;
        });
    }

    return callbacks;
}

const callbacksArray = createFunctions(5);
callbacksArray.forEach((callbackFunction) => {
    console.log(callbackFunction());
})//expected to log 0,1,2,3,4
