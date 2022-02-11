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

import { collection, addDoc } from "firebase/firestore";
import { db } from "views/IndexViews/firebase-config.js";

export default function Signup() {
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);

  // useState for Form
  const [fullname, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phonenumber, setPhoneNumber] = React.useState("");

  // Submit Form Data
  const handleSubmit = (e) => {
    e.preventDefault();

    // Make Collection
    addDoc(collection(db, "data"), {
      fullname: fullname,
      email: email,
      phonenumber: phonenumber,
    })
      .then(() => {
        alert("Our Team will shortly contact you 👍. Thanks for filling out the form.");
      })
      .catch((error) => {
        alert(error.message);
      });

    // Reset All fields
    setFullname("");
    setEmail("");
    setPhoneNumber("");
  };

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
                <CardTitle tag="h4" className="ml-2">
                  Ready?
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Form className="form" onSubmit={handleSubmit}>
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
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={phonenumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      onFocus={(e) => setPasswordFocus(true)}
                      onBlur={(e) => setPasswordFocus(false)}
                    />
                  </InputGroup>
                  <CardFooter>
                    <input type="submit" className="ml-0 btn btn-info text-white font-weight-bold"/>
                  </CardFooter>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
