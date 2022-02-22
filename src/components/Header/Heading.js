import React from "react";
import "assets/css/nucleo-icons.css";
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
