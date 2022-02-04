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

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("bg-info");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  },[]);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("bg-info");
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
  const scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>


        <div className="navbar-translate">
          {/* LOGO */}
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <span><img src={require("assets/logo/nav-logo.png")}/> </span>
          </NavbarBrand>
          {/* Popup */}
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            The Future is Digital
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
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()} className="text-info">
                  Arda
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
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
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                Solutions
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem href="/#Technology">
                  <i className="tim-icons icon-atom" />
                  Technology
                </DropdownItem>
                <DropdownItem href="/#Consulting">
                  <i className="tim-icons icon-bulb-63" />
                  Consulting
                </DropdownItem>
                <DropdownItem href="/#Services">
                  <i className="tim-icons icon-settings" />
                  Services
                </DropdownItem>
                <DropdownItem href="/#Hardware">
                  <i className="tim-icons icon-laptop" />
                  Hardware
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/* Know Us */}
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                Know Us
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem href="/about#Mission">
                  <i className="tim-icons icon-user-run" />
                  Mision
                </DropdownItem>
                <DropdownItem href="/about#Team">
                  <i className="tim-icons icon-heart-2" />
                  Meet the Team
                </DropdownItem>
                <DropdownItem href="/about#Partners">
                  <i className="tim-icons icon-single-02" />
                  Our Partners
                </DropdownItem>
                <DropdownItem href="/about#Enqueries">
                  <i className="tim-icons icon-send" />
                  Business Enqueries
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/* Success Stories */}
            <UncontrolledDropdown nav>
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
            </UncontrolledDropdown>

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
                <i className="fab fa-twitter" />
                <p className="d-lg-none d-xl-none">Twitter</p>
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
                <i className="fab fa-facebook-square" />
                <p className="d-lg-none d-xl-none">Facebook</p>
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
                <i className="fab fa-instagram" />
                <p className="d-lg-none d-xl-none">Instagram</p>
              </NavLink>
            </NavItem>

            {/* Reach Us */}
            <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="primary"
                href="/#Booking"
              >
                <i className="tim-icons icon-spaceship" /> Get in Touch
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
