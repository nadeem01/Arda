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
} from "reactstrap";

const carouselItems = [
  {
    src: require("assets/img/consult1.jpg"),
    altText: "Technology",
    caption: "",
  },
  {
    src: require("assets/img/consult2.jpg"),
    altText: "Future",
    caption: "",
  },
  {
    src: require("assets/img/consult3.jpg"),
    altText: "Team",
    caption: "",
  },
];

export default function ConsultingSection() {
  return (
    <>
      <Container className="section">
        <Container>
          <Row>
            <Col lg="6">
              <h2 className="mt-2 mt-lg-0 display-4 text-info font-weight-bold">
                Consulting <i className="tim-icons icon-bulb-63" />
              </h2>
              <h4 className="description  font-weight-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                consequuntur, doloribus quisquam accusantium ducimus tenetur quo
                maiores, quis unde laborum dolorum magni amet pariatur odio
                nesciunt voluptas provident sunt aut!
              </h4>
              <Button  className="mt-3 btn btn-info" href="/consulting">
                Explore More
              </Button>
            </Col>
            <Col lg="6">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={false}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
