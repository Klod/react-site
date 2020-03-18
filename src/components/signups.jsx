import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

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
      <React.Fragment>
        <div className="signup-offer">
          <div>
            <h2>Risk Free Offer!</h2>
            <h1>
              Looking for professional help to shape your growth ideas into a
              step-by-step guide? Sign up now!
            </h1>
            <div>
              Upon completion of the audit you will receive a customized media
              brief based on your specific expectations for the campaign.
            </div>
          </div>
          <div className="form-border">
            <Form onSubmit={this.handleSubmit}>
              <div className="login-form">
                <FormGroup>
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label className="form-label">Company</label>
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={this.state.company}
                    onChange={this.handleCompanyChange}
                  />
                </FormGroup>
                <button className="btn-sm btn-dark btn-block" type="submit">
                  Sign Up
                </button>
              </div>
            </Form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Signups;
