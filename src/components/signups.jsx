import React, { Component } from "react";

class Signups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      company: ""
    };
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };

  handleCompanyChange = event => {
    this.setState({
      company: event.target.value
    });
  };

  handleSubmit = event => {
    alert(`${this.state.name} ${this.state.email} ${this.state.company}`);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <label>Email</label>
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <label>Company</label>
          <input
            type="text"
            value={this.state.company}
            onChange={this.handleCompanyChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Signups;
