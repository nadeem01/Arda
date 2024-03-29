import React from "react";
// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

export default function Download() {
  return (
    <div
      className="section section-download"
      data-background-color="black"
      id="Enqueries"
    >
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <Container>
        <Row className="justify-content-md-center">
          <Col className="text-center" lg="8" md="12">
            <h2 className="title text-dark">
              Have any Queries to ask? Feel free to Reach us
            </h2>
            <h4 className="description text-dark">
              Cause if you do, it can be yours for FREE. Hit the button below to
              navigate to Creative Tim where you can find the design system in
              React format. Start a new project or give an old Bootstrap project
              a new look!
            </h4>
          </Col>
          <Col className="text-center" lg="8" md="12">
            <Button
              className="btn-round"
              color="info"
              href="/#Booking"
              role="button"
              size="lg"
            >
              Book a Call
            </Button>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Row className="row-grid align-items-center my-md">
          <Col lg="6">
            <h3 className="text-info font-weight-bold mb-2">
              We Love to Get Connected with YOU!
            </h3>
            <h4 className="mb-0 font-weight-light text-dark">
              Let's get in touch on any of these platforms.
            </h4>
          </Col>
          <Col className="text-lg-center btn-wrapper" lg="6">
            <Button
              className="btn-icon btn-round"
              color="twitter"
              id="twitter"
              size="lg"
            >
              <i className="fab fa-twitter" />
            </Button>
            <UncontrolledTooltip delay={0} target="twitter">
              Tweet!
            </UncontrolledTooltip>
            <Button
              className="btn-icon btn-round"
              color="facebook"
              id="facebook"
              size="lg"
            >
              <i className="fab fa-facebook-square" />
            </Button>
            <UncontrolledTooltip delay={0} target="facebook">
              Share!
            </UncontrolledTooltip>
            <Button
              className="btn-icon btn-round"
              color="github"
              href="#"
              id="tooltip877922017"
              size="lg"
              target="_blank"
            >
              <i className="fab fa-instagram" />
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip877922017">
              Star on Github
            </UncontrolledTooltip>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
