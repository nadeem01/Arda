import React from "react";
import "assets/css/nucleo-icons.css";


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

export default function PageHeader(props) {
  return (
    <div className="page-header header-filter " id="Hero" style={{background: "url(https://www.jahasoft.pk/wp-content/uploads/2018/11/Software-Company-in-Quetta.png) ",  backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
      {/* <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" /> */}
      <Container >
        <div className="content-center brand">
          <h1 className="h1-seo text-white">{props.title}</h1>
          <h4 className="title d-none d-sm-block text-white font-weight-bold">
            {props.desc}
          </h4>
          <Button href={props.link} className="mt-3  btn btn-info" >{props.btn}</Button>
        </div>
      </Container>
    </div>
  );
}
