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
import "./Heading.css"
export default function Heading(props) {
  return(
      <>
      <h2 className="modifiedCss  display-2 text-info  font-weight-bold text-center" >
          <Container>
            <Container>
            {props.title}
            </Container>
          </Container>
      </h2>
      </>
  );
}
