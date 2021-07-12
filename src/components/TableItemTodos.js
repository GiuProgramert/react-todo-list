import { Component } from "react";

class TableItemTodo extends Component {
  render() {
    const { title, description } = this.props.toDo;

    return (
      <tr>
        <td>{title}</td>
        <td>{description}</td>
        <td><button>Delete</button></td>
      </tr>
    );
  }
}

export default TableItemTodo;
