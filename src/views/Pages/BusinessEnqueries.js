import React from "react";
import "assets/css/nucleo-icons.css";

import classnames from "classnames";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Container,
  Row,
} from "reactstrap";

// Components
import Navbar from "components/Navbar/Navbar.js";
import Enqueries from "components/Enqueries/Enqueries.js";
import Footer from "components/Footer/Footer.js";

export default function BusinessEnqueries() {
  return (
    <>
      <Navbar />
      <div className="main section">
        <Container className="mt-5">
          <Container>
            <Row className="justify-content-center">
              <h1 className="display-1 text-dark font-weight-bold text-center">
                Contact Us
              </h1>
            </Row>
          </Container>
        </Container>
        <Enqueries />
        <Footer />
      </div>
    </>
  );
}
