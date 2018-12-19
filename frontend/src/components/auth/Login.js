import React, { Component } from "react";
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
class Login extends Component {
  render() {
    return (
      <div className="container h-100">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Card>
              <CardHeader>Login</CardHeader>
              <CardBody>
                {/* Form Starts Here */}
                <Form>
                  <FormGroup row>
                    <Label className="text-md-right" for="email" sm={4}>
                      Email
                    </Label>
                    <Col sm={8}>
                      <Input type="email" name="email" id="email" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label className="text-md-right" for="password" sm={4}>
                      Password
                    </Label>
                    <Col sm={8}>
                      <Input type="password" name="password" id="password" />
                    </Col>
                  </FormGroup>
                  <FormGroup check row>
                    <Col sm={{ size: 10, offset: 4 }}>
                      <Button color="primary">Login</Button>
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

export default Login;
