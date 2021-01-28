function construct(Class) {
    const fn = Class.bind.apply(Class, arguments);
    return new fn();
}
function Greeting(name) {
    this.name = name;
}
const greet = construct(Greeting, "Javascript");
console.log(greet.name);//Javascript
console.log(greet instanceof Greeting);//true