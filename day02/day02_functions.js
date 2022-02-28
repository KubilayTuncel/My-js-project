//Fonksiyonlar

function sum() {
  var num1 = 10;
  var num2 = 20;
  var num3 = 30;
  var total = num1 + num2 + num3;
  return total;
}

console.log(sum());

function negative() {
  var num1 = 10;
  var num2 = 20;
  var total = num2 - num1;
  return total;
}
console.log(negative());

//fonksiyonu caagirip farkli bir degiskende cagirmak

const mySum = sum() + 100;

console.log(mySum);

//fonksiyonu parametre ve return ile cagirmak

function diff(num1, num2) {
  return num1 - num2;
}

console.log(diff(100, 50));

//fonsiyonlari 2 sekilde tanimlayip cagirabiliyoruz
//1. direk tanimlama ve cagirma
//2. fonsiyonu bir degisken ile tanimlayip cagirma

function square(num) {
  return num * num;
}

console.log(square(8));

const squareofNumber = function square(num) {
  return num * num;
};

console.log(squareofNumber(8));
