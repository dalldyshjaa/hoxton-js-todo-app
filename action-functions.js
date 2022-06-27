let completed = document.createElement("div");
completed.className = "dontshow";

let completedTitle = document.createElement("h1");
completedTitle.textContent = "Completed";

let completedContainer = document.createElement("div");
completedContainer.className = "completed-container";

completed.append(completedTitle, completedContainer);
document.querySelector(".main").append(completed);

function addTodo(event) {
  event.preventDefault();
  let todo = document.createElement("div");
  todo.className = "todo";

  let todoText = document.createElement("p");
  todoText.textContent = document.querySelector("form").textInput.value;

  document.querySelector("form").textInput.value = "";

  let check = document.createElement("input");
  check.type = "checkbox";
  check.addEventListener("click", doneTodo);

  let deleteTodoBtn = document.createElement("button");
  deleteTodoBtn.textContent = "delete";
  deleteTodoBtn.addEventListener("click", () => {
    todo.remove();
  });

  todo.append(check, todoText, deleteTodoBtn);

  document.querySelector(".todos").append(todo);
}

function renderOptions() {
  let form = document.createElement("form");
  form.className = "add-todo-form";

  let input = document.createElement("input");
  input.type = "text";
  input.name = "textInput";

  let button = document.createElement("button");
  button.type = "submit";
  button.className = "add-todo-btn";
  button.textContent = "Add todo";

  form.append(input, button);

  document.querySelector(".options").appendChild(form);
}

function doneTodo(e) {
  completedContainer.appendChild(e.target.parentNode);
  e.target.remove();
}

// function renderCompleted() {
//   if (state.showUncompleted) {
//     completed.className = "completed";
//     for (let todo of completedTodos) {
//       todo.querySelector("input").remove();
//       completedContainer.appendChild(todo);
//     }
//   } else {
//     completed.className = "dontshow";
//   }
// }
// function a(e) {
//   if (e.target.checked) {
//     completed.className = "completed";
//   } else {
//     completed.className = "dontwshow";
//   }
//   //   completedContainer.append(todo);
//   //   todo.querySelector("input").remove();
// }
