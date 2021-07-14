import { Component } from "react";

//CSS
import "../app.css";

class InputTodos extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.restarInputs = this.restarInputs.bind(this);

    this.state = {
      title: "",
      description: "",
    };
  }

  restarInputs() {
    this.setState({
      title: "",
      description: "",
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.title.trim() !== "" && this.state.description.trim() !== "") {
      this.props.addToDo({
        title: this.state.title,
        description: this.state.description,
      });
      this.restarInputs();
    }
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value,
    });
  }

  handleDescriptionChange(e) {
    this.setState({
      description: e.target.value,
    });
  }

  render() {
    const { title, description } = this.state;

    return (
      <div className="inputs-container">
        <div className="inputs">
          Add some to do
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={title}
              onChange={this.handleTitleChange}
              placeholder="Title"
              required
            />
            <input
              type="text"
              placeholder="description"
              value={description}
              onChange={this.handleDescriptionChange}
              required
            />
            <button>Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default InputTodos;
