

//Annotation
let x: number = 50;
let firstName: string = "Hao";
let isAdmin: boolean = true;

//Inferencia
let y = 15;

//Array
const myNumbers: number[] = [1, 2, 3];

console.log(myNumbers);
console.log(myNumbers.length);

//Tuplas
let myTuple: [number, string, string[]]
//Os valores inseridos tem que seguir a ordem
myTuple = [5,"teste",["a","b"]];

// Object Literals -> {prop: value}
const user: {name: string, age: number} = {
    name: "Renan",
    age: 18
}

//Any - Pode-se mudar para qualquer tipo de dado
let a: any = 0;
a = "teste";
a = true;

// Union Type
let id: string | number = "10";

id = 200;

//id = true;

//Type alias - Pode-se criar variáveis com o tipo colocado nessa variável
type myIdType = number | string | boolean
const userId: myIdType = 10;
const productId: myIdType = "teste";
const isUserAdmin: myIdType = true;

//Enum
enum Size {
     P = "Pequeno",
     M = "Médio",
     G = "Grande"
}

const camisa = {
    name: "Camisa gola V",
    size: Size.G
}
