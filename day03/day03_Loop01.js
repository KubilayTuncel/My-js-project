//Loops

//1)forLoop

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

//2)for of Loops
const iterable = [0, 1, 2, 3, 4, 5];
for (let a of iterable) {
  console.log(a);
}

const todo = [
  { id: 1, task: "meeting", isCompleted: true },
  { id: 2, task: "shopping", isCompleted: true },
  { id: 3, task: "doctor", isCompleted: true },
];
for (let i = 0; i < todo.length; i++) {
  console.log(todo[i]);
  console.log(todo[i].id);
  console.log(todo[i].task);
  console.log(todo[i].isCompleted);
}
//foreach loop
const myArray = [1, 2, 3, 4];
myArray.forEach(function (eachItem) {
  console.log(eachItem);
});
//arrow
myArray.forEach((eachItem) => console.log(eachItem));
