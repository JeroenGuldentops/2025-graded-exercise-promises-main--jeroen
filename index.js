// setTimeout(function () {
//   document
//     .querySelector('input[type="checkbox"]')
//     .setAttribute("checked", true);
// }, 100);

const TODOS_URL = "https://dummyjson.com/todos?limit=0";
const addTodoForm = document.querySelector("#addTodoForm");
const todoList = document.querySelector(".todo-list");

let todos = [];
const todosHTMLElements = document.querySelectorAll(".todo");

function getTodos() {
  return new Promise((resolve, reject) => {
    fetch(TODOS_URL)
      .then((res) => res.json())
      .then((res) => {
        todos = res.todos;
        resolve();
      });
  });
}

function displayTodos() {
  todoList.innerHTML = todos
    .map((todo) => {
      return `
    <label class="todo" data-id="${todo.id}">
            <input class="todo__state" type="checkbox" />
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 25" class="todo__icon">
               <use xlink:href="#todo__line" class="todo__line"></use>
               <use xlink:href="#todo__box" class="todo__box"></use>
               <use xlink:href="#todo__check" class="todo__check"></use>
               <use xlink:href="#todo__circle" class="todo__circle"></use>
            </svg>
            <div class="todo__text">${todo.todo}</div>
            <button class="editButton" onclick="handleEditTodoClicked(${todo.id})">Edit</button>
            <button class="removeButton" onclick="handleRemoveTodoClicked(${todo.id})">Remove</button>
    </label>
    
    `;
    })
    .reverse()
    .join("");

  // document.querySelectorAll(".todo__state").forEach((checkbox) => {
  //   const id = checkbox.parentNode.dataset.id;
  //   if (todos[id - 1].completed === true) {
  //     checkbox.checked = true;
  //   }
  // });
}

function handleTodoClicked(id) {
  const currentTodo = document.querySelector(`.todo[data-id="${id}"]`);
  console.log(currentTodo);
  if (!currentTodo.classList.contains("completed")) {
    currentTodo.classList.toggle("completed");
    markAsChecked(id)
      .then((res) => (todos[id - 1] = res))
      .then(() => displayTodos());
  } else {
    currentTodo.classList.toggle("completed");
    markAsUnChecked(id)
      .then((res) => (todos[id - 1] = res))
      .then(() => displayTodos());
  }
}

function handleEditTodoClicked(id) {
  const newText = window.prompt("Edit this todo");
  updateTodoText(id, newText)
    .then((res) => (todos[id - 1] = res))
    .then(() => displayTodos());
}

function handleRemoveTodoClicked(id) {
  warningBox()
    .then(() => deleteTodo(id))
    .then((res) => {
      todos.splice(id - 1, 1);
    })
    .then(() => displayTodos());
}

function warningBox() {
  return new Promise((resolve, reject) => {
    const warning = window.confirm("Are you sure?");
    if (warning) {
      resolve(true);
    } else reject;
  });
}

function addTodo(todoText) {
  return new Promise((resolve, reject) => {
    fetch("https://dummyjson.com/todos/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todo: todoText,
        completed: false,
        userId: 5,
      }),
    })
      .then((res) => res.json())
      .then((res) => resolve(res));
  });
}

function updateTodoText(id, newText) {
  return new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todo: newText,
      }),
    })
      .then((res) => res.json())
      .then((res) => resolve(res));
  });
}

function markAsChecked(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        completed: true,
      }),
    })
      .then((res) => res.json())
      .then((res) => resolve(res));
  });
}

function markAsUnChecked(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        completed: false,
      }),
    })
      .then((res) => res.json())
      .then((res) => resolve(res));
  });
}

function deleteTodo(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => resolve(res));
  });
}

function updateTodoList() {
  todoList.innerHTML = "";
  displayTodos();
}

function enableLoader() {}

function disableLoader() {}

function init() {
  getTodos().then((res) => {
    displayTodos();
  });
}

init();

addTodoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const todoText = event.target[0].value;
  if (todoText.length >= 3) {
    addTodo(todoText)
      .then((res) => todos.push(res))
      .then(() => updateTodoList());
    document.querySelector("#addTodoText").value = "";
  } else {
    window.alert("Your text should at least have 3 characters!");
  }
});
