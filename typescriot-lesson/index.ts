let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = "hello";
let double: string = "hello";
let back: string = `hello`;

const all = [hasValue, count, float, negative, single, double, back];
console.log(all);

const person: {
  name: string;
  age: number;
} = {
  name: "Jack",
  age: 21,
};
console.log(person.name);

const fruits: string[] = ["Apple", "Banana", "Grape"];
console.log(fruits);

const book: [string, number, boolean] = ["business", 1500, false];
console.log(book);

enum CoffeeSize {
  SHORT = "SHORT",
  TALL = "TALL",
  GRANDE = "GRANDE",
  VENTI = "VENTI",
}

const coffee = {
  hot: true,
  size: CoffeeSize.SHORT,
};

console.log(coffee);

let anything: any = true;
anything = "hello";
anything = ["hello", 33, true];
anything.fjiafja = "fijffi";
let banana = "banana";
banana = anything;

let unionType: number | string = 10;
console.log(unionType);
unionType = "hello";
console.log(unionType);
let unionTypeArray: (number | string)[] = [21, "hello"];
console.log(unionTypeArray);

const apple: "apple" = "apple";
console.log(apple);

let clothSize1: "small" | "medium" | "large" = "small";
console.log(clothSize1);

type ClothSize = "small" | "medium" | "large";

let clothSize2: ClothSize = "medium";
console.log(clothSize2);

function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(1, 2);

function sayHello(): void {
  console.log("Hello!");
}
console.log(sayHello());

// let tmpUndefined: undefined = undefined;
// tmpUndefined = null;

// let tmpNull: null = null;
// tmpNull = undefined;

const anotherAdd: (num1: number, num2: number) => number = add;

console.log(anotherAdd(1, 2));

const multiplied = (num1: number, num2: number): number => {
  return num1 * num2;
};

console.log(multiplied(1, 2));

const doubleNumber = (num: number): number => num * 2;
console.log(doubleNumber(2));

function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num * 2);
  console.log(doubleNum);
  console.log(num * 2);
}
doubleAndHandle(21, (doubleNum) => {
  return doubleNum;
});

let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = "hello";
unknownInput = 21;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === "string") {
  text = unknownInput;
}

function error(message: string): never {
  throw new Error(message);
}

console.log(error("this is an error"));
