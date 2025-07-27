function createCounter() {
  let count = 0; // Private variable

  return {
    increment: function () {
      count += 1;
      return count;
    },
    getCount: function () {
      return count;
    }
  };
}

// Usage
const counter = createCounter();

console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.getCount());  // Output: 2

// Trying to access `count` directly will fail:
console.log(counter.count); // Output: undefined
