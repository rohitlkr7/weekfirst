const checkout = {
  items: [],
  total: 0,

  addItem(item) {
    // Convert price to number if it's a string
    const price = typeof item.price === 'string' ? parseFloat(item.price) : item.price;

    if (typeof price !== 'number' || isNaN(price)) {
      console.log(`❌ Invalid price for item: ${item.name}`);
      return;
    }

    this.items.push({ ...item, price }); // Store coerced number
    this.total += price;
    console.log(`✅ Item added: ${item.name} - $${price.toFixed(2)}`);
  },

  getTotal() {
    return `Total: $${this.total.toFixed(2)}`;
  }
};

// 🧪 Test Cases
checkout.addItem({ name: "Coffee Maker", price: "99.95" });  // Should convert string to number
checkout.addItem({ name: "Milk", price: 3.50 });              // Valid item
checkout.addItem({ name: "Fake Item", price: "abc" });        // Invalid item

console.log(checkout.getTotal()); // Should return Total: $103.45
