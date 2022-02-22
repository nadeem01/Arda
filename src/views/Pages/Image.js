import React from "react";

import {
  Container,
  Row,
} from "reactstrap";

export default function Image() {
  return(
      <Container>
        <Row>
          <img 
            src={require("assets/logo/logo.jpg")}
          />
        </Row>
   </Container>
  );
}
