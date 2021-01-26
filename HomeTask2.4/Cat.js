//https://www.codewars.com/kata/53583765d5493bfdf5001b35/train/javascript
var Cat = (function () {
    let count = 0;
    let totalweight = 0;
    function CatConstructor(name, weight) {

        if (!name || !weight) {
            throw new Error("name or weight is not provided");
        }
        count++;
        totalweight += weight;
        this.name = name;
        this.weight = weight;
        Object.defineProperty(this, "weight", {
            get: function () {
                return weight || 0;
            },
            set: function (val) {
                totalweight = totalweight - weight + val;
                weight = val;
                return weight;
            }
        });
        CatConstructor.averageWeight = function () {
            return totalweight / count;
        }
    }
    return CatConstructor;
}());

const fluffy = new Cat('fluffy', 15);
const garfield = new Cat('garfield', 25);

console.log(fluffy.weight);//15
console.log(fluffy instanceof Cat);//true
console.log(fluffy.averageWeight);//undefined
console.log(typeof Cat.averageWeight);//function
console.log(Cat.averageWeight());//20