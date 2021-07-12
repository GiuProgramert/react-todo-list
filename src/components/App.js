import { Component } from "react";

//Todos Storages
import { addToDo, getToDos, changeCompleted } from "../toDosStorage";

//Componets
import InputTodos from "./InputTodos";
import TableTodos from "./TableTodos";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleCompletedTodo = this.handleCompletedTodo.bind(this);

    this.state = {
      toDos: getToDos()
    }
  }

  handleAddTodo(toDo) {
    addToDo(toDo);
    this.setState({
      toDos: getToDos(),
    })
  }

  handleCompletedTodo(id) {
    changeCompleted(id);
    this.setState({
      toDos: getToDos(),
    })
  }

  render() {
    const { toDos } = this.state;

    return (
      <div>
        <InputTodos 
          addToDo={this.handleAddTodo}
        />
        <TableTodos
          toDos={toDos}
          changeCompleted={this.handleCompletedTodo}
        />
      </div>
    );
  }
}

export default App;
