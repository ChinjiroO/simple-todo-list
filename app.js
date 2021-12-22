const Btn = document.querySelector("#submit");
const Input = document.querySelector("#input-todo");
const List = document.querySelector("#list");
const Toggle = document.getElementById("dropdown-toggle");
const IconBtn = document.getElementById("iconBtn");

// * Event listeners
document.addEventListener("DOMContentLoaded", getLocalStorageItem);
Btn.addEventListener("click", addTodo);
Toggle.addEventListener("click", showDropdown);
// * Click outside Dropdown Menu
document.addEventListener("click", insideDropdownMenu);

// * Dropdown function
function showDropdown() {
  let Icon = IconBtn.getAttribute("class").valueOf();
  if (document.getElementById("dropdownMenu").style.visibility === "visible") {
    IconBtn.style.transform = "rotate(360deg)";
    document.getElementById("dropdownMenu").style.visibility = "hidden";
    IconBtn.style.transition = "all 300ms ease-in-out ";
    // IconBtn.classList = Icon.replace("up", "down");
    console.log("hidden1");
  } else {
    IconBtn.style.transform = "rotate(180deg)";
    document.getElementById("dropdownMenu").style.visibility = "visible";
    IconBtn.style.transition = "all 300ms ease-in-out ";

    // IconBtn.classList = Icon.replace("down", "up");
    console.log("visible");
  }
}
function insideDropdownMenu(e) {
  var element = document.getElementById("dropdownMenu").contains(e.target);
  let Icon = IconBtn.getAttribute("class").valueOf();
  if (
    element &&
    document.getElementById("dropdownMenu").style.visibility === "visible"
  ) {
    IconBtn.style.transform = "rotate(360deg)";
    document.getElementById("dropdownMenu").style.visibility = "hidden";
    // IconBtn.classList = Icon.replace("up", "down");
    console.log("hidden");
  } else if (!element && !Toggle.contains(e.target)) {
    // IconBtn.classList = Icon.replace("up", "down");
    IconBtn.style.transform = "rotate(360deg)";
    document.getElementById("dropdownMenu").style.visibility = "hidden";
    console.log("hidden");
  } else {
    return;
  }
}

// * Create Todo
function addTodo(e) {
  e.preventDefault();
  // create new Todo
  const Div = document.createElement("div");
  Div.classList.add("todo-item");
  const newTodo = document.createElement("li");
  newTodo.classList.add("item");
  const newItem = document.createElement("input");
  newItem.type = "checkbox";
  const title = document.createElement("label");
  title.innerText = Input.value;
  title.classList.add("title");
  // Input value to Local Storage
  saveToLocalStorage(Input.value);

  newTodo.appendChild(newItem);
  newTodo.appendChild(title);
  Div.appendChild(newTodo);
  List.appendChild(Div);
  // clear Input
  Input.value = "";
}

// * Save to Local storage
function saveToLocalStorage(item) {
  let items;
  if (localStorage.getItem("items") === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem("items"));
  }

  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));
}
// * Get item in local storage to show on HTML
function getLocalStorageItem() {
  let items;
  if (localStorage.getItem("items") === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem("items"));
  }
  // items.sort();
  items.forEach(function (item) {
    const Div = document.createElement("div");
    Div.classList.add("todo-item");
    const newTodo = document.createElement("li");
    newTodo.classList.add("item");
    const newItem = document.createElement("input");
    newItem.type = "checkbox";
    const title = document.createElement("label");
    title.innerText = item;
    title.classList.add("title");

    newTodo.appendChild(newItem);
    newTodo.appendChild(title);
    Div.appendChild(newTodo);
    List.appendChild(Div);
  });
}
// * Update Todo
function updateItem() {}
// * Delete Todo
function deleteItem() {}
