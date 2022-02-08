import React from "react";
import "assets/css/nucleo-icons.css";

import classnames from "classnames";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Button,
  FormGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader,
  Modal,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  UncontrolledCarousel,
} from "reactstrap";

// Components
import Navbar from "components/Navbar/Navbar.js";
import Enqueries from "components/Enqueries/Enqueries.js";
import Footer from "components/Footer/Footer.js";

const items = [
  {
    src: require("assets/img/servicess1.jpg"),
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header",
  },
  {
    src: require("assets/img/servicess1.jpg"),
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header",
  },
  {
    src: require("assets/img/servicess1.jpg"),
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header",
  },
];

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="main section">
        <Container className="section">
          <Container>
            <Row>
              <Col lg="6">
                <h2 className="display-2 text-dark font-weight-bold">
                  Top notch Services
                </h2>
                <p className="description text-dark font-weight-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, itaque? Explicabo autem laborum, totam facere
                  assumenda commodi sint incidunt reiciendis!
                </p>
                <Button className="mt-3">Explore Areas</Button>
              </Col>
              <Col lg="6">
                <img src={require("assets/img/services.png")} />
              </Col>
            </Row>
          </Container>
        </Container>
        <UncontrolledCarousel items={items} />
        <Container className="section" id="Services">
          <Row className="justify-content-center">
            <Col>
              <h2 className="display-2 text-center text-info">Services</h2>
              <p className="text-center font-weight-normal">
                We provide specialized technology-oriented services by combining
                the processes and functions of software, hardware, networks,
                electronics and infrastructure.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="p-5" xs="12" sm="12" md="12" lg="4">
              <Row className="justify-content-center">
                <i className="display-1 border border-info rounded-circle p-3 tim-icons icon-settings text-white text-info bg-info" />
              </Row>
              <Row className="justify-content-center">
                <b>
                  <h3 className="title text-center">IT Support Services</h3>
                </b>
              </Row>
              <Row className="justify-content-center">
                <p className="text-center font-weight-normal">
                  We provide functions, maintenance, and support of information
                  technology devices, or services including but not limited to
                  computer systems application development and maintenance;
                  systems integration and interoperability; operating systems
                  maintenance and design
                </p>
              </Row>
            </Col>
            <Col className="p-5" xs="12" sm="12" md="12" lg="4">
              <Row className="justify-content-center">
                <i className="display-1 border border-info rounded-circle p-3 tim-icons icon-wifi text-white text-info bg-info" />
              </Row>
              <Row className="justify-content-center">
                <b>
                  <h3 className="title text-center">
                    IT Security & Network Services
                  </h3>
                </b>
              </Row>
              <Row className="justify-content-center">
                <p className="text-center font-weight-normal">
                  IT services are necessary to keep your business running at
                  peak performance. Network security solutions include
                  firewalls, anti-virus software, web filtering, patch
                  management, built-in VPNs, and regularly scheduled check-ups
                  from your IT service provider.
                </p>
              </Row>
            </Col>
          </Row>
          <Enqueries />
        </Container>
      </div>
      <Footer />
    </>
  );
}
