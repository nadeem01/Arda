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

export default function CompaniesSection() {
  return (
    <>
      <Container>
        <Container>
          <Row className="justify-content-center">
            <Col className="justify-content-center" lg="12">
              <p className="display-4  font-weight-normal text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                nostrum, eligendi ducimus doloribus deserunt reprehenderit, enim
                sapiente facilis quasi ullam similique recusandae consequuntur
                dolor a!
              </p>
            </Col>
            <Col lg="12" className="mt-5 justify-content-center align-items-center">
              <Row className="justify-content-center align-items-center">
                <Col sm="2" lg="2" className="mb-4 mb-lg-0 justify-content-center align-items-center text-center">
                  <img src={require("assets/img/aws-logo.png")} alt="" />
                </Col>
                <Col sm="2" lg="2" className="mb-4 mb-lg-0 justify-content-center text-center">
                  <img src={require("assets/img/gcp-logo.png")} alt="" />
                </Col>
                <Col sm="2" lg="2" className="mb-4 mb-lg-0 justify-content-center text-center">
                  <img src={require("assets/img/ibm-logo.png")} alt="" />
                </Col>
                <Col sm="2" lg="2" className="mb-4 mb-lg-0 justify-content-center text-center">
                  <img src={require("assets/img/microsoft-logo.png")} alt="" />
                </Col>
                <Col sm="2" lg="2" className="mb-4 mb-lg-0 justify-content-center text-center">
                  <img src={require("assets/img/hp-logo.png")} alt="" />
                </Col>
                <Col sm="2" lg="2" className="mb-4 mb-lg-0 justify-content-center text-center">
                  <img src={require("assets/img/dell-logo.png")} alt="" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
