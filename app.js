const Btn = document.querySelector("#submit");
const Input = document.querySelector("#input-todo");
const List = document.querySelector("#list");

//Event listeners
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

  const title = document.createElement("h4");
  title.innerText = Input.value;
  title.classList.add("title");

  newTodo.appendChild(newItem);
  newTodo.appendChild(title);
  Div.appendChild(newTodo);
  List.appendChild(Div);
  // clear Input
  Input.value = "";
}
