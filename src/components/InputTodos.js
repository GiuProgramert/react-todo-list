import { Component } from "react";

class InputTodos extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.restarInputs = this.restarInputs.bind(this);
    
    this.state = {
      title: '',
      description: '',
    }
  }

  restarInputs() {
    this.setState({
      title: '',
      description: ''
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.addToDo({
      title: this.state.title,
      description: this.state.description,
    })
    this.restarInputs()
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value,
    })
  }

  handleDescriptionChange(e) {
    this.setState({
      description: e.target.value,
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            value={this.state.title}
            onChange={this.handleTitleChange}
            placeholder="Title"
          />
          <input
            type="text"
            placeholder="description"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default InputTodos