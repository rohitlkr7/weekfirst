function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5; // Randomly true or false
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Network error occurred.");
      }
    }, 1000); // Simulate 1-second network delay
  });
}

async function fetchDataHandler() {
  try {
    const result = await fetchData();
    console.log("✅", result);
  } catch (error) {
    console.log("❌ Error fetching data:", error);
  }
}
