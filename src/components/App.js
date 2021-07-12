import { Component } from "react";

//Todos Storages
import { addToDo, getToDos } from "../toDosStorage";

//Componets
import InputTodos from "./InputTodos";
import TableTodos from "./TableTodos";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleAddTodo = this.handleAddTodo.bind(this);

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

  render() {
    const { toDos } = this.state;

    return (
      <div>
        <InputTodos 
          addToDo={this.handleAddTodo}
        />
        <TableTodos
          toDos={toDos}
        />
      </div>
    );
  }
}

export default App;
