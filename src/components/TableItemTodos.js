import { Component } from "react";

//CSS
import '../app.css';

class TableItemTodo extends Component {
  constructor(props) {
    super(props);
    this.handleCompletedChange = this.handleCompletedChange.bind(this);
    this.handleDeleteTodoClick = this.handleDeleteTodoClick.bind(this);
  }

  handleCompletedChange() {
    this.props.changeCompleted(this.props.toDo.id);
  }

  handleDeleteTodoClick() {
    this.props.clickDeleteTodo(this.props.toDo.id);
  }

  render() {
    const { title, description, completed } = this.props.toDo;

    return (
      <tr>
        <td className={completed ? 'completed-to-do' : ''}>{title}</td>
        <td className={(completed ? 'completed-to-do' : '') + ' table-item'}>{description}</td>
        <td>
          <input 
            type="checkbox"
            onChange={this.handleCompletedChange}
            checked={completed === true ? true : false}
          />
        </td>
        <td>
          <button onClick={this.handleDeleteTodoClick}>
            <i className="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    );
  }
}

export default TableItemTodo;
