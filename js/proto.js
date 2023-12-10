const objC = {
    c: "This is object C",
};

const objB = Object.create(objC);
objB.value = "This is object B";

const objA = Object.create(objB);
objA.number = 15;

console.log(objA);
console.log(objA.hasOwnProperty());