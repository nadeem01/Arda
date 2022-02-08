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

export default function Heading(props) {
  return(
      <>
      <h2 className="display-3 text-white font-weight-bolder text-center shadow-lg py-5" id="heading">
          <Container>
            <Container>
            {props.title}
            </Container>
          </Container>
      </h2>
      </>
  );
}
