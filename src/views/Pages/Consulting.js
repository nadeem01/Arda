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
  Nav,
} from "reactstrap";

// Components
import Navbar from "components/Navbar/Navbar.js";
import Enqueries from "components/Enqueries/Enqueries.js";
import Footer from "components/Footer/Footer.js";

const items = [
  {
    src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header",
  },
  {
    src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header",
  },
  {
    src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header",
  },
];

export default function Consulting() {
  return (
    <>
      <Navbar />
      <div className="main section">
        <Container className="section">
          <Container>
            <Row>
              <Col lg="6">
                <h2 className="display-2 text-dark font-weight-bold">
                  Get Best Consulting
                </h2>
                <p className="description text-dark font-weight-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, itaque? Explicabo autem laborum, totam facere
                  assumenda commodi sint incidunt reiciendis!
                </p>
                <Button className="mt-3">Explore Areas</Button>
              </Col>
              <Col lg="6">
                <img src={require("assets/img/consulting.png")} />
              </Col>
            </Row>
          </Container>
        </Container>
        <UncontrolledCarousel items={items} />
        <Container className="section" id="Consulting">
          <Row className="justify-content-center">
            <Col>
              <h2 className="display-2 text-center text-info">Consulting</h2>
              <p className="text-center font-weight-normal">
                We advises clients, businesses and companies on how to best use
                information technology (IT) practices to achieve their business
                objectives.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="p-5" xs="12" sm="12" md="12" lg="4">
              <Row className="justify-content-center">
                <i className="display-1 border border-info rounded-circle p-3 tim-icons icon-tap-02 text-white text-info bg-info" />
              </Row>
              <Row className="justify-content-center">
                <b>
                  <h3 className="title text-center">
                    Digital Transformation Advisory
                  </h3>
                </b>
              </Row>
              <Row className="justify-content-center">
                <p className="text-center font-weight-normal">
                  Digital Transformation Services engage senior business leaders
                  in the changing world of industrial technology to define and
                  accelerate their digital agenda.
                </p>
              </Row>
            </Col>
            <Col className="p-5" xs="12" sm="12" md="12" lg="4">
              <Row className="justify-content-center">
                <i className="display-1 border border-info rounded-circle p-3 tim-icons icon-molecule-40 text-white text-info bg-info" />
              </Row>
              <Row className="justify-content-center">
                <b>
                  <h3 className="title text-center">
                    Enterprise - ERP, ICT & BI
                  </h3>
                </b>
              </Row>
              <Row className="justify-content-center">
                <p className="text-center font-weight-normal">
                  Enterprise resource planning (ERP) is a mainstay technology in
                  businesses that want to gather, analyze and share insights
                  among multiple departments, such as accounting, operations.
                </p>
              </Row>
            </Col>
          </Row>
          <Enqueries />
        </Container>
      </div>
      <Footer />
    </>
  );
}
