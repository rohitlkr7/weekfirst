function toggleHidden() {
  const hidden = document.getElementById("hidden-element");
  if (hidden.style.display === "none") {
    hidden.style.display = "block";
  } else {
    hidden.style.display = "none";
  }
}
