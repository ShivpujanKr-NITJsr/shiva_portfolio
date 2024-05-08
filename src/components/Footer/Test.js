import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
// import './Footer.css'; // Import the SCSS file

const Test = () => {
  return (
    <div className="mt-5 pt-5 pb-5 footer">
      <Container>
        <Row>
          <Col xs={12} sm={6} className="location">
            <h4>Location</h4>
            <p>Kolkata,West Bengal</p>
            <p><i ></i>+91 6204783696</p>
            <p><i></i>sahil.8228053857@gmail.com</p>
          </Col>
          <Col xs={12} sm={6} className="social-links">
            <h4>Social Links</h4>
            <div className="social-icons">
              <a href="#"><FaLinkedin className="mr-3" /></a>
              <a href="#"><FaGithub /></a>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="copyright">
            <p><small>Copyright © 2024 SK</small></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Test;
