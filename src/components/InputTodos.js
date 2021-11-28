import { Component } from "react";

//CSS
import "../app.css";

class InputTodos extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit            = this.handleSubmit.bind(this);
    this.handleTitleChange       = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.restarInputs            = this.restarInputs.bind(this);

    this.state = {
      title: "",
      description: "",
      isValidated: true,
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
    const { title, description } = this.state;

    if (
      title.trim()       !== "" &&
      description.trim() !== ""
    ) {
      this.props.addToDo({ title, description });
      this.restarInputs();
      this.setState({ isValidated: true });
    } else {
      this.setState({ isValidated: false });
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
    const { title, description, isValidated } = this.state;

    return (
      <div className="inputs-container">
        <div className={!isValidated ? "not-validate inputs" : "inputs"}>
          Add some to do
          <form
            onSubmit={this.handleSubmit}
            className={!isValidated ? "not-validate" : ""}
          >
            <input
              type="text"
              value={title}
              onChange={this.handleTitleChange}
              placeholder="Title"
            />
            <input
              type="text"
              placeholder="description"
              value={description}
              onChange={this.handleDescriptionChange}
            />
            <button>Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default InputTodos;
