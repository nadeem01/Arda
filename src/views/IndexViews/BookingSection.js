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
            <h1 className="font-weight-bold text-info">
              Let's Start <br />
              <span className="font-weight-bold text-info">Book a Quick call</span>
            </h1>
            <h4 className="description font-weight-normal">
              The Design System comes with four pre-built pages to help you get
              started faster. You can change the text and images and you're good
              to go. More importantly, looking at them will give you a picture
              of what you can built with this powerful Bootstrap 4 Design
              System.
            </h4>
            <div className="btn-wrapper">
              <Button class="mt-4 btn btn-info" color="info" to="#" tag={Link}>
                Contact Us
              </Button>
            </div>
          </Col>
          <Col className="mb-lg-auto" lg="6">
            <Card
              className="card-register"
              style={{width:"fit-content", height:"auto",  backgroundColor: "#ffffff", boxShadow: "2px 21px 14px 1px rgba(0, 0, 0, 0.2)" }}
            >
              <CardHeader className="py-3">
                {/* <CardImg alt="..." src={require("assets/img/square5.png")} /> */}
                <h1 style={{color:"#1d8cf8"}}  className="ml-2 font-weight-bold text-info">
                  Ready?
                </h1>
              </CardHeader>
              <CardBody>
                <Form className="form" onSubmit={handleSubmit}>
                  {/* Full Name */}
                  <InputGroup
                  style={{    borderColor: "#1d8cf8"}}
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
