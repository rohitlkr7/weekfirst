function startTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task A completed");
    }, 1000); // 1 second delay
  });
}

function processTask(inputFromA) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task B processed: ${inputFromA}`);
    }, 1500); // 1.5 second delay
  });
}

function finalizeTask(inputFromB) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Final result: ${inputFromB}`);
    }, 500); // 0.5 second delay
  });
}

startTask()
  .then(resultA => {
    console.log(resultA); 
    return processTask(resultA);
  })
  .then(resultB => {
    console.log(resultB);
    return finalizeTask(resultB);
  })
  .then(resultC => {
    console.log(resultC); 
  })
  .catch(error => {
    console.error(" Error occurred:", error);
  });
