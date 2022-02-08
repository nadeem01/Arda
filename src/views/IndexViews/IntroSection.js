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
              <div className="title">
                <h3 className="text-muted">Mission Statement</h3>
              </div>
              <h2 className="display-2 text-dark font-weight-bold">
                Redefining IT Solutions
              </h2>
              <p className="description text-dark font-weight-normal">
                Arda - is a digital IT Consulting & Service provider company
                established around 5 years back with the mission to build
                Futuristic products equipped with the best Tools and
                Technologies available in the market.
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
          <img
            alt="..."
            className="path path1"
            src={require("assets/img/waves.png")}
            style={{ filter: "invert(100%)" }}
          />
          
          <div className="squares square5" />

            {/* Buttons */}
          <Row className="justify-content-center align-items-center section">
            <Nav className="nav-pills-info nav-pills-icons" pills>
              <NavItem className="mx-lg-3">
                <NavLink href="#pablo" id="pills">
                  <i className=" display-3 text-white font-weight-bold tim-icons icon-atom" />
                  <h3 className="display-3 text-white font-weight-normal">
                    What We Do?
                  </h3>
                </NavLink>
              </NavItem>

              <NavItem className="mx-lg-3">
                <NavLink href="#pablo" id="pills">
                <i className=" display-3 text-white font-weight-bold tim-icons icon-atom" />
                  <h3 className="display-3 text-white font-weight-normal">
                    Who We Are?
                  </h3>
                  </NavLink>
              </NavItem>

              <NavItem className="mx-lg-3">
                <NavLink href="#pablo" id="pills">
                <i className=" display-3 text-white font-weight-bold tim-icons icon-atom" />
                  <h3 className="display-3 text-white font-weight-normal">
                    Success Stories
                  </h3>
                </NavLink>
              </NavItem>
            </Nav>
          </Row>
          {/* <Col lg="4" className="justify-content-center align-items-center">hi</Col>
                <Col lg="4" className="justify-content-center align-items-center">hi</Col>
                <Col lg="4" className="justify-content-center align-items-center">hi</Col> */}
        </Container>
      </Container>
      <UncontrolledCarousel items={items} style={{ borderRadius: "0px" }} />
    </>
  );
}
