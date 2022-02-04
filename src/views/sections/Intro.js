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
} from "reactstrap";

const carouselItems = [
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Technology",
    caption: "",
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Future",
    caption: "",
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Team",
    caption: "",
  },
];

export default function intro() {
  return (
    <Container className="section">
      <Container>
        <img
          alt="..."
          className="path path1"
          src={require("assets/img/waves.png")}
          style={{ filter: "invert(100%)" }}
        />

        <div className="row d-flex flex-row">
          <div className="col-12">
            <h2 className="display-4" style={{ color: "#171941" }}>
              Background
            </h2>
            <h3 className="mb-0 font-weight-normal text-dark">
              Arda - is a digital IT Consulting & Service provider company
              established around 5 years back with the mission to build
              Futuristic products equipped with the best Tools and Technologies
              available in the market.
            </h3>
          </div>
        </div>

        <div className="section mt-3 mt-sm-3 mt-md-3 mt-lg-5">
          <div className="title">
            <h3 className="text-muted">2015 - Present</h3>
          </div>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="font-weight-bold text-warning">
                5 Years of Innovations
              </h1>
              <p className="text-dark mt-4 font-weight-normal">
                Black Design comes with three pre-built pages to help you get
                started faster. You can change the text and images and you're
                good to go.
              </p>
              <Button
                className="mt-4"
                color="warning"
                href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/alert"
              >
                Explore What We Do
              </Button>
            </Col>
            <Col lg="6">
              <img src={require("assets/img/maintenance.png")} />
              {/* <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={false}
              /> */}
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
}
