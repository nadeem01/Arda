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

export default function Technology() {
  return (
    <Container className="section mb-5" id="Technology">
      <Row className="justify-content-center">
        <Col>
          <h2 className="text-center text-info">Technology</h2>
          <p className="text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae deserunt nihil quod atque accusantium perferendis
            impedit reprehenderit sint necessitatibus et!
          </p>
        </Col>
      </Row>

      <Row>
        <Col className="p-5" xs="12" sm="12" md="12" lg="4">
          <Row className="justify-content-center">
            <i className="display-1 border rounded-circle p-3 tim-icons icon-cloud-download-93 text-info text-info" />
          </Row>
          <Row className="justify-content-center">
            <b>
              <h3 className="title text-center">
                Cloud Hosting & SaaS Solutions
              </h3>
            </b>
          </Row>
          <Row className="justify-content-center">
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              voluptates! Molestiae deleniti similique tempore fugit.
            </p>
          </Row>
        </Col>
        <Col className="p-5" xs="12" sm="12" md="12" lg="4">
          <Row className="justify-content-center">
            <i className="display-1 border rounded-circle p-3 tim-icons icon-coins text-info" />
          </Row>
          <Row className="justify-content-center">
            <b>
              <h3 className="title text-center">Big Data & Analytics</h3>
            </b>
          </Row>
          <Row className="justify-content-center">
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              error id laborum excepturi voluptates repellat.
            </p>
          </Row>
        </Col>
        <Col className="p-5" xs="12" sm="12" md="12" lg="4">
          <Row className="justify-content-center">
            <i className="display-1 border rounded-circle p-3 tim-icons icon-bulb-63 text-info" />
          </Row>
          <Row className="justify-content-center">
            <b>
              <h3 className="title text-center">Enterprise Solutions</h3>
            </b>
          </Row>
          <Row className="justify-content-center">
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              error id laborum excepturi voluptates repellat.
            </p>
          </Row>
        </Col>
      </Row>
      <img
          alt="..."
          className="path path1"
          src={require("assets/img/path3.png")}
        />
      <Row>
        <Col className="p-5" xs="12" sm="12" md="12" lg="4">
          <Row className="justify-content-center">
            <i className="display-1 border rounded-circle p-3 tim-icons icon-mobile text-info" />
          </Row>
          <Row className="justify-content-center">
            <b>
              <h3 className="title text-center">Mobile Solutions</h3>
            </b>
          </Row>
          <Row className="justify-content-center">
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              error id laborum excepturi voluptates repellat.
            </p>
          </Row>
        </Col>
        <Col className="p-5" xs="12" sm="12" md="12" lg="4">
          <Row className="justify-content-center">
            <i className="display-1 border rounded-circle p-3 tim-icons icon-delivery-fast text-info" />
          </Row>
          <Row className="justify-content-center">
            <b>
              <h3 className="title text-center">E-Commerce Solutions</h3>
            </b>
          </Row>
          <Row className="justify-content-center">
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              error id laborum excepturi voluptates repellat.
            </p>
          </Row>
        </Col>
        <Col className="p-5" xs="12" sm="12" md="12" lg="4">
          <Row className="justify-content-center">
            <i className="display-1 border rounded-circle p-3 tim-icons icon-scissors text-info" />
          </Row>
          <Row className="justify-content-center">
            <b>
              <h3 className="title text-center">Tailored Solutions</h3>
            </b>
          </Row>
          <Row className="justify-content-center">
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              error id laborum excepturi voluptates repellat.
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
