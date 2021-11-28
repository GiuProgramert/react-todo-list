const setTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const changeCompleted = (todoId) => {
  const todos = getToDos();
  const updatedTodos = todos.map(({ id, title, description, completed }) => {
    if (todoId === id) return { id, title, description, completed }
  })
  setTodos(updatedTodos);
}

export const getToDos = () => {
  if (JSON.parse(localStorage.getItem("todos")) === null) {
    setTodos([]);
  }
  return JSON.parse(localStorage.getItem("todos"));
};

export const addToDo = ({ title, description }) => {
  const todos = getToDos();
  const id = todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;
  const completed = false;
  
  todos.push({ id, title, description, completed });
  setTodos(todos);
};

export const deleteToDo = (id) => {
  const todos = getToDos();
  const filteredTodos = todos.filter(todo => todo.id !== id);
  setTodos(filteredTodos)
}
