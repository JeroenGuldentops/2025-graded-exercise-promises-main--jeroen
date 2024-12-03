setTimeout(function () {
  document
    .querySelector('input[type="checkbox"]')
    .setAttribute("checked", true);
}, 100);

function displayTodos() {}

function addTodo() {
  updateTodoList();
}

function updateTodo() {
  updateTodoList();
}

function deleteTodo() {
  updateTodoList();
}

function updateTodoList() {
  displayTodos();
}
