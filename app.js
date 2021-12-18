const Btn = document.querySelector("#submit");
const Input = document.querySelector("#input-todo");
const List = document.querySelector("#list");

//Event listeners
Btn.addEventListener("click", addTodo);

//Function
function addTodo(e) {
  e.preventDefault();
  const Div = document.createElement("div");
  Div.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerText = "test";
  newTodo.classList.add(".item");
  Div.appendChild(newTodo);
  console.log(Div);
}
