//10) concat() : Arraylari birlestirir

var drinks = ["coke", "water", "fanta", "ayran"];
var kebaps = ["adana", "urfa", "ciger", "patlican"];

var shoppingList = drinks.concat(kebaps);
console.log(shoppingList);

//11) reverse():
var numbers = [1, 2, 3, 4, 5, 6, -7, -8];
console.log("Orginal List : " + numbers);
console.log("Reversed List : " + numbers.reverse());

//12)sort(): kucukten buyuge siralama
console.log("sirali List : " + numbers.sort());

//13) sort+reverse
console.log("buyukten kucuge siralama : " + numbers.sort().reverse());
