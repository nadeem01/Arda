import React from "react";
import "assets/css/nucleo-icons.css";

import classnames from "classnames";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledCarousel,
} from "reactstrap";

const carouselItems = [
  {
    src: require("assets/img/services1.jpg"),
    altText: "Technology",
    caption: "",
  },
  {
    src: require("assets/img/services2.jpg"),
    altText: "Future",
    caption: "",
  },
  {
    src: require("assets/img/services3.jpg"),
    altText: "Team",
    caption: "",
  },
];

export default function ServicesSection() {
  return (
    <>
      <Container className="section">
        <Container>
          <Row>
            <Col lg="6">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={false}
              />
            </Col>
            <Col lg="6">
              <h2 className="mt-2 mt-lg-0 display-2 text-info font-weight-bold">
                Services <i className="tim-icons icon-scissors" />
              </h2>
              <h4 className="description font-weight-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                consequuntur, doloribus quisquam accusantium ducimus tenetur quo
                maiores, quis unde laborum dolorum magni amet pariatur odio
                nesciunt voluptas provident sunt aut!
              </h4>
              <Button className="mt-3 btn btn-info"  href="/services">
                Explore More
              </Button>
            </Col>
          </Row>

        </Container>
      </Container>
    </>
  );
}
