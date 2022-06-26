class Person {
  // 明示的に書かなくてもデフォルトでpublic になっている
  public name: string;

  // private をつけるとclass の外からアクセスすることができなくなる
  private age: number;

  constructor(initName: string, initAge: number) {
    this.name = initName;
    this.age = initAge;
  }

  // this: を設定することで、greeting を呼び出したobject にname がるか確認できる
  // greeting(this: { name: string }) {
  //   console.log(`Hello! My name is ${this.name} !!`);
  // }

  incrementAge() {
    this.age += 1;
  }

  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name} . I am ${this.age} years old`);
  }
}

const junya = new Person("Junya", 27);

console.log("junya", junya);
junya.incrementAge();
junya.greeting();

// const niseJunya = {
//   // this は呼び出される場所で参照先が変わる。ここでname を定義しないとniseJunya Object の中を参照しているのでundefined になる
//   name: "niseJunya",
//   anotherGreeting: junya.greeting,
// };
// niseJunya.anotherGreeting();

// const niseJunya = {
//   // this の方をPersonにしたので中身の構造を親クラスに合わせる
//   name: "niseJunya",
//   greeting: junya.greeting,
// };
// niseJunya.greeting();
