const setTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const changeCompleted = (id) => {
  const todos = getToDos();
  const updatedTodos = todos.map((todo) => {
    if(id === todo.id) {
      return {
        id: todo.id,
        title: todo.title,
        description: todo.description,
        completed: !todo.completed,
      }
    }
    return todo
  })
  setTodos(updatedTodos);
}

export const getToDos = () => {
  if (JSON.parse(localStorage.getItem("todos")) === null) {
    setTodos([]);
  }
  return JSON.parse(localStorage.getItem("todos"));
};

export const addToDo = (todo) => {
  const todos = getToDos();
  const id = todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;
  todos.push({
    id,
    title: todo.title,
    description: todo.description,
    completed: false
  });
  setTodos(todos);
};
