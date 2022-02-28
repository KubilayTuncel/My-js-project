//ARRAYS
var friendsList = ["Can", "Ece", "Ali", "Naz"];

console.log(friendsList);

//1) push() : Array'in sonuna data ekleme

friendsList.push("Sinan");
console.log(friendsList);

//2) unshift() : Array'in basina data ekler
friendsList.unshift("Derya");
console.log(friendsList);

//3) pop() : Son datayi siler.

friendsList.pop();

console.log(friendsList);

//4) shift() : ilk datayi siler.

friendsList.shift();
console.log(friendsList);

var ages = [10, 20, 30, 40, 50, 30, 60, 30];

//5) indexOf(item,from) :

console.log(ages.indexOf(20));

console.log(ages.indexOf(30, 3));
//30 rakami ikinci defa 3 indexten sonra kacinci indexte var
//return -1 eslesme yok demek
console.log(ages.indexOf(20, 3));

//6) lastindexof() :
console.log(ages.lastIndexOf(30));

//7) includes (item, starting index)
console.log(ages.includes(40, 3));
console.log(ages.includes(30));
console.log(ages.includes(70));
