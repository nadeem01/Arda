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

export default function Services() {
  return (
    <Container className="section mb-5" id="Services">
      <Row className="justify-content-center">
        <Col>
          <h2 className="display-2 text-center text-info">Services</h2>
          <p className="text-center font-weight-normal">
            We provide specialized technology-oriented services by combining the
            processes and functions of software, hardware, networks, electronics
            and infrastructure.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="p-5" xs="12" sm="12" md="12" lg="4">
          <Row className="justify-content-center">
            <i className="display-1 border border-info rounded-circle p-3 tim-icons icon-cloud-download-93 text-white text-info bg-info" />
          </Row>
          <Row className="justify-content-center">
            <b>
              <h3 className="title text-center">IT Support Services</h3>
            </b>
          </Row>
          <Row className="justify-content-center">
            <p className="text-center font-weight-normal">
              We provide functions, maintenance, and support of
              information technology devices, or services including but not
              limited to computer systems application development and
              maintenance; systems integration and interoperability; operating
              systems maintenance and design
            </p>
          </Row>
        </Col>
        <Col className="p-5" xs="12" sm="12" md="12" lg="4">
          <Row className="justify-content-center">
            <i className="display-1 border border-info rounded-circle p-3 tim-icons icon-cloud-download-93 text-white text-info bg-info" />
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              error id laborum excepturi voluptates repellat.
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
