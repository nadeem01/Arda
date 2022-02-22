import React from "react";
import "./intro.css"
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
        <Container >
         <Row>
            <Col lg="6">
              <div className="title">
                <h3 className="text-muted">Mission Statement</h3>
              </div>
              <h2 style={{color: "#252f3e"}} className="display-2 text-info  font-weight-bold">
                Redefining IT Solutions
              </h2>
              <h4 className="description font-weight-normal">
                Arda - is a digital IT Consulting & Service provider company
                established around 5 years back with the mission to build
                Futuristic products equipped with the best Tools and
                Technologies available in the market.
                <br />  <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                reiciendis pariatur incidunt. Cum, cumque alias laudantium iusto
                praesentium ratione similique.
              </h4>
            </Col>
            <Col lg="6" className="py-5">
              <img className="my-5 " src={require("assets/img/it-solutions.jpg")} />
            </Col>
          {/* </Row> */}
          <img
            alt="..."
            className="path path1"
            src={require("assets/img/waves.png")}
            style={{ filter: "invert(100%)" }}
          />
          </Row>
          <Row>
            <Col>
              <p className="display-4 font-weight-normal  text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                nulla quibusdam dolor consequuntur deleniti cupiditate dolorum
                dignissimos odio aliquam voluptates?
              </p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center mt-5">
            <Col lg="4"  className="d-flex justify-content-center align-items-center">
              <a href="#wwd" className="card human-resources">
                <div className="overlay" />
                <div className="circle">
                    <img src={require("assets/img/work.png")} width="66px" height="77px" />
                </div>
                <p className="hvoerPTag"> What We Do?</p>
              </a>
            </Col>
            <Col lg="4" className="d-flex justify-content-center align-items-center">
              <a href="#wwa" className="card human-resources">
                <div className="overlay" />
                <div className="circle">
                    <img src={require("assets/img/we.png")} width="66px" height="77px" />
                </div>
                <p  className="hvoerPTag"> Who We Are?</p>
              </a>
            </Col>
            <Col lg="4"  className="d-flex justify-content-center align-items-center">
              <a href="#wwd" className="card human-resources">
                <div className="overlay" />
                <div className="circle">
                    <img src={require("assets/img/success.png")} width="66px" height="77px" />
                </div>
                <p className="hvoerPTag"> Success Stories</p>
              </a>
            </Col>
          </Row>
        </Container>
      </Container>
      <UncontrolledCarousel items={items} style={{ borderRadius: "0px" }} />
    </>
  );
}
