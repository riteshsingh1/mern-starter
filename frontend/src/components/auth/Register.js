import React, { Component } from "react";
import classnames from "classnames";
import {
  Card,
  CardHeader,
  CardBody,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser);

    // axios
    //   .post("/api/users/register", newUser)
    //   .then(res => console.log(res.data))
    //   .catch(err => this.setState({ errors: err.response.data }));
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="container h-100">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Card>
              <CardHeader>Register</CardHeader>
              <CardBody>
                {/* Form Starts Here */}
                <Form noValidate onSubmit={this.onSubmit}>
                  <FormGroup
                    row
                    className={classnames("", {
                      "is-invalid": errors.name
                    })}
                  >
                    <Label className="text-md-right" for="name" sm={4}>
                      Name
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="name"
                        name="name"
                        id="name"
                        value={this.state.name}
                        onChange={this.onChange}
                      />
                      {errors.name && (
                        <div className="invalid-feedback">{errors.name}</div>
                      )}
                    </Col>
                  </FormGroup>
                  <FormGroup
                    row
                    className={classnames("", {
                      "is-invalid": errors.email
                    })}
                  >
                    <Label className="text-md-right" for="email" sm={4}>
                      Email
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </Col>
                  </FormGroup>
                  <FormGroup
                    row
                    className={classnames("", {
                      "is-invalid": errors.password
                    })}
                  >
                    <Label className="text-md-right" for="password" sm={4}>
                      Password
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        value={this.state.password}
                        onChange={this.onChange}
                      />
                      {errors.password && (
                        <div className="invalid-feedback">
                          {errors.password}
                        </div>
                      )}
                    </Col>
                  </FormGroup>
                  <FormGroup
                    row
                    className={classnames("", {
                      "is-invalid": errors.password2
                    })}
                  >
                    <Label className="text-md-right" for="password2" sm={4}>
                      Confirm Password
                    </Label>
                    <Col sm={8}>
                      <Input
                        type="password"
                        name="password2"
                        id="password2"
                        value={this.state.password2}
                        onChange={this.onChange}
                      />
                      {errors.password2 && (
                        <div className="invalid-feedback">
                          {errors.password2}
                        </div>
                      )}
                    </Col>
                  </FormGroup>
                  <FormGroup check row>
                    <Col sm={{ size: 10, offset: 4 }}>
                      <Button color="primary">Register</Button>
                    </Col>
                  </FormGroup>
                </Form>

                {/* Form Ends Here */}
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {
    registerUser
  }
)(Register);
