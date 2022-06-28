interface Nameable {
  name: string;
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
  constructor(public name: string, public age: number, experience: number) {}
  greeting(message: string): void {
    console.log("Hello !");
  }
}

const user: Human = new Developer("Junya", 38, 3);
