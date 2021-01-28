function isSantaClausable(obj) {
    const FUNCTIONS = ["sayHoHoHo", "distributeGifts", "goDownTheChimney"];
    return FUNCTIONS.every(methodName => typeof obj[methodName] === "function");//checks every fucntionName in FUNCTIONS exists in object
}

const santa = {
    sayHoHoHo: function () { console.log('Ho Ho Ho!') },
    distributeGifts: function () { console.log('Gifts for all!'); },
    goDownTheChimney: function () { console.log('*whoosh*'); }
};
const notSanta = {
    sayHoHoHo: function () { console.log('Oink Oink!') }
};

console.log(isSantaClausable(santa));//true
console.log(isSantaClausable(notSanta));//true
