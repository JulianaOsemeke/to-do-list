//Selectors
const todoInput = document.querySelector(".input-todo");
const todoButton = document.querySelector(".buttonlist");
const todoList = document.querySelector(".to-do-list");
const filterOption = document.querySelector(".filter-todo")

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteMarker);
filterOption.addEventListener("click",filterTodo);

//functions
function addTodo(event) {

  //prevent form from submitting
  event.preventDefault();
  //Todo DIV
  const todoDiv = document.createElement('div');
  todoDiv.classList.add("todo");
  //Create LI
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  //ADD TODO TO LOCAL STORAGE
  saveLocalTodos(todoInput.value);
  //CHECK MARK BUTTON
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);
   //CHECK DELETE BUTTON
   const deleteButton = document.createElement('button');
   deleteButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
   deleteButton.classList.add('delete-btn');
   todoDiv.appendChild(deleteButton);
   //APPEND TO LIST
   todoList.appendChild(todoDiv);
   //CLEAR todo input value
   todoInput.value ="";

   
  
}

function deleteMarker(e) {
  const item = e.target;

  //DELETE TODO
  if(item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    //ANIMATION
    todo.classList.add("fall");
    todo.addEventListener('tarnsitionend',function() {
      todo.remove();
    });

  }

  //CHECK MARK
  if (item.classList[0] === "complete-btn" ){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function(todo){
    switch(e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
        case "completed":
          if(todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if(!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
    }
    

  });
}

function saveLocalTodos(todo){
  //cHECK ---HEY Do I already have thing in there?
  let todos;
  if(localStorage.getItem('todos') === null ){
    todos = [];
  } else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTods(){
  let todos;
  if(localStorage.getItem('todos') === null ){
    todos = [];
  } else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

export default todo;
