// ✅ ALL-IN-ONE EXAMPLE COVERING CORE JS CONCEPTS

// 🎨 DOM MANIPULATION
document.body.innerHTML = `
  <input id="name" placeholder="Enter name" />
  <input id="age" type="number" placeholder="Enter age" />
  <button id="submit">Submit</button>
  <ul id="user-list"></ul>
`;

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const submitBtn = document.getElementById("submit");
const userList = document.getElementById("user-list");

// 🧠 STATE MANAGEMENT
let appState = {
  users: [],
  currentUser: null,
};

// 🖱️ EVENT HANDLING
submitBtn.addEventListener("click", handleSubmit);

// 🧠 FUNCTIONS & SCOPE
function handleSubmit() {
  const name = cleanInput(nameInput.value);
  const age = cleanInput(ageInput.value);

  // ⚠️ ERROR HANDLING + 🧩 REGULAR EXPRESSIONS
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    alert("Invalid name. Use letters only.");
    return;
  }
  if (!/^\d{1,3}$/.test(age) || age > 120) {
    alert("Invalid age. Must be a number between 0 and 120.");
    return;
  }

  // 📦 SPREAD OPERATOR + 🧱 OBJECTS & ARRAYS
  appState.users = [...appState.users, { id: Date.now(), name, age }];

  // 🧪 DYNAMIC RENDERING
  renderUsers(appState.users);

  // clear inputs
  nameInput.value = "";
  ageInput.value = "";
}

// 🧼 CLEAN STRING PROCESSING
function cleanInput(str) {
  return str.trim().replace(/[+\s]/g, "");
}

// 🔄 ARRAY METHODS + 🔤 TEMPLATE LITERALS + ♿ ACCESSIBILITY
function renderUsers(users) {
  userList.innerHTML = users
    .map(
      (user) => `
      <li aria-label="User ${user.name}">
        👤 <strong>${user.name}</strong> is ${user.age} years old
        <button onclick="deleteUser(${user.id})" aria-label="Delete ${user.name}">❌</button>
      </li>
    `
    )
    .join("");
}

// 🔁 LOOPS + 🤔 CONDITIONAL LOGIC + 🧰 OPTIONAL CHAINING
function deleteUser(id) {
  const user = appState.users.find((u) => u.id === id);
  if (user?.name) {
    if (confirm(`Delete ${user.name}?`)) {
      appState.users = appState.users.filter((u) => u.id !== id);
      renderUsers(appState.users);
    }
  }
}

// Initial sort for demonstration
appState.users = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
];

// 🔄 Array sort method
appState.users.sort((a, b) => a.name.localeCompare(b.name));
renderUsers(appState.users);
