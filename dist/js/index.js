"use strict";
//Annotation
let x = 50;
let firstName = "Hao";
let isAdmin = true;
//Inferencia
let y = 15;
//Array
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
//Tuplas
let myTuple;
//Os valores inseridos tem que seguir a ordem
myTuple = [5, "teste", ["a", "b"]];
// Object Literals -> {prop: value}
const user = {
    name: "Renan",
    age: 18
};
//Any - Pode-se mudar para qualquer tipo de dado
let a = 0;
a = "teste";
a = true;
// Union Type
let id = "10";
id = 200;
const userId = 10;
const productId = "teste";
const isUserAdmin = true;
//Enum
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.G
};
