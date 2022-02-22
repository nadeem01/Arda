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
                className="btn btn-info btn-round"
                // color="info"
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
              <div className="d-flex justify-content-center align-items-center blur-item on-screen mt-3">
                <img  className="mr-4"src={require("assets/client-logos/Buraq Properties.png")} width={100} height={90} />
                <img  className="mr-4" src={require("assets/client-logos/Eclaric Logo-01.jpg")} width={100} height={90} />
                <img  className="mr-4" src={require("assets/client-logos/Flex KF Traders-01.png")} width={100} height={90} />
                <img  className="mr-4" src={require("assets/client-logos/Let Start.png")} width={100} height={90} />
                <img  className="mr-4" src={require("assets/client-logos/NExt Generation.png")} width={100} height={90} />
                <img src={require("assets/client-logos/Tradify.png")} width={100} height={90} />
              </div>
            <span style={{textShadow: "20px 20px 20px #9A9A9A", color:"#9A9A9A"}} className="font-weight-bold description blur-hidden h3 text-warning">
              Read Customer Testimonials
            </span>
          </a>
        </div>
        
      </Container>
    </div>
    </>
  );
}
