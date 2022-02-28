//String

var myName = "Ali";
var myLesson = "JavaScript";

//Ali knows JavaScript

var word = "knows";

console.log(myName + " " + word + " " + myLesson);

//Ali `knows`Javascrip`
var message = myName + " knows " + myLesson;

word = "'knows'";
console.log(myName + " " + word + " " + myLesson);

//BackTick
//Stringleri daha dinamik birlestirmek icin kullanilir

var message = `${myName} knows ${myLesson}`;
console.log(message);