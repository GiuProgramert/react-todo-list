/**
 * Set the todos to the localStorage
 * @param {Object} todos 
 */
const setTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

/**
 * Toogle the completed value of the given todoId
 * @param {number} todoId 
 */
export const changeCompleted = (todoId) => {
  const todos = getToDos();
  const updatedTodos = todos.map(todo => {
    const { id, title, description } = todo;
    let { completed } = todo;
    completed = !completed;
    
    if (todoId === id) return { id, title, description, completed }

    return todo;
  })
  setTodos(updatedTodos);
}

/**
 * Return the todos value from the localStorage 
 * @returns todos
 */
export const getToDos = () => { 
  if (JSON.parse(localStorage.getItem("todos")) === null) {
    setTodos([]);
  }
  return JSON.parse(localStorage.getItem("todos"));
};

/**
 * Add todo in the array of the localStorage
 * @param {Object} todos 
 */
export const addToDo = ({ title, description }) => {
  const todos = getToDos();
  const id = todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;
  const completed = false;
  todos.push({ id, title, description, completed });
  setTodos(todos);
};

/** 
 * Delete the todo from the localstorage with the given id
*/
export const deleteToDo = (id) => {
  const todos = getToDos();
  const filteredTodos = todos.filter(todo => todo.id !== id);
  setTodos(filteredTodos)
}
