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

const carouselItems = [
  {
    src: require("assets/img/tech1.jpg"),
    altText: "Technology",
    caption: "",
  },
  {
    src: require("assets/img/tech2.jpg"),
    altText: "Future",
    caption: "",
  },
  {
    src: require("assets/img/tech3.jpg"),
    altText: "Team",
    caption: "",
  },
];

export default function TechnologySection() {
  return (
    <>
      <Container className="section" id="wwd">
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
                Technology <i className="tim-icons icon-atom" />
              </h2>
              <h4 className="description  font-weight-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                consequuntur, doloribus quisquam accusantium ducimus tenetur quo
                maiores, quis unde laborum dolorum magni amet pariatur odio
                nesciunt voluptas provident sunt aut!
              </h4>
              <Button className="mt-3 btn btn-info"  href="/technology">
                Explore More
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>

    </>
  );
}
