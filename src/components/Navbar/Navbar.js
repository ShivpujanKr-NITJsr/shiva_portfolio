import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { FaBriefcase, FaUser } from 'react-icons/fa'; // Importing icons from Font Awesome
import { FaCode, FaFileAlt, FaEnvelope } from 'react-icons/fa';

import { Resume } from "../assets";
import Logo from "../SKLogo/logo";

import "./navbar.css"
import { svgDataUrl } from "../SKLogo/logoImg";

// import "../../style.css"

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleDownloadResume = () => {
     const fileName = 'resume.pdf';
  const fileUrl = Resume;
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = fileName;
  link.click();
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollHandler = () => {
    const isScrolled = window.scrollY > 100;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [scrolled]);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={scrolled ? "sticky" : "navbar"}
    >
      <Container >
      <Navbar.Brand className="d-flex" onClick={()=>scrollToSection('home')}>
          
          <Logo />
          {/* <img src={svgDataUrl} width={100} height={100}/> */}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpand(!expand)}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Link onClick={() => scrollToSection('about-myself')}>
              <FaUser style={{ marginBottom: "2px" }} /> About
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('works-container')}>
              <FaBriefcase style={{ marginBottom: "2px" }} /> Work
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('projects')}>
              <FaCode style={{ marginBottom: "2px" }} /> Projects
            </Nav.Link>
            <Nav.Link onClick={handleDownloadResume}>
              <FaFileAlt style={{ marginBottom: "2px" }} /> Resume
            </Nav.Link>
            <Nav.Link  onClick={() => scrollToSection('Contact-page')}>
              <FaEnvelope style={{ marginBottom: "2px" }} /> Contacts
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
