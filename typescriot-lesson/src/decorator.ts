function Logging(message: string) {
  console.log("Logging  Factory");
  return function (constructor: Function) {
    console.log(message);
    console.log(constructor);
  };
}

// function Logging(constructor: Function) {
//   console.log("Logging...");
// }

function Component(template: string, selector: string) {
  console.log("Component  Factory");
  return function <T extends { new (...args: any[]): { name: string } }>(
    constructor: T
  ) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        const mountedElement = document.querySelector(selector);
        const instance = new constructor();
        console.log("Component");

        if (mountedElement) {
          mountedElement.innerHTML = template;
          mountedElement.querySelector("h1")!.textContent = instance.name;
        }
      }
    };
  };
}

@Component("<h1>{{ name }}</h1>", "#app")
@Logging("Logging User")
class User {
  name = "Junya";
  age = 28;
  constructor(private _age: number) {
    console.log("User was created!");
  }
}

const user1 = new User(28);
const user2 = new User(28);
const user3 = new User(28);
