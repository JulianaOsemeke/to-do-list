const todoList = document.querySelector(".to-do-list");


export function deleteMarker(e) {
  const item = e.target;

  //DELETE TODO
  if(item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    //ANIMATION
    todo.classList.add("fall");
    todo.addEventListener('transitionend',function() {
      todo.remove();
    });

  }

  //CHECK MARK
  if (item.classList[0] === "complete-btn" ){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

export function filterTodo(e) {
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

export function saveLocalTodos(todo){
  //CHECK 
  let todos;
  if(localStorage.getItem('todos') === null ){
    todos = [];
  } else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

export  function getTods(){
  let todos;
  if(localStorage.getItem('todos') === null ){
    todos = [];
  } else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}