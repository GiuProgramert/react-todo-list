import { Component } from "react";
import TableItemTodo from "./TableItemTodos";

class TableTodos extends Component {
  render() {
    const { toDos } = this.props;

    return toDos.length === 0 ? 
    (
      <div>Don't have toDos</div>
    ) : 
    (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {toDos.map((toDo) => {
            return <TableItemTodo 
              toDo={toDo} 
              key={toDo.id}
            />;
          })}
        </tbody>
      </table>
    );
  }
}

export default TableTodos;
