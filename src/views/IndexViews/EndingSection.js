import React from "react";
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

import Heading from "components/Header/Heading.js";

export default function EndingSection() {
  return (
    <>
    <Heading className="display-4  font-weight-normal text-center" title="Transforming Business Across the Globe"/>
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
            <h4 className="description font-weight-normal">
              Black Design comes with three pre-built pages to help you get
              started faster. You can change the text and images and you're good
              to go.
            </h4>
            <Button className="mt-4 btn btn-info"  href="#">
              Explore What We Do
            </Button>
          </Col>
          <Col lg="6">
            <img src={require("assets/img/innovation.jpg")} />
          </Col>
        </Row>
      </Container>
    </Container>
    </>
  );
}
