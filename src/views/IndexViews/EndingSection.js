import React from "react";
import classnames from "classnames";
// plugin that creates slider
import Slider from "nouislider";
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
  Badge,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

import Heading from "components/Header/Heading.js";

export default function EndingSection() {
  return (
    <>
    <Heading title="Transforming Business Across the Globe"/>
    <Container className="section mb-5" id="wwa">
      <img
        className="path path1"
        src={require("assets/img/triunghiuri.png")}
        style={{ filter: "invert(100%)" }}
      />
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col className="mb-5 mb-lg-0" lg="5">
            <div className="title">
              <h3 className="text-muted">Background & History</h3>
            </div>
            <h1 className="font-weight-bold text-info">
              5 Years of Innovations
            </h1>
            <p className="text-dark mt-4 font-weight-normal description">
              Black Design comes with three pre-built pages to help you get
              started faster. You can change the text and images and you're good
              to go.
            </p>
            <Button className="mt-4" color="info" href="#">
              Explore What We Do
            </Button>
          </Col>
          <Col lg="6">
            <img src={require("assets/img/maintenance.png")} />
          </Col>
        </Row>
      </Container>
    </Container>
    </>
  );
}
