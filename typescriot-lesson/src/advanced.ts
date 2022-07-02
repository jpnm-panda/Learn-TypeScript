// type Engineer = {
//   name: string;
//   role: string;
// }

// type Blogger = {
//   name: string
//   follower: number;
// }

// type EngineerBlogger = Engineer & Blogger;
// const Junya: EngineerBlogger = {
//   name: 'junya',
//   role: 'front-end',
//   follower: 1000
// }

interface Engineer {
  name: string;
  role: string;
}

interface Blogger {
  name: string;
  follower: number;
}

interface EngineerBlogger extends Engineer, Blogger {}

const Junya: EngineerBlogger = {
  name: "junya",
  role: "front-end",
  follower: 1000,
};

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

// 関数の引数と返り値の形が複数ある場合は場合分けをリストかすることで、実行時の型を正確に定義できる。これを関数のオーバーロードという。
function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
// オーバーロードを使うと実装部分で書いた型注釈は無いことになるので、要注意（ここは明示的に書いてるけど型注釈は効いてない）
function toUpperCase(x: string | number) {
  if (typeof x === "string") return x.toUpperCase();

  return x;
}
const upperHello = toUpperCase("Hello");

interface OverloadFunction {
  (x: string): string;
  (x: number): number;
}

const overloadFunction = (x: string | number) => {
  return x === typeof "string" ? "hoge" : 0;
};

interface FuncA {
  (a: number, b: string): number;
  (a: string, b: number): number;
}

interface FuncB {
  (a: string): number;
}

let intersectionFunc: FuncA & FuncB;
intersectionFunc = function (a: number | string, b?: number | string) {
  return 0;
};

interface FuncC {
  (a: number): number;
}

interface FuncD {
  (a: string): string;
}

// 関数型でユニオン型をつくると、引数はインターセクション型（今回は、string とnumber でnever になっている）になり、戻り値はユニオン型になる。
let unionFunc: FuncC | FuncD;
// unionFunc('neverなので何も入れれない');

// 変数に関数を代入することで、引数をstring (number でもOK)に固定することができる
unionFunc = (a: string) => {
  return "hi";
};

// 固定した後は引数を入れられる
unionFunc("Yea");

type NomadWorker = Engineer | Blogger;

function describeProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name);

  if ("role" in nomadWorker) console.log(nomadWorker.role);

  if ("follower" in nomadWorker) console.log(nomadWorker.follower);
}

class Dog {
  kind: "dog" = "dog";
  speak() {
    console.log("bow-bow");
  }
}

class Bird {
  kind: "bird" = "bird";
  speak() {
    console.log("tweet-tweet");
  }
  fly() {
    console.log("flutter");
  }
}

type Pet = Dog | Bird;

// ここのPet をinterface にしてしまうとエラーになる。interface はコンパイル後に残らないため。
const havePet = (pet: Pet) => {
  pet.speak();
  switch (pet.kind) {
    case "bird":
      pet.fly();
  }
  if (pet instanceof Bird) pet.fly();
};
havePet(new Bird());

// getElementById はHTMLElement かnull の型を返すが、ここのinput はさらに具体的なHTMLInputElement を割り当てたいので、型アサーションを使って上書きする
// const input = <HTMLInputElement>document.getElementById("input");
const input = document.getElementById("input") as HTMLInputElement;
input.value = "initial input value";

// インデックスシグネチャーを使うと、プロパティの追加ができるようになるが、設定した型がプロパティの値全てに反映されるので要注意（ここだとstring）。
interface Designer {
  name: string;
  [index: string]: string;
}

const designer: Designer = {
  name: "Junua",
  role: "web",
};
console.log(designer.role);
// オブジェクトのプロパティは何を指定してもエラーがでなくなる
console.log(designer.hoge);

interface DownloadedData {
  id: number;
  user?: {
    name?: {
      firstName: string;
      lastName: string;
    };
  };
}

const downloadedData: DownloadedData = {
  id: 1,
};

console.log(downloadedData.user?.name?.lastName);

const userData = downloadedData.user ?? "no-user";
type id = DownloadedData["id"];
enum Color {
  RED,
  BLUE,
}
// enum 型とnumber 型は互換性がある
let target = 0;
let source = Color.RED;
target = source;

let func1 = function (a: string, b: string) {};
let func2 = function (a: string) {};
func1 = func2;

// private をつけたプロパティがあるとたとえ構造が同じでも代入ができない。AdvancedPerson のprivate で定義した値とAdvancedCar のprivate で定義したものは違うものとして扱われるから。
class AdvancedPerson {
  name: string = "Peter";
  // private age: number = 5;
}

class AdvancedCar {
  name: string = "Prius";
  // private age: number = 5;
}

let advancedPerson = new AdvancedPerson();
let advancedCar = new AdvancedCar();

advancedPerson = advancedCar;
