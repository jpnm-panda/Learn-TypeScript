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
    age: 21
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
    size: CoffeeSize.SHORT
};
