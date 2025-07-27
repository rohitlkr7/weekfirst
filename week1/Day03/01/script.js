// Declare global variable
let age = 25;

// Function in global context
function displayAge() {
  console.log("Display Age (Global):", age);
}

// Function execution context that modifies the global variable
function changeAge() {
  age = 30; // Updates global age
  console.log("Age after changeAge():", age);
}

// Call functions
displayAge();   // Should log 25
changeAge();    // Changes to 30
displayAge();   // Should now log 30
