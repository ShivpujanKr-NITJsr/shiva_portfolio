import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shivpujan Kumar </span>
            from <span className="purple"> Jharkhand, India.</span>
            <br />
            I am currently employed as a web developer at GBTechServices.
            <br />
            I have done B.Tech from <span className="purple">NIT Jamshedpur</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
            <ImPointRight /> Writing quotes,Shayari and Poems
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technology
            </li>
            <li className="about-activity">
              <ImPointRight /> Embrace the thrill of adventure and embark on unforgettable journeys.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shivpujan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
