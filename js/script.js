$(document).ready(function () {
  // CRUD Todos
  // [1]
  createTodo();
});

// CRUD
//[1]
function createTodo() {
  $('.add-todo .btn').click(function (event) {
    event.preventDefault();
    const todo = $('.template--todo').children().clone();
    $('.todos').prepend(todo);

    createInput(todo);
  });
}

//[2]
function createInput(todo) {

}