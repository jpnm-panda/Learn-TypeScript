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
