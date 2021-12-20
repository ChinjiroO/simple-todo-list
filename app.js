const Btn = document.querySelector("#submit");
const Input = document.querySelector("#input-todo");
const List = document.querySelector("#list");

//Event listeners
document.addEventListener("DOMContentLoaded", getLocalStorageItem);
Btn.addEventListener("click", addTodo);

//Function
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

//Save to Local storage
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
// Get item in local storage to show on HTML
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
