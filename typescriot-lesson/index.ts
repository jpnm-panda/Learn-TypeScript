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

let clothSize: "small" | "medium" | "large" = "small";
console.log(clothSize);
