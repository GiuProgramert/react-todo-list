import { Component } from "react";

//Todos Storages
import { addToDo, getToDos, changeCompleted, deleteToDo } from "../toDosStorage";

//CSS
import "../app.css";

//Componets
import InputTodos from "./InputTodos";
import TableTodos from "./TableTodos";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleCompletedTodo = this.handleCompletedTodo.bind(this);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);

    this.state = {
      toDos: getToDos(),
    };
  }

  handleAddTodo(toDo) {
    addToDo(toDo);
    this.setState({
      toDos: getToDos(),
    });
  }

  handleCompletedTodo(id) {
    changeCompleted(id);
    this.setState({
      toDos: getToDos(),
    });
  }

  handleDeleteTodo(id) {
    deleteToDo(id);
    this.setState({
      toDos: getToDos(),
    })
  }

  render() {
    const { toDos } = this.state;

    return (
      <div className="main-container">
        <div className="nav-container"></div>
        <div className="todos-container">
          <div className="row">
            <InputTodos addToDo={this.handleAddTodo} />
            <TableTodos
              toDos={toDos}
              changeCompleted={this.handleCompletedTodo}
              clickDeleteTodo={this.handleDeleteTodo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
