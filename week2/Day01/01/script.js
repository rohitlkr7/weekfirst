function timer(duration, onComplete) {
  setTimeout(() => {
    const message = `Timer of ${duration} ms finished`;
    onComplete(message);
  }, duration);
}

// Call the timer for 2000ms (2 seconds)
timer(2000, function(message) {
  console.log(message);
});
