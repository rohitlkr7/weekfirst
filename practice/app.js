// ✅ User Insight Tracker Core Logic
const API_URL = "https://jsonplaceholder.typicode.com/users";

const allUsersContainer = document.getElementById("allUsers");
const cityFilter = document.getElementById("cityFilter");
const searchInput = document.getElementById("searchInput");
const trackedUsersContainer = document.getElementById("trackedUsers");
const trackBtn = document.getElementById("trackBtn");
const trackUserIdInput = document.getElementById("trackUserId");
const resetBtn = document.getElementById("resetBtn");
const autoRefreshToggle = document.getElementById("autoRefreshToggle");

let allUsers = [];
let trackedUsers = {}; 
const REFRESH_INTERVAL = 60; 

// 🔹 Fetch and render all users
async function fetchUsers() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    allUsers = data;
    renderAllUsers(data);
    populateCityFilter(data);
    loadFromLocalStorage();
  } catch (err) {
    console.error("Error fetching users:", err);
  }
}

function renderAllUsers(users) {
  allUsersContainer.innerHTML = "";
  users.forEach(user => {
    const card = document.createElement("div");
    card.className = "user-card";
    card.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>City:</strong> ${user.address.city}</p>
      <p><strong>Company:</strong> ${user.company.name}</p>
    `;
    allUsersContainer.appendChild(card);
  });
}

function populateCityFilter(users) {
  const cities = [...new Set(users.map(u => u.address.city))];
  cities.forEach(city => {
    const opt = document.createElement("option");
    opt.value = city;
    opt.textContent = city;
    cityFilter.appendChild(opt);
  });
}

// 🔹 Filter/search events

searchInput.addEventListener("input", () => {
  const term = searchInput.value.toLowerCase();
  const filtered = allUsers.filter(user => user.name.toLowerCase().includes(term));
  renderAllUsers(filtered);
});

cityFilter.addEventListener("change", () => {
  const city = cityFilter.value;
  const filtered = city ? allUsers.filter(u => u.address.city === city) : allUsers;
  renderAllUsers(filtered);
});

// 🔹 Track user by ID
trackBtn.addEventListener("click", () => {
  const id = parseInt(trackUserIdInput.value);
  if (!id || trackedUsers[id]) return;
  trackUserById(id);
});

function trackUserById(id) {
  fetch(`${API_URL}/${id}`)
    .then(res => {
      if (!res.ok) throw new Error("User not found");
      return res.json();
    })
    .then(user => {
      renderTrackedUser(user);
      saveToLocalStorage();
    })
    .catch(err => {
      alert("User not found or error");
    });
}

function renderTrackedUser(user) {
  const card = document.createElement("div");
  card.className = "user-card";
  card.id = `tracked-${user.id}`;

  const timestamp = new Date();

  card.innerHTML = `
    <h3>${user.name}</h3>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>City:</strong> ${user.address.city}</p>
    <p><strong>Company:</strong> ${user.company.name}</p>
    <p><strong>Last Updated:</strong> <span class="timestamp">${timestamp.toLocaleTimeString()}</span></p>
    <p class="countdown">Refreshing in: ${REFRESH_INTERVAL}s</p>
    <button class="remove-btn">Remove</button>
  `;

  const removeBtn = card.querySelector(".remove-btn");
  removeBtn.onclick = () => {
    clearInterval(trackedUsers[user.id]?.interval);
    delete trackedUsers[user.id];
    card.remove();
    saveToLocalStorage();
  };

  trackedUsersContainer.appendChild(card);
  setupRefresh(user.id);
}

function setupRefresh(id) {
  let secondsLeft = REFRESH_INTERVAL;
  let staleCount = 0;

  const interval = setInterval(() => {
    if (!autoRefreshToggle.checked) return;

    const card = document.getElementById(`tracked-${id}`);
    const countdownEl = card?.querySelector(".countdown");
    const timestampEl = card?.querySelector(".timestamp");

    secondsLeft--;
    if (countdownEl) countdownEl.textContent = `Refreshing in: ${secondsLeft}s`;

    if (secondsLeft <= 0) {
      fetch(`${API_URL}/${id}`)
        .then(res => res.json())
        .then(user => {
          secondsLeft = REFRESH_INTERVAL;
          staleCount = 0;
          if (timestampEl) timestampEl.textContent = new Date().toLocaleTimeString();
          card.classList.remove("stale");
        })
        .catch(() => {
          staleCount++;
          if (staleCount >= 2) card.classList.add("stale");
        });
    }
  }, 1000);

  trackedUsers[id] = { interval };
}

function saveToLocalStorage() {
  const ids = Object.keys(trackedUsers);
  localStorage.setItem("trackedUserIds", JSON.stringify(ids));
}

function loadFromLocalStorage() {
  const ids = JSON.parse(localStorage.getItem("trackedUserIds") || "[]");
  ids.forEach(id => trackUserById(parseInt(id)));
}

// 🔹 Reset all tracked users
resetBtn.addEventListener("click", () => {
  Object.values(trackedUsers).forEach(obj => clearInterval(obj.interval));
  trackedUsers = {};
  trackedUsersContainer.innerHTML = "";
  localStorage.removeItem("trackedUserIds");
});

// 🔹 Init
fetchUsers();
