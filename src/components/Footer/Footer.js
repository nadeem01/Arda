import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import "./Footer.css"
export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3 d-flex ">
            <h1  className="title">
            <br />
            {/* <span className="lead">The Future is Digital</span> */}
            <span>
              <img  src={require("assets/logo/blue-transparent.png")} />
            </span>
            </h1>

          </Col>
          <Col md="3 d-flex ">
            <Nav>
              <NavItem  >
                <NavLink style={{fontSize:" 1.75rem"}} className="font-weight-bold "  to="/" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink  className="linkModified text-center" to="/landing-page" tag={Link}>
                  Landing
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink  className=" linkModified text-center" to="/register-page" tag={Link}>
                  Register
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink  className="linkModified text-center" to="/profile-page" tag={Link}>
                  Profile
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3 d-flex ">
          <div>
            <Nav>
              <NavItem>
                <NavLink  style={{ color:"white",   fontSize:" 1.75rem"}}  className="font-weight-bold text-white" href="#">
                  Contact Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink  className="linkModified text-center" href="#">
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink  className="linkModified text-center" href="#">
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink   className="linkModified text-center" href="#">
                  License
                </NavLink>
              </NavItem>
            </Nav>
            </div>  
          </Col>
          <Col md="3 d-flex-column ">
          {/* <div className="title profile d-flex justify-content-center" > */}
            {/* <h2  className="title text-white text-center">Follow us:</h2> */}
            <Nav>
            <NavLink style={{    fontSize:" 1.75rem"}}  className="font-weight-bold" href="#">
            Follow us:
</NavLink>
            {/* </div> */}
            <div style={{boxShadow:"2px 2px 2px 1px rgba(0, 0, 0, 0.2)"}}  className="profile d-flex justify-content-center">
            <Button
              style={{background:" #1DA1F2"}}
                className="btn-icon btn-neutral btn-round btn-simple  mr-1"
                href="#"
                id="tooltip230450801"
                target="_blank"
              >
               <i class="fab fa-twitter"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip230450801">
                Like us
              </UncontrolledTooltip>
              <Button
              style={{background:" #3b5998"}}
                className="btn-icon btn-neutral btn-round btn-simple  mr-1"
                color="default"
                href="#"
                id="tooltip230450801"
                target="_blank"
              >
               <i class="fab fa-facebook-f fa-lg"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip230450801">
                Like us
              </UncontrolledTooltip>
              <Button
              style={{background:" #bc2a8d"}}
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="#"
                id="tooltip318450378"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip318450378">
                Follow us
              </UncontrolledTooltip>
            </div>
</Nav>

          </Col>
        </Row>
      </Container>
    </footer>
  );
}
