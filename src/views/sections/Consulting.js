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

export default function Consulting() {
  return (
    <Container className="section mb-5" id="Consulting">
      <Row className="justify-content-center">
        <Col>
          <h2 className="display-2 text-center text-info">Consulting</h2>
          <p className="text-center font-weight-normal">
            We advises clients, businesses and companies on how to best use information technology (IT)
            practices to achieve their business objectives.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="p-5" xs="12" sm="12" md="12" lg="4">
          <Row className="justify-content-center">
            <i className="display-1 border border-info rounded-circle p-3 tim-icons icon-tap-02 text-info" />
          </Row>
          <Row className="justify-content-center">
            <b>
              <h3 className="title text-center">
                Digital Transformation Advisory
              </h3>
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
            <i className="display-1 border border-info rounded-circle p-3 tim-icons icon-molecule-40 text-info" />
          </Row>
          <Row className="justify-content-center">
            <b>
              <h3 className="title text-center">Enterprise - ERP, ICT & BI</h3>
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
