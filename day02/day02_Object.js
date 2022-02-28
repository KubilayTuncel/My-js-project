//OBJECT{}
// Objectler data kaydetmek icin kullanilir
// { } ile olusturulur

var fName = "Ali";
var lName = "Can";
var age = 25;

var information = `${fName} ${lName} ${age}`;

console.log(information);

//person object
var person = {
  fName: "Ali",
  lName: "Can",
  age: 25,
  isEmployee: true,
};

console.log(person);

console.log(typeof person);

//Bilgileri cagirma
//1. yol
console.log(person.fName);
console.log(typeof person.lName);
console.log(typeof person.age);

//2.yol

console.log(person["fName"]);
console.log(person["lName"]);
