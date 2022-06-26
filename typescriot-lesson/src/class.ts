class Person {
  name: string;

  constructor(initName: string) {
    this.name = initName;
  }

  // this: を設定することで、greeting を呼び出したobject にname がるか確認できる
  // greeting(this: { name: string }) {
  //   console.log(`Hello! My name is ${this.name} !!`);
  // }

  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name} !!`);
  }
}

const junya = new Person("Junya");

console.log("junya", junya);
junya.greeting();

// const niseJunya = {
//   // this は呼び出される場所で参照先が変わる。ここでname を定義しないとniseJunya Object の中を参照しているのでundefined になる
//   name: "niseJunya",
//   anotherGreeting: junya.greeting,
// };
// niseJunya.anotherGreeting();

const niseJunya = {
  // this の方をPersonにしたので中身の構造を親クラスに合わせる
  name: "niseJunya",
  greeting: junya.greeting,
};
niseJunya.greeting();
