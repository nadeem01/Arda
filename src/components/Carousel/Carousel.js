import React from "react";
import classnames from "classnames";
import "./Carousel.css"
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

export default function Carousel() {
  return(
      <>
            <UncontrolledCarousel items={items} style={{ borderRadius: "0px" }} />
      </>
  );
}
