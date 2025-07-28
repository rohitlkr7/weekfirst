function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Original object
const original = {
  name: "Alice",
  hobbies: ["reading", "traveling"]
};

// Create deep clone
const clone = deepClone(original);

// Modify the clone
clone.hobbies.push("coding");

// Log original and clone
console.log("Original:", original);
console.log("Clone:", clone);
