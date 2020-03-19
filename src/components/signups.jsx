import React, { Component } from "react";
import {
  Container,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row
} from "reactstrap";

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
      <Container className="about">
        <Row>
          <Col md={8}>
            <div className="about-left">
              <h2>Risk Free Offer!</h2>
              <h2>
                Looking for professional help to shape your growth ideas into a
                step-by-step guide? Sign up now!
              </h2>
              <div>
                Upon completion of the audit you will receive a customized media
                brief based on your specific expectations for the campaign.
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <Form onSubmit={this.handleSubmit} className="form-border">
                <FormGroup>
                  <Label className="form-Label">Name</Label>
                  <Input
                    type="text"
                    placeholder="Full Name"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="form-Label">Email</Label>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="form-Label">Company</Label>
                  <Input
                    type="text"
                    placeholder="Company Name"
                    value={this.state.company}
                    onChange={this.handleCompanyChange}
                  />
                </FormGroup>
                <Button size="sm" block color="primary">
                  Sign Up
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Signups;
