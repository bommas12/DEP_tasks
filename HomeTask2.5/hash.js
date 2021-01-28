Object.prototype.hash = function (string) {
    const strings = string.split(`.`);
    const value = strings.reduce((obj, curString, i, arr) => {
        if (!obj[curString]) {
            arr.splice(i);//breaking the reduce once the obj[curString] becomes undefined
        }
        return obj[curString];
    }, this);
    return value;
}
const testObj = {
    person: {
        name: 'joe',
        history: {
            hometown: 'bratislava',
            bio: {
                funFact: 'I like fishing.'
            }
        }
    }
};
console.log(testObj.hash('person.name'));//joe
console.log(testObj.hash('person.game.home'));//undefined