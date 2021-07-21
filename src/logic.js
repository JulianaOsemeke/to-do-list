const todoList = document.querySelector('.to-do-list');

export function deleteMarker(e) {
  const item = e.target;

  // DELETE TODO

  if (item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;
  // ANIMATION
        todo.classList.add('fall');
        removeLocalTodos(todo);
        todo.addEventListener('transitionend',function() {
        todo.remove();
    });
  }
  //CHECK MARK
  if (item.classList[0] === 'complete-btn'){
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

export function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function(todo){
    switch(e.target.value) {
      case 'all':
        todo.style.display = 'flex';
        break;
        case 'completed':
          if(todo.classList.contains('completed')){
            todo.style.display = 'flex';
          } else {
            todo.style.display = 'none';
          } 
          break;
        case 'uncompleted':
          if(!todo.classList.contains('completed')){
            todo.style.display = 'flex';
          } else {
            todo.style.display = 'none';
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
  localStorage.setItem('todos', JSON.stringify(todos));
}

export function getTods(){
  if(localStorage.getItem('todos') === null ){
    todos = [];
  } else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach(function(todo) {
   //Todo DIV ELEMENT
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //Create LI ELEMENT
  const newTodo = document.createElement('li');
  newTodo.innerText = todo;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
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
  });
};

export function removeLocalTodos(todo){
  if(localStorage.getItem('todos') === null ){
    todos = [];
  } else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const todoIndex = todo.children[0].innerText ;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
