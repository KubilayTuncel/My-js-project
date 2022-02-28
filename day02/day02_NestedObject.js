//Nested Object

/*

fName: Ali -> String
age : 25 ->Number
isEmployed : true ->Boolean
address: 
   street: 767 5th Ave
   city: NYC
   state : New York
 hobbies : swimming, running, hunting  -> Array  

*/

const person = {
  fName: "Ali",
  age: 25,
  isEmployed: true,
  address: { street: "767 5th Ave", city: "NCY", state: "New York" },
  hobbies: ["swimming", "running", "hunting"],
};

console.log(person);

console.log(person.address);
console.log(person.fName);
console.log(person.address.city);
console.log(person.hobbies);
console.log(person.hobbies[0]);
