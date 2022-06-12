"use strict";
var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = "hello";
var double = "hello";
var back = "hello";
var all = [hasValue, count, float, negative, single, double, back];
console.log(all);
var person = {
    name: "Jack",
    age: 21,
};
console.log(person.name);
var fruits = ["Apple", "Banana", "Grape"];
console.log(fruits);
var book = ["business", 1500, false];
console.log(book);
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.SHORT,
};
console.log(coffee);
var anything = true;
anything = "hello";
anything = ["hello", 33, true];
anything.fjiafja = "fijffi";
var banana = "banana";
banana = anything;
var unionType = 10;
console.log(unionType);
unionType = "hello";
console.log(unionType);
var unionTypeArray = [21, "hello"];
console.log(unionTypeArray);
var apple = "apple";
console.log(apple);
var clothSize1 = "small";
console.log(clothSize1);
var clothSize2 = "medium";
console.log(clothSize2);
function add(num1, num2) {
    return num1 + num2;
}
add(1, 2);
function sayHello() {
    console.log("Hello!");
}
console.log(sayHello());
// let tmpUndefined: undefined = undefined;
// tmpUndefined = null;
// let tmpNull: null = null;
// tmpNull = undefined;
var anotherAdd = add;
console.log(anotherAdd(1, 2));
var multiplied = function (num1, num2) {
    return num1 * num2;
};
console.log(multiplied(1, 2));
var doubleNumber = function (num) { return num * 2; };
console.log(doubleNumber(2));
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
    console.log(num * 2);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
var unknownInput;
var anyInput;
var text;
unknownInput = "hello";
unknownInput = 21;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === "string") {
    text = unknownInput;
}
function error(message) {
    throw new Error(message);
}
console.log(error("this is an error"));
