function personInfo() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}

// Object with name and age
const person = {
  name: "Alice",
  age: 25
};

// Call personInfo with 'person' as context
personInfo.call(person);
