import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import "./Navbar.css"
export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("bg-white");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-white");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("bg-white");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  const scrollToBooking = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Navbar
      className={"shadow-sm fixed-top " + color}
      color-on-scroll="100"
      expand="lg"
      id="topbar"
    >
      <Container>
        <div className="modifiedNav navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <span>
              <img src={require("assets/logo/blue-transparent.png")} />
            </span>
          </NavbarBrand>

          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            The Future Is Digital
          </UncontrolledTooltip>

          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"bg-white justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a
                  href="#"
                  className="bg-white"
                  onClick={(e) => e.preventDefault()}
                >
                  <img src={require("assets/logo/blue-transparent.png")} />
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler text-dark font-weight-bold"
                  onClick={toggleCollapse}
                >
                  <i className="text-dark font-weight-bold tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>

          <Nav navbar>
            {/* Dropdowns */}
            {/* Solutions */}
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="modifiedColor  fa fa-cogs d-lg-none d-xl-none" />
                <span  className="modifiedColor text-dark font-weight-normal">Solutions</span>
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem href="/technology">
                  <i className="tim-icons icon-atom" />
                  <span className="text-dark">Technology</span>
                </DropdownItem>
                <DropdownItem href="/consulting">
                  <i className="tim-icons icon-bulb-63" />
                  <span className="text-dark">Consulting</span>
                </DropdownItem>
                <DropdownItem href="/services">
                  <i className="tim-icons icon-settings" />
                  <span className="text-dark">Services</span>
                </DropdownItem>
                <DropdownItem href="/hardware">
                  <i className="tim-icons icon-laptop" />
                  <span className="text-dark">Hardware</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/* About Us */}
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                data-toggle="dropdown"
                href="#pablo"
                nav
                className="modifiedColor"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                <span className=" modifiedColor text-dark font-weight-normal">About Us</span>
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem href="/mission">
                  <i className="tim-icons icon-user-run" />
                  <span className="text-dark">Mission</span>
                </DropdownItem>
                {/* <DropdownItem href="/about#Team">
                  <i className="tim-icons icon-heart-2" />
                  <span className="text-dark">Meet the Team</span>
                </DropdownItem> */}
                <DropdownItem href="/partners">
                  <i className="tim-icons icon-single-02" />
                  <span className="text-dark">Our Partners</span>
                </DropdownItem>
                <DropdownItem href="/enqueries">
                  <i className="tim-icons icon-send" />
                  <span className="text-dark">Business Enqueries</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/* Success Stories */}
            {/* <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                Success Stories
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem href="/success">
                  <i className="tim-icons icon-planet" />
                  Industry Verticals
                </DropdownItem>
                <DropdownItem href="/success">
                  <i className="tim-icons icon-paper" />
                  Case Studies
                </DropdownItem>
                <DropdownItem href="/success">
                  <i className="tim-icons icon-satisfied" />
                  Customer Testimonials
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}

            <NavItem className="mr-0 mr-lg-3">
              <NavLink onClick={scrollToBooking} style={{ cursor: "pointer" }}>
                <span className="modifiedColor font-weight-normal">
                  Get in Touch &nbsp; <i className="tim-icons icon-spaceship" />
                </span>
              </NavLink>
            </NavItem>

            {/* Socials */}
            {/* Twitter Handle */}
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="modifiedColor fab fa-twitter" />
                <p className="d-lg-none d-xl-none text-dark">Twitter</p>
              </NavLink>
            </NavItem>
            {/* Facebook Handle */}
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className=" modifiedColor fab fa-facebook-square" />
                <p className="d-lg-none d-xl-none text-dark">Facebook</p>
              </NavLink>
            </NavItem>
            {/* Instagram Handle */}
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="modifiedColor fab fa-instagram" />
                <p className="d-lg-none d-xl-none text-dark">Instagram</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
