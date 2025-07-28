let user = {
  username: "john_doe",
  showUsername: function () {
    console.log("Method:", this.username);
  }
};

function displayUsername() {
  console.log("Function:", this.username);
}

// Call the method inside the object
user.showUsername();  // Output: Method: john_doe

// Call the regular function
displayUsername();    // Output: Function: undefined 
