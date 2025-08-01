// arr = ["apple","banana", "cherry"];

// function searchInput(fruits){

// }


// // reduce 

// arr = [2,3,4,5,6,7,8,9,10];

// let newarr = arr.reduce((acc,curr)=>{
//     return acc +curr;
// },10)

// console.log(newarr);

// let parent = document.getElementById("container");
// let child = document.getElementById("missing");
// parent.removeChild(child);

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("An error occurred");
  }, 1000);
});

promise.then((result) => {
  console.log(result);
});


promise1
  .then(() => promise2)
  .then(() => promise3)
  .then(() => console.log("All done"))
  .catch(() => console.log("Error caught"));




