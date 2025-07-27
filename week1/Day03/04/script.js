const userProfile = {
  name: "Alice",
  age: 28,

  details() {
    return `${this.name} is ${this.age} years old.`;
  },

  updateAge(newAge) {
    if (typeof newAge !== "number" || newAge <= 0) {
      console.log("❌ Invalid age.");
      return;
    }

    this.age = newAge;
    console.log(`✅ Age updated. ${this.details()}`);
  }
};

// 🧪 Test Cases
userProfile.updateAge(30);               // Should log updated details
console.log(userProfile.details());      // Should return: "Alice is 30 years old."
userProfile.updateAge(-5);               // Should show "Invalid age."
