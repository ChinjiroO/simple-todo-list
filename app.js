const Btn = document.querySelector("#submit");
const Input = document.querySelector("#input-todo");
const List = document.querySelector("#list");
const Toggle = document.getElementById("dropdown-toggle");
const IconBtn = document.getElementById("iconBtn");
const BtnComplete = document.getElementById("completeBtn");
const IconBtnComplete = document.getElementById("iconExpandedComplete");
const EditTItle = document.querySelector("#edit");
var Title = document.querySelectorAll(".title");
IconBtn.style.transform = "rotate(360deg)";

// * Event listeners
document.addEventListener("DOMContentLoaded", getLocalStorageItem);
Btn.addEventListener("click", addTodo);
Toggle.addEventListener("click", showDropdown);
document.addEventListener("click", insideDropdownMenu);
BtnComplete.addEventListener("click", handleClickComplete);
List.addEventListener("click", deleteItem);
List.addEventListener("click", updateItem);

// * ✅ DONE: Create Todo
function addTodo(e) {
  e.preventDefault();
  // create new Todo
  const Div = document.createElement("div");
  Div.classList.add("todo-item");
  const list = document.createElement("li");
  list.classList.add("item");
  const checkbox = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  checkbox.setAttribute("viewBox", "0 0 69 69");
  checkbox.classList.add("checkbox");
  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  circle.setAttribute("cx", 34.5);
  circle.setAttribute("cy", 34.5);
  circle.setAttribute("r", 34.5);
  circle.setAttribute("stroke", "black");
  circle.setAttribute("stroke-width", "5");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M26.128 42.0506C24.929 43.4698 22.7412 43.469 21.5433 42.0487L8.33965 26.3952C7.1438 24.9775 4.96086 24.9737 3.76007 26.3873L1.64407 28.8782C0.695181 29.9952 0.692324 31.6344 1.63732 32.7547L21.5419 56.3525C22.7403 57.7733 24.9291 57.7735 26.1278 56.353L67.2286 7.6462C68.2312 6.45811 68.1601 4.70099 67.0648 3.5978L64.8072 1.32387C63.567 0.0746672 61.5227 0.156777 60.3866 1.50143L26.128 42.0506Z"
  );
  path.setAttribute("fill", "#3180FF");

  const title = document.createElement("label");
  title.innerText = Input.value;
  title.classList.add("title");
  const trashIcon = document.createElement("i");
  trashIcon.classList.add("fas", "fa-trash-alt", "del-icon");

  // Input value to Local Storage
  saveToLocalStorage(Input.value);

  checkbox.appendChild(circle);
  checkbox.appendChild(path);
  list.appendChild(checkbox);
  list.appendChild(title);
  list.appendChild(trashIcon);
  Div.appendChild(list);
  List.appendChild(Div);
  // clear Input
  Input.value = "";
}

// * ✅ DONE: Save to LocalStorage
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

// * : Show items[] from LocalStorge
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
    const list = document.createElement("li");
    list.classList.add("item");
    const checkbox = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    checkbox.setAttribute("viewBox", "0 0 69 69");
    checkbox.classList.add("checkbox");
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", 34.5);
    circle.setAttribute("cy", 34.5);
    circle.setAttribute("r", 34.5);
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", "5");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      "M26.128 42.0506C24.929 43.4698 22.7412 43.469 21.5433 42.0487L8.33965 26.3952C7.1438 24.9775 4.96086 24.9737 3.76007 26.3873L1.64407 28.8782C0.695181 29.9952 0.692324 31.6344 1.63732 32.7547L21.5419 56.3525C22.7403 57.7733 24.9291 57.7735 26.1278 56.353L67.2286 7.6462C68.2312 6.45811 68.1601 4.70099 67.0648 3.5978L64.8072 1.32387C63.567 0.0746672 61.5227 0.156777 60.3866 1.50143L26.128 42.0506Z"
    );
    path.setAttribute("fill", "#3180FF");
    const title = document.createElement("label");
    title.innerText = item;
    title.classList.add("title");
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fas", "fa-trash-alt", "del-icon");

    checkbox.appendChild(circle);
    checkbox.appendChild(path);
    list.appendChild(checkbox);
    list.appendChild(title);
    list.appendChild(trashIcon);
    Div.appendChild(list);
    List.appendChild(Div);
  });
}

// TODO: ✏️  move items[] ==> itemsComplete
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
// TODO: ✏️  Update Todo
function updateItem(e) {
  let item = e.target;
  if (item.classList[0] === "title") {
    const form = document.createElement("form");
    var edit = document.createElement("input");
    edit.type = "text";
    edit.id = "edit";
    edit.classList.add("inputs", "edit");
    edit.autofocus = true;
    edit.addEventListener("change", changeValue);
    const parent = item.parentElement;
    form.appendChild(edit);
    parent.replaceChild(edit, item);
  }
}
function changeValue(e, item) {
  e.preventDefault();
  console.log(e.target.value);
  let items;
  if (localStorage.getItem("items") === null) {
    items = [];
  } else items = JSON.parse(localStorage.getItem("items"));
  console.log(items);
}
function updateItemFromLocal(item) {
  let items;
  if (localStorage.getItem("items") === null) {
    items = [];
  } else items = JSON.parse(localStorage.getItem("items"));
}
// * ✅ DONE: Delete Todo
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
  } else items = JSON.parse(localStorage.getItem("items"));

  const index = item.children[0].innerText;
  items.splice(items.indexOf(index), 1);
  localStorage.setItem("items", JSON.stringify(items));
}

// TODO: ✏️ Show complete list on click
function handleClickComplete() {
  IconBtnComplete.style.transform += "rotate(180deg)";
}

// TODO: ✏️ Dropdown function
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
