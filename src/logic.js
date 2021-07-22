const todoList = document.querySelector('.to-do-list');

export function deleteMarker(e) {
  const item = e.target;
  if (item.classList[0] === 'delete-btn') {
    const todo = item.parentElement;
    // ANIMATION
    todo.classList.add('fall');
    removeLocalTodos(todo); // eslint-disable-line no-use-before-define
    todo.addEventListener('transitionend', () => {
      todo.remove();
    });
  }

  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

export function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach((todo) => {
    switch (e.target.value) {
      case 'all':
        todo.style.display = 'flex';
        break;
      case 'completed':
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case 'uncompleted':
        if (!todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      default:
        // do nothing
    }
  });
}

export function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

export function getTods() {
  if (localStorage.getItem('todos') === null) {
    todos = []; // eslint-disable-line
  } else {
    todos = JSON.parse(localStorage.getItem('todos')); // eslint-disable-line
  }
  todos.forEach((todo) => { // eslint-disable-line
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);
    todoList.appendChild(todoDiv);
  });
}

export function removeLocalTodos(todo) {
  if (localStorage.getItem('todos') === null) {
    todos = []; // eslint-disable-line
  } else {
    todos = JSON.parse(localStorage.getItem('todos')); // eslint-disable-line
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1); // eslint-disable-line
  localStorage.setItem('todos', JSON.stringify(todos)); // eslint-disable-line
}
