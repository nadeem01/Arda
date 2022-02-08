import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// Components
import Navbar from "components/Navbar/Navbar.js";
import Enqueries from "components/Enqueries/Enqueries.js";
import Footer from "components/Footer/Footer.js";

export default function Partners() {
  return (
    <>
    <Navbar />
    <div className="section section-nucleo-icons" id="Partners">
      <img
        alt="..."
        className="path"
        src={require("assets/img/path3.png").default}
      />
      <Container className="section">
        <Row className="justify-content-center">
          <Col lg="8" md="12">
            <h2 className="display-2 text-info text-center">Our Partners</h2>
            <h4 className="description font-weight-normal">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
              eligendi dolore ad eum magni ratione, enim dolor ipsam veritatis
              modi velit et porro hic explicabo. Aspernatur temporibus sint ut,
              tempore corrupti impedit, facilis asperiores commodi aperiam
              eveniet velit facere natus.
            </h4>
            <div className="btn-wrapper">
              <Button
                className="btn-round"
                color="info"
                href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/icons"
                rel="noopener noreferrer"
                target="_blank"
              >
                Read More
              </Button>
              <Button
                className="btn-simple btn-round"
                color="info"
                href="https://nucleoapp.com/?ref=1712"
                rel="noopener noreferrer"
                size="lg"
                target="_blank"
              >
                View Testimonials
              </Button>
            </div>
          </Col>
        </Row>
        <div className="blur-hover">
          <a href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/icons">
            <div className="icons-container blur-item on-screen mt-5">
              {/* Center */}
              <i className="fab fa-google text-default" />
              {/* Right 1 */}
              <i className="fab fa-facebook display-1 text-default" />
              <i className="fab fa-amazon display-1 text-default" />
              <i className="fab fa-microsoft display-1 text-default" />
              {/* Right 2 */}
              <i className="fab fa-twitte display-1 text-default" />
              <i className="fab fa-spotify display-1 text-default" />
              <i className="fab fa-apple display-1 text-default" />
              {/* Left 1 */}
              <i className="fab fa-linkedin display-1 text-default" />
              <i className="fab fa-snapchat display-1 text-default" />
              <i className="fab fa-github display-1 text-default" />
              {/* Left 2 */}
              <i className="fab fa-instagram display-1 text-default" />
              <i className="fab fa-youtube display-1 text-default" />
              <i className="fab fa-skype display-1 text-default" />
            </div>
            <span className="blur-hidden h5 text-warning">
              Read Customer Testimonials
            </span>
          </a>
        </div>
        
      </Container>
    </div>
    <Footer />
    </>
  );
}
