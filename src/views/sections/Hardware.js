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

export default function Hardware() {
  return (
    <Container className="section mb-5" id="Hardware">
      <Row className="justify-content-center">
        <Col>
          <h2 className="display-2 text-center text-info">Hardware</h2>
          <p className="text-center font-weight-normal">
          Hardware makers and entrepreneurs meet up and share their electronics projects on Hackster.
           There is no better resource for finding electronic maker projects to learn from !
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="p-5" xs="12" sm="12" md="12" lg="4">
          <Row className="justify-content-center">
            <i className="display-1 border border-info rounded-circle p-3 tim-icons icon-laptop text-white text-info bg-info" />
          </Row>
          <Row className="justify-content-center">
            <b>
              <h3 className="title text-center">Computing Devices</h3>
            </b>
          </Row>
          <Row className="justify-content-center">
            <p className="text-center font-weight-normal">
            Accelerate your digital transformation journey with the right
             computing devices. Build a workplace that adapts to new
              challenges and be more productive and creative wherever you are.
            </p>
          </Row>
        </Col>
        <Col className="p-5" xs="12" sm="12" md="12" lg="4">
          <Row className="justify-content-center">
            <i className="display-1 border border-info rounded-circle p-3 tim-icons icon-user-run text-white text-info bg-info" />
          </Row>
          <Row className="justify-content-center">
            <b>
              <h3 className="title text-center">Hardware Support Services</h3>
            </b>
          </Row>
          <Row className="justify-content-center">
            <p className="text-center font-weight-normal">
              Hardware support is vital to a business's IT. It works to ensure smooth,trouble-free 
        operations.In addition to software, device driver, and firmware updates,hardware can 
        fail, requiring troubleshooting .
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
