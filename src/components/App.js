import { Component } from "react";

//Todos Storages
import { addToDo, getToDos } from "../toDosStorage";

//Componets
import InputTodos from "./InputTodos";
import TableTodos from "./TableTodos";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: getToDos()
    }
  }

  render() {
    return (
      <div>
        <InputTodos 
          addToDo={addToDo}
        />
        <TableTodos/>
      </div>
    );
  }
}

export default App;
