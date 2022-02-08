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
import Image from "views/Pages/Image.js";

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

const items = [
  {
    src: require("assets/img/intro4.jpg"),
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header",
  },
  {
    src: require("assets/img/intro1.jpg"),
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header",
  },
  {
    src: require("assets/img/intro2.jpg"),
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header",
  },
];

export default function intro() {
  return (
    <>
    <Container className="section">
      <Container>
        <Row>
          <Col lg="6">
            <h2 className="display-2 text-dark font-weight-bold">
              Redefining IT Solutions
            </h2>
            <p className="description text-dark font-weight-normal">
              Arda - is a digital IT Consulting & Service provider company
              established around 5 years back with the mission to build
              Futuristic products equipped with the best Tools and Technologies
              available in the market.
              <br /> <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              reiciendis pariatur incidunt. Cum, cumque alias laudantium iusto
              praesentium ratione similique.
            </p>
          </Col>
          <Col lg="6">
            <img src={require("assets/img/earth3.jpg")} />
          </Col>
        </Row>
        <div className="squares square4" />
        <img
          alt="..."
          className="path path1"
          src={require("assets/img/waves.png")}
          style={{ filter: "invert(100%)" }}
        />
        <div className="section mt-3 mt-sm-3 mt-md-3 mt-lg-5">
          <div className="title">
            <h3 className="text-muted">2015 - Present</h3>
          </div>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="font-weight-bold text-warning">
                5 Years of Innovations
              </h1>
              <p className="text-dark mt-4 font-weight-normal description">
                Black Design comes with three pre-built pages to help you get
                started faster. You can change the text and images and you're
                good to go.
              </p>
              <Button className="mt-4" color="warning" href="#">
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
        <div className="squares square5" />











      </Container>
    </Container>
    <UncontrolledCarousel items={items} style={{borderRadius: "0px"}}/>
    </>
  );
}
