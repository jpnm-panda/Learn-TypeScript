function copy<T extends { name: string }, U extends keyof T>(
  value: T,
  key: U
): T {
  value[key];
  return value;
}
// console.log(copy<String>("hello"));

// 引数の値から型を推論することもできる
console.log(copy({ name: "junya", age: 38 }, "age"));

type K = keyof { name: string; age: number };

class LightDatabase<T extends string | number | boolean> {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  get() {
    return this.data;
  }
}

const stringLightDatabase = new LightDatabase<string>();

stringLightDatabase.add("Apple");
stringLightDatabase.add("Banana");
stringLightDatabase.add("Grape");
stringLightDatabase.remove("Banana");
console.log(stringLightDatabase.get());

interface TmpDatabase<T> {
  id: number;
  data: T[];
}

const tmpDatabase: TmpDatabase<number> = {
  id: 3,
  data: [32],
};

interface Todo {
  title: string;
  text: string;
}

// すべてオプショナルパラメーターになる
type TodoAble = Partial<Todo>;

// すべてReadonly になる
type ReadTodo = Readonly<Todo>;

const fetchData: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("hello");
  }, 3000);
});

fetchData.then((data) => {
  data.toUpperCase;
});

// ここのArray に設定する型も実はジェネリクス
const vegetables: Array<string> = ["Tomato", "Broccoli", "Asparagus"];

interface ResponseData<T extends { message: string } = any> {
  data: T;
  status: number;
}
let tmpRes: ResponseData;

// type MappedTypes = {
//   [P in 'tomato' | 'pumpkin']: P
// }

interface Vegetables {
  readonly tomato: string;
  readonly pumpkin: string;
}

type MappedTypes = {
  -readonly [P in keyof Vegetables]?: P;
};
