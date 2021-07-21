import { saveLocalTodos, deleteMarker, filterTodo } from './logic';
// Selectors
const todoInput = document.querySelector('.input-todo');
const todoButton = document.querySelector('.buttonlist');
const todoList = document.querySelector('.to-do-list');
const filterOption = document.querySelector('.filter-todo');
// Event Listeners
// document.addEventListener('DOMContentLoaded',getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteMarker);
filterOption.addEventListener('click', filterTodo);
// functions
function addTodo(event) {
// prevent form from submitting
  event.preventDefault();
// Todo DIV
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
// Create LI
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
// ADD TODO TO LOCAL STORAGE
  saveLocalTodos(todoInput.value);
// CHECK MARK BUTTON
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);
// CHECK DELETE BUTTON
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
  deleteButton.classList.add('delete-btn');
  todoDiv.appendChild(deleteButton);
// APPEND TO LIST
  todoList.appendChild(todoDiv);
// CLEAR todo INPUT VALUE
  todoInput.value ="";
};

export default addTodo;
