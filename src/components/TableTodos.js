import { Component } from "react";
import TableItemTodo from "./TableItemTodos";

//CSS
import "../app.css";

class TableTodos extends Component {
  render() {
    const { toDos } = this.props;

    return toDos.length === 0 ? (
      <div>Don't have to dos</div>
    ) : (
      <div class="table-container">
        <table className="table">
          <thead>
            <tr className="table-header">
              <th>Title</th>
              <th>Description</th>
              <th>Completed</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {toDos.map((toDo) => {
              return (
                <TableItemTodo
                  toDo={toDo}
                  key={toDo.id}
                  changeCompleted={this.props.changeCompleted}
                  clickDeleteTodo={this.props.clickDeleteTodo}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableTodos;
