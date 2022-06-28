interface Human {
  name: string;
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
