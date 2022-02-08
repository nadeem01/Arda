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
    altText: "Arda - The Future is Digital",
    caption: "",
    header: "Best Leading IT Company",
  },
  {
    src: require("assets/img/intro1.jpg"),
    altText: "Arda - The Future is Digital",
    caption: "",
    header: "Assurance and Quality Guranteed",
  },
  {
    src: require("assets/img/intro2.jpg"),
    altText: "Arda - The Future is Digital",
    caption: "",
    header: "Bringing Innovative Ways to Solve Complex Challenges",
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
          <Row className="justify-content-center align-items-center section">
            <Nav
              className="nav-pills-info nav-pills-icons justify-content-center"
              pills
            >
              <Col lg="4">
                <NavItem className="mx-0 mx-lg-3 mb-4 mb-sm-4 mb-lg-0 shadow-lg">
                  <NavLink href="#wwd" id="pills">
                    <img src={require("assets/img/work.png")} />
                    <h3 className="display-3 text-white font-weight-normal">
                      What We Do?
                    </h3>
                    <i className="tim-icons icon-minimal-down font-weight-bold"/>
                  </NavLink>
                </NavItem>
              </Col>
              <Col lg="4">
                <NavItem className="mx-0 mx-lg-3 mb-4 mb-sm-4 mb-lg-0 shadow-lg">
                  <NavLink href="#wwa" id="pills">
                    <img src={require("assets/img/we.png")} />
                    <h3 className="display-3 text-white font-weight-normal">
                      Who We Are?
                    </h3>
                    <i className="tim-icons icon-minimal-down font-weight-bold"/>
                  </NavLink>
                </NavItem>
              </Col>
              <Col lg="4">
                <NavItem className="mx-0 mx-lg-3 mb-4 mb-sm-4 mb-lg-0 shadow-lg">
                  <NavLink href="#" id="pills">
                    <img src={require("assets/img/success.png")} />
                    <h3 className="display-3 text-white font-weight-normal">
                      Success Stories
                    </h3>
                    <i className="tim-icons icon-minimal-down font-weight-bold"/>
                  </NavLink>
                </NavItem>
              </Col>
            </Nav>
          </Row>
        </Container>
      </Container>
      <UncontrolledCarousel items={items} style={{ borderRadius: "0px" }} />
    </>
  );
}
