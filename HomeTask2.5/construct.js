function construct(classRef) {
    const fn = classRef.bind.apply(classRef, arguments);
    return new fn();
}
function Greeting(name) {
    this.name = name;
}
const greet = construct(Greeting, "Javascript");
console.log(greet.name);//Javascript
console.log(greet instanceof Greeting);//true