let student = {
  name: "Alice",
  age: 22,
  course: "Computer Science"
};

let jsonString = JSON.stringify(student, null, 2);  // 'null, 2' is used for pretty formatting
console.log(jsonString);
