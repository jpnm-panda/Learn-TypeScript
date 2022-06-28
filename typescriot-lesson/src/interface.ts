// type addFunc = (num1: number, num2: number) => number;
interface addFunc {
  (num1: number, num2: number): number;
}

let addFunc: addFunc;

addFunc = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Nameable {
  name?: string;
  nikName?: string;
}

interface Human extends Nameable {
  // Nameable を継承しているので、name は書かなくて良い
  // name: string
  age: number;
  greeting(message: string): void;
}

const human: Human = {
  name: "Junya",
  age: 27,
  greeting(message: string) {
    console.log(message);
  },
};

class Developer implements Human {
  name?: string;
  constructor(public age: number, experience: number, initName?: string) {
    if (initName) {
      this.name = initName;
    }
  }
  greeting(message: string): void {
    console.log("Hello !");
  }
}

const user: Human = new Developer(38, 3, "Junya");
