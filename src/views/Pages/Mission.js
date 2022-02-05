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

export default function AboutUs() {
  return (
    <>
      <img
        alt="..."
        className="path path1"
        src={require("assets/img/path5.png")}
      />
      <Container className="section" id="Mission">
        <Container>
          <Row>
            <Col lg="6">
              <h2 className="display-2 text-info">Our Mission</h2>
              <p className="description font-weight-normal">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Explicabo, minus. Distinctio laboriosam doloremque magnam cum
                voluptate unde aliquam architecto laborum.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                vero necessitatibus sunt repellendus ducimus quos animi
                laboriosam libero natus, aspernatur provident ullam at dolores,
                laudantium exercitationem, cum veniam reiciendis ut!
              </p>
            </Col>
            <Col lg="6">
              <img className="rounded" src={require("assets/img/start-up.png")} />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
