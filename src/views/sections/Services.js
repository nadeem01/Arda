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
          <h2 className="text-center text-info">Services</h2>
          <p className="text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae deserunt nihil quod atque accusantium perferendis
            impedit reprehenderit sint necessitatibus et!
          </p>
        </Col>
      </Row>
      <img
          alt="..."
          className="path path1"
          src={require("assets/img/path5.png")}
        />
      <Row className="justify-content-center">
        <Col className="p-5" xs="12" sm="12" md="12" lg="4">
          <Row className="justify-content-center">
            <i className="display-1 border border-info rounded-circle p-3 tim-icons icon-settings text-info" />
          </Row>
          <Row className="justify-content-center">
            <b>
              <h3 className="title text-center">IT Support Services</h3>
            </b>
          </Row>
          <Row className="justify-content-center">
            <p className="text-center font-weight-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              voluptates! Molestiae deleniti similique tempore fugit.
            </p>
          </Row>
        </Col>
        <Col className="p-5" xs="12" sm="12" md="12" lg="4">
          <Row className="justify-content-center">
            <i className="display-1 border border-info rounded-circle p-3 tim-icons icon-wifi text-info" />
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
