import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about-myself" style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Container>
        <Row className="align-items-center"> {/* Add class to vertically center content */}
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              About <span className="purple"> MYSELF </span> 
            </h1>
            <p className="home-about-body">
              I love to explore new technologies which fills me with excitement and ignites my passion for discovering the latest advancement.
              <br />
              <br />Embark on a transformative journey with me, your dedicated 
              <i>
                <b className="purple"> full-stack web and Android app developer. </b>
              </i>
              <br />
              <br />
              I specialize in turning visionary concepts into high-performance, cross-platform wonders.&nbsp;
              <i>
                <b className="purple">From web brilliance to Android mastery ,</b> let's craft a digital masterpiece that resonates and captivates.{" "}
                <b className="purple">
                  Your vision,
                </b>
              </i>
              &nbsp; 
              <i>
                <b className="purple">my code—let's make magic happen! 🌐📱✨</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <div className="d-flex justify-content-center"> {/* Align image in center */}
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
