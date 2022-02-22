import React from "react";
import "assets/css/nucleo-icons.css";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledCarousel,
} from "reactstrap";

import Navbar from "components/Navbar/Navbar.js";
import Enqueries from "components/Enqueries/Enqueries.js";
import Footer from "components/Footer/Footer.js";

const items = [
  {
    src: require("assets/img/hardwaree1.jpg"),
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header",
  },
  {
    src: require("assets/img/hardwaree1.jpg"),
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header",
  },
  {
    src: require("assets/img/hardwaree1.jpg"),
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header",
  },
];

export default function Hardware() {
  return (
    <>
      <Navbar />

      <div className="main section">
        <Container className="section">
          <Container>
            <Row>
              <Col lg="6">
                <h2 className="display-2 text-dark font-weight-bold">
                  High Quality Hardware
                </h2>
                <p className="description text-dark font-weight-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, itaque? Explicabo autem laborum, totam facere
                  assumenda commodi sint incidunt reiciendis!
                </p>
                <Button className="mt-3">Explore Areas</Button>
              </Col>
              <Col lg="6">
                <img src={require("assets/img/hardware.png")} />
              </Col>
            </Row>
          </Container>
        </Container>

        <UncontrolledCarousel items={items} />

        <Container className="section" id="Hardware">
          <Row className="justify-content-center">
            <Col>
              <h2 className="display-2 text-center text-info">Hardware</h2>
              <p className="text-center font-weight-normal">
                Hardware makers and entrepreneurs meet up and share their
                electronics projects on Hackster. There is no better resource
                for finding electronic maker projects to learn from !
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="p-5" xs="12" sm="12" md="12" lg="4">
              <Row className="justify-content-center">
                <i className="display-1 border border-info rounded-circle p-3 tim-icons icon-laptop text-white text-info bg-info" />
              </Row>
              <Row className="justify-content-center">
                <b>
                  <h3 className="title text-center">Computing Devices</h3>
                </b>
              </Row>
              <Row className="justify-content-center">
                <p className="text-center font-weight-normal">
                  Accelerate your digital transformation journey with the right
                  computing devices. Build a workplace that adapts to new
                  challenges and be more productive and creative wherever you
                  are.
                </p>
              </Row>
            </Col>
            <Col className="p-5" xs="12" sm="12" md="12" lg="4">
              <Row className="justify-content-center">
                <i className="display-1 border border-info rounded-circle p-3 tim-icons icon-user-run text-white text-info bg-info" />
              </Row>
              <Row className="justify-content-center">
                <b>
                  <h3 className="title text-center">
                    Hardware Support Services
                  </h3>
                </b>
              </Row>
              <Row className="justify-content-center">
                <h4 className="description text-center font-weight-normal">
                  Hardware support is vital to a business's IT. It works to
                  ensure smooth,trouble-free operations.In addition to software,
                  device driver, and firmware updates,hardware can fail,
                  requiring troubleshooting .
                </h4>
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
