import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Signup() {
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  return (
    <div className="section header-filter" id="Booking">
      <Container>
        <Row className="row-grid justify-content-between align-items-center">
          <Col lg="6">
            <h3 className="display-3 text-dark">
              Let's Start <br />
              <span className="text-dark">Book a Quick call</span>
            </h3>
            <p className="text-dark mb-3 font-weight-normal description">
              The Design System comes with four pre-built pages to help you get
              started faster. You can change the text and images and you're good
              to go. More importantly, looking at them will give you a picture
              of what you can built with this powerful Bootstrap 4 Design
              System.
            </p>
            <div className="btn-wrapper">
              <Button color="info" to="#" tag={Link}>
                Contact Us
              </Button>
            </div>
          </Col>
          <Col className="mb-lg-auto" lg="6">
            <Card
              className="card-register"
              style={{ backgroundColor: "#ffffff" }}
            >
              <CardHeader>
                <CardImg alt="..." src={require("assets/img/square5.png")} />
                <CardTitle tag="h4" className="ml-2">Ready?</CardTitle>
              </CardHeader>
              <CardBody>
                <Form className="form">
                  {/* Full Name */}
                  <InputGroup
                    className={classnames({
                      "input-group-focus": fullNameFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="text-dark tim-icons icon-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Full Name"
                      type="text"
                      onFocus={(e) => setFullNameFocus(true)}
                      onBlur={(e) => setFullNameFocus(false)}
                    />
                  </InputGroup>
                  {/* Email */}
                  <InputGroup
                    className={classnames({
                      "input-group-focus": emailFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="text-dark tim-icons icon-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="text"
                      onFocus={(e) => setEmailFocus(true)}
                      onBlur={(e) => setEmailFocus(false)}
                    />
                  </InputGroup>
                  <InputGroup
                    className={classnames({
                      "input-group-focus": passwordFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="text-dark tim-icons icon-mobile" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Phone Number"
                      type="text"
                      onFocus={(e) => setPasswordFocus(true)}
                      onBlur={(e) => setPasswordFocus(false)}
                    />
                  </InputGroup>
                  <FormGroup check className="text-left">
                    <Label check>
                      <Input type="checkbox" />
                      <span className="text-dark form-check-sign" />
                      <span className="text-dark">I agree to the </span>
                      <a href="#pablo" onClick={(e) => e.preventDefault()} className="text-info">
                        terms and conditions
                      </a>
                      .
                    </Label>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-round" color="info" size="lg">
                  Submit Form
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
