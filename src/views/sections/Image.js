import React from "react";
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
} from "reactstrap";

export default function Image() {
  return(
      <Container>
    <UncontrolledCarousel
    items={[
      {
        altText: 'Slide 1',
        caption: 'Maintainance',
        key: 1,
        src: 'https://picsum.photos/id/123/1200/600'
      },
      {
        altText: 'Slide 2',
        caption: 'Quality',
        key: 2,
        src: 'https://picsum.photos/id/456/1200/600'
      },
      {
        altText: 'Slide 3',
        caption: 'Support',
        key: 3,
        src: 'https://picsum.photos/id/678/1200/600'
      }
    ]}
   />
   </Container>
  );
}
