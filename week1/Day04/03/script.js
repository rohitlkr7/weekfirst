function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable

  return {
    deposit: function (amount) {
      if (amount <= 0) {
        return "Deposit amount must be greater than 0.";
      }
      balance += amount;
      return balance;
    },
    withdraw: function (amount) {
      if (amount <= 0) {
        return "Withdraw amount must be greater than 0.";
      }
      if (amount > balance) {
        return "Insufficient funds.";
      }
      balance -= amount;
      return balance;
    },
    getBalance: function () {
      return balance;
    }
  };
}

// Usage Example:
const account = createBankAccount(100);

console.log(account.deposit(50));    // Output: 150
console.log(account.withdraw(30));   // Output: 120
console.log(account.getBalance());   // Output: 120

// Trying to access `balance` directly will fail:
console.log(account.balance); // Output: undefined
