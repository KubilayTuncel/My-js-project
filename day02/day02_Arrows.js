//Anonymous Function(isimsiz fonksiyonlar)
var result = function (a, b, c) {
  return a + b + c;
};

console.log(result(1, 2, 3));

let info = function (firstName, lastName, Age) {
  console.log(firstName + " " + lastName + " " + Age);
};

info("Ali", "Can", 25);

//Arrow functions

function sum(a) {
  return a + 100;
}
//function kelimesini ve ismini sil
//parametre ve body arasina => isaretini koy
//eger tek parametre ise () isaretini silebilirsin
console.log(sum(10));

var arrow = (a) => a + 100;

console.log(arrow(20));

var arrow2 = (b, c) => b + c;
console.log(arrow2(25, 30));

//parametresiz fonksiyonlarda arrow

(a = 5), (b = 6);
function newSum() {
  return a + b + 100;
}
console.log(newSum());

var sum2 = (d = 10, e = 15) => d + e + 100;
console.log(sum2());

//Prizma Hacmi

var prism1 = function (a, b, c) {
  return a * b * c;
};
console.log(prism1(3, 4, 5));

var arrowPrism = (a, b, c) => a * b * c;

console.log(arrowPrism(3, 4, 5));
