

// //Annotation
// let x: number = 50;
// let firstName: string = "Hao";
// let isAdmin: boolean = true;

// //Inferencia
// let y = 15;

// //Array
// const myNumbers: number[] = [1, 2, 3];

// console.log(myNumbers);
// console.log(myNumbers.length);

// //Tuplas
// let myTuple: [number, string, string[]]
// //Os valores inseridos tem que seguir a ordem
// myTuple = [5,"teste",["a","b"]];

// // Object Literals -> {prop: value}
// const user: {name: string, age: number} = {
//     name: "Renan",
//     age: 18
// }

// //Any - Pode-se mudar para qualquer tipo de dado
// let a: any = 0;
// a = "teste";
// a = true;

// // Union Type
// let id: string | number = "10";

// id = 200;

// //id = true;

// //Type alias - Pode-se criar variáveis com o tipo colocado nessa variável
// type myIdType = number | string | boolean
// const userId: myIdType = 10;
// const productId: myIdType = "teste";
// const isUserAdmin: myIdType = true;

// //Enum
// enum Size {
//      P = "Pequeno",
//      M = "Médio",
//      G = "Grande"
// }

// const camisa = {
//     name: "Camisa gola V",
//     size: Size.G
// }

// //Literal Types - Só aceita o valor predefinido
// let teste: "autenticado" | null;
// teste = null;
// teste = "autenticado";

// //Funções
// function sum(a: number, b: number) {
//     return a + b;
// }
// console.log(sum(12,12));


// function sayHelloTo(name: string): string {//Só vai aceitar nessa função o tipo string
//     return `Hello, ${name}`
// }
// console.log(sayHelloTo("Renan"));


// //Não retorna nada, então coloca-se o void
// function logger(msg: string): void {
//     console.log(msg);
// }
// logger("Teste");

// //Quando usar o "?", significa que a variável pode ou não pode receber um valor
// function greeting(name: string, greet?: string): void {
//     if(greet) {
//         console.log(`Olá, ${greet} ${name}`);
//         return;
//     }
//     console.log(`Olá, ${name}`); 
// }
// greeting("Renan");
// greeting("Pedro","Sir");


// //Interfaces
// interface MathFunctionParams {
//     n1: number,
//     n2: number
// }

// function sumNumbers(nums: MathFunctionParams) {
//     return nums.n1 + nums.n2
// }

// console.log(sumNumbers({n1: 1, n2: 2}));

// function multiplyNumbers(nums: MathFunctionParams) {
//     return nums.n1 * nums.n2
// }

// const someNumbers:MathFunctionParams = {
//     n1: 5,
//     n2: 10
// }
// console.log(multiplyNumbers(someNumbers));


// // Narrowing - Checagem de tipos
// function doSomething(info: number | boolean) {
//     if(typeof info === "number") {
//         console.log(`O número é ${info}`);
//         return;
//     }
//     console.log("Não foi passado um número");
// }
// doSomething(5);
// doSomething(true);


// // Generics
// function showArrayItems<T>(arr: T[]) { //Dizendo que vai ser um array de qualquer tipo
//     arr.forEach((item) => {
//         console.log(`Item: ${item}`)
//     })
// }

// const a1 = [1, 2, 3];
// const a2 = ["1","2","3"];

// showArrayItems(a1);
// showArrayItems(a2);


//Classes
class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }

    showUserName() {
        console.log(`O nome do usuário é ${this.name}`)
    }

    showUserRole(canShow: boolean) {
        if(canShow) {
            console.log(`Função do Usuário é: ${this.role}`);
            return
        }
        console.log("Informação Restrita");
    }
}

const zeca = new User("Zéca", "Admin", true);
console.log(zeca);

zeca.showUserName();
zeca.showUserRole(true);


//Interfaces em classes
interface IVehicle {
    brand: string
    showBrand(): void
}

class Car implements IVehicle {

    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`);
    }

}

const fusca = new Car("VW", 4);
fusca.showBrand();


//Herança
class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels)
        this.engine = engine;
    }
}

const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();


//Decorators
function baseParameters() {
    return function<T extends {new (...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        }
    }
}

@baseParameters()

class Person {
    name

    constructor(name: string) {
        this.name = name;
    }
}

const sam = new Person("Sam");
console.log(sam);



