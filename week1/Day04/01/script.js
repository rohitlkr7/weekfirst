// Define the outer function
function outerFunction() {
  const message = "Hello from the closure!";

  // Inner function forms a closure over `message`
  function innerFunction() {
    console.log(message);
  }

  return innerFunction;
}

// Store the returned function (closure) in a variable
const myClosure = outerFunction();

// Invoke the closure
myClosure();  // Output: "Hello from the closure!"
