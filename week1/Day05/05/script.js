let car = {
  brand: "Tesla",
  getBrand: function() {
    return this.brand;
  }
};

// Create a bound function
let boundGetBrand = car.getBrand.bind(car);

// Call the bound function
console.log(boundGetBrand());  // Output: "Tesla"
