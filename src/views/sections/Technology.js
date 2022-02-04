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

export default function Technology() {
  return (
    <>
    <Container className="section mb-5" id="Technology">
      <Row className="justify-content-center">
        <Col>
          <h2 className="display-2 text-center text-info">Technology</h2>
          <p className="text-center font-weight-normal">
            We use digital, graphic, and spatial thinking to create
            category-leading brand experiences that are meaningful to our
            clients and deliver value.
          </p>
        </Col>
      </Row>

      <Row>
        <Col className="p-5" xs="12" sm="12" md="12" lg="4">
          <Row className="justify-content-center">
            <i className="display-1 border border-info rounded-circle p-3 tim-icons icon-cloud-download-93 text-white text-info bg-info" />
          </Row>
          <Row className="justify-content-center">
            <b>
              <h3 className="title text-center">
                Cloud Hosting & SaaS Solutions
              </h3>
            </b>
          </Row>
          <Row className="justify-content-center">
            <p className="text-center font-weight-normal">
              Cloud Web Hosting packages with lowest guaranteed prices, that
              fits to all your business needs. Cloud hosting is the latest form
              of hosting that has become extremely popular over the past few
              years.
            </p>
          </Row>
        </Col>
        <Col className="p-5" xs="12" sm="12" md="12" lg="4">
          <Row className="justify-content-center">
            <i className="display-1 border border-info rounded-circle p-3 tim-icons icon-cloud-download-93 text-white text-info bg-info" />
          </Row>
          <Row className="justify-content-center">
            <b>
              <h3 className="title text-center">Big Data & Analytics</h3>
            </b>
          </Row>
          <Row className="justify-content-center">
            <p className="text-center font-weight-normal">
              Unleash the power of your data, generate transformative insights,
              optimize processes, and enhance your ROI with enterprise data
              analytics.
            </p>
          </Row>
        </Col>
        <Col className="p-5" xs="12" sm="12" md="12" lg="4">
          <Row className="justify-content-center">
            <i className="display-1 border border-info rounded-circle p-3 tim-icons icon-cloud-download-93 text-white text-info bg-info" />
          </Row>
          <Row className="justify-content-center">
            <b>
              <h3 className="title text-center">Enterprise Solutions</h3>
            </b>
          </Row>
          <Row className="justify-content-center">
            <p className="text-center font-weight-normal">
              Our turnkey solutions are custom-designed to fit into your
              enterprise software ecosystem. Anything you can dream up, from a
              custom desktop application to a global app, we can build it.
            </p>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="p-5" xs="12" sm="12" md="12" lg="4">
          <Row className="justify-content-center">
            <i className="display-1 border border-info rounded-circle p-3 tim-icons icon-cloud-download-93 text-white text-info bg-info" />
          </Row>
          <Row className="justify-content-center">
            <b>
              <h3 className="title text-center">Mobile Solutions</h3>
            </b>
          </Row>
          <Row className="justify-content-center">
            <p className="text-center font-weight-normal">
              When it comes to mobile applications and mobile development
              services, we are leading this world in Pakistan.
            </p>
          </Row>
        </Col>
        <Col className="p-5" xs="12" sm="12" md="12" lg="4">
          <Row className="justify-content-center">
            <i className="display-1 border border-info rounded-circle p-3 tim-icons icon-cloud-download-93 text-white text-info bg-info" />
          </Row>
          <Row className="justify-content-center">
            <b>
              <h3 className="title text-center">E-Commerce Solutions</h3>
            </b>
          </Row>
          <Row className="justify-content-center">
            <p className="text-center font-weight-normal">
              Our exceptionally imaginative and in fact sound group encourages
              you to fabricate dynamic and appealing eCommerce sites that will
              pull in more guests and transform clients into faithful clients.
            </p>
          </Row>
        </Col>
        <Col className="p-5" xs="12" sm="12" md="12" lg="4">
          <Row className="justify-content-center">
            <i className="display-1 border border-info rounded-circle p-3 tim-icons icon-cloud-download-93 text-white text-info bg-info" />
          </Row>
          <Row className="justify-content-center">
            <b>
              <h3 className="title text-center">Tailored Solutions</h3>
            </b>
          </Row>
          <Row className="justify-content-center">
            <p className="text-center font-weight-normal">
              Whatever your needs are, regardless of whether it’s another B2B or
              B2C online business model-based business, we can tailor all your
              solutions into perfect needs.
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
    </>
  );
}
