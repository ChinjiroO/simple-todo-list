const Btn = document.querySelector("#submit");
const Input = document.querySelector("#input-todo");
const List = document.querySelector("#list");
const Toggle = document.getElementById("dropdown-toggle");
const IconBtn = document.getElementById("iconBtn");
const BtnComplete = document.getElementById("completeBtn");
const IconBtnComplete = document.getElementById("iconExpandedComplete");
IconBtn.style.transform = "rotate(360deg)";

// * Event listeners
document.addEventListener("DOMContentLoaded", getLocalStorageItem);
Btn.addEventListener("click", addTodo);
Toggle.addEventListener("click", showDropdown);
document.addEventListener("click", insideDropdownMenu);
BtnComplete.addEventListener("click", handleClickComplete);
List.addEventListener("click", deleteItem);

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
  const trashIcon = document.createElement("i");
  trashIcon.classList.add("fas", "fa-trash-alt", "del-icon");

  // Input value to Local Storage
  saveToLocalStorage(Input.value);

  newTodo.appendChild(newItem);
  newTodo.appendChild(title);
  newTodo.appendChild(trashIcon);
  Div.appendChild(newTodo);
  List.appendChild(Div);
  // clear Input
  Input.value = "";
}

// * Save to LocalStorage
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

// * Show items[] from LocalStorge
function getLocalStorageItem(item) {
  let items;
  if (localStorage.getItem("items") === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem("items"));
  }
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
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fas", "fa-trash-alt", "del-icon");

    newTodo.appendChild(newItem);
    newTodo.appendChild(title);
    newTodo.appendChild(trashIcon);
    Div.appendChild(newTodo);
    List.appendChild(Div);
  });
}

// TODO: move items[] ==> itemsComplete
function todoComplete(completeItem) {
  let completeItems;
  if (localStorage.getItem("completeItems") === null) {
    completeItems = [];
    console.log("completed = null");
  } else {
    completeItems = JSON.parse(localStorage.getItem("completeItems"));
    console.log("completed = ", completeItems);
  }
}
// TODO: Update Todo
function updateItem() {}
// TODO: Delete Todo
function deleteItem(e) {
  const item = e.target;
  if (item.classList == "fas fa-trash-alt del-icon") {
    const todo = item.parentElement.parentElement;
    deleteItemFromLocal(todo);
    todo.remove();
  }
}
function deleteItemFromLocal(item) {
  let items;
  if (localStorage.getItem("items") === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem("items"));
  }
  const index = item.children[0].innerText;
  items.splice(items.indexOf(index), 1);
  localStorage.setItem("items", JSON.stringify(items));
}

// TODO: Show complete list on click
function handleClickComplete() {
  IconBtnComplete.style.transform += "rotate(180deg)";
}

// TODO: Dropdown function
function showDropdown() {
  if (document.getElementById("dropdownMenu").style.visibility === "visible") {
    IconBtn.style.transform = "rotate(360deg)";
    IconBtn.style.transition = "all 300ms ease-in-out ";
    document.getElementById("dropdownMenu").style.visibility = "hidden";
  } else {
    IconBtn.style.transform = "rotate(180deg)";
    IconBtn.style.transition = "all 300ms ease-in-out ";
    document.getElementById("dropdownMenu").style.visibility = "visible";
  }
}
function insideDropdownMenu(e) {
  var element = document.getElementById("dropdownMenu").contains(e.target);
  if (
    element &&
    document.getElementById("dropdownMenu").style.visibility === "visible"
  ) {
    IconBtn.style.transform = "rotate(360deg)";
    document.getElementById("dropdownMenu").style.visibility = "hidden";
  } else if (!element && !Toggle.contains(e.target)) {
    IconBtn.style.transform = "rotate(360deg)";
    document.getElementById("dropdownMenu").style.visibility = "hidden";
  } else {
    return;
  }
}
