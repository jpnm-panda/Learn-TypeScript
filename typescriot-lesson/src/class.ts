abstract class Person {
  // // 明示的に書かなくてもデフォルトでpublic になっている
  // public name: string;

  // // private をつけるとclass の外からアクセスすることができなくなる
  // private age: number;

  // constructor(initName: string, initAge: number) {
  //   this.name = initName;
  //   this.age = initAge;

  // // class の初期化部分は省略できる
  // constructor(public readonly name: string, private age: number) {
  //   // constructor メソッドの中だと書き換えはできる
  //   this.id = 32;
  // }

  // this: を設定することで、greeting を呼び出したobject にname がるか確認できる
  // greeting(this: { name: string }) {
  //   console.log(`Hello! My name is ${this.name} !!`);
  // }

  static species = "Homo sapiens";
  static isAdult(age: number) {
    if (age > 17) return true;
    return false;
  }

  // readonly をつけると値の書き換えができなくなる
  readonly id: number = 31;

  // private 修飾子の場合、継承先のclass でも値を参照できなくなるが、protected なら参照可能
  constructor(public readonly name: string, protected age: number) {
    // constructor メソッドの中だと書き換えはできる
    this.id = 32;
  }

  incrementAge() {
    this.age += 1;
  }

  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name} . I am ${this.age} years old`);
    this.explainJob();
  }

  abstract explainJob(): void;
}

// abstract Class はインスタンスを作成できない
// const junya = new Person("Junya", 27);

// console.log("junya", junya);
// junya.incrementAge();
// junya.greeting();

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

class Teacher extends Person {
  private static instance: Teacher;
  explainJob(): void {
    console.log(`I am a teacher I teach ${this.subject}. `);
  }
  get subject() {
    if (!this._subject) {
      throw new Error("There is no subject.");
    }
    return this._subject;
  }

  set subject(value) {
    if (!this._subject) {
      throw new Error("There is no subject.");
    }
    this._subject = value;
  }
  private constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }

  greeting(this: Teacher) {
    console.log(
      `Hello! My name is ${this.name} . I am ${this.age} years old. I teach ${this.subject}`
    );
  }

  static getInstance() {
    if (Teacher.instance) return Teacher.instance;
    Teacher.instance = new Teacher("Jun", 38, "Math");
    return Teacher.instance;
  }
}

// const teacher = new Teacher("Jun", 38, "Math");
const teacher = Teacher.getInstance();
const teacher2 = Teacher.getInstance();

console.log("teacher.subject", teacher.subject);
teacher.subject = "Music";
console.log("teacher.subject", teacher.subject);
teacher.greeting();

console.log(Person.species);
console.log(Person.isAdult(27));
console.log(Teacher.species);
console.log(Teacher.isAdult(38));

console.log("teacher", teacher);
console.log("teacher2", teacher2);
