import { Component } from "react";
import '../app.css';

class TableItemTodo extends Component {
  constructor(props) {
    super(props);
    this.handleCompletedChange = this.handleCompletedChange.bind(this);
  }

  handleCompletedChange() {
    this.props.changeCompleted(this.props.toDo.id);
  }

  render() {
    const { title, description, completed } = this.props.toDo;

    return (
      <tr>
        <td className={completed ? 'completed-to-do' : ''}>{title}</td>
        <td className={completed ? 'completed-to-do' : ''}>{description}</td>
        <td>
          <input 
            type="checkbox"
            onChange={this.handleCompletedChange}
            checked={completed === true ? true : false}
          />
        </td>
      </tr>
    );
  }
}

export default TableItemTodo;
