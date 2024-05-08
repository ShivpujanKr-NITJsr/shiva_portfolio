import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Works from "./components/Work/Works";
import IntroAbout from "./components/Skills/IntroAbout";
import About from "./components/About/About";
import Contact from "./components/Contacts/Contact";
import Test from "./components/Footer/Test";

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1230);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className={`App ${load ? "no-scroll" : "scroll"}`}>
        <Navbar />
        <ScrollToTop />
        <Home />
        <About />
        <Works />
        <IntroAbout />
        {/* <About /> */}
        
        <Projects />
        <Contact />
        {/* <Footer /> */}
        {/* <Test /> */}
      </div>
    </Router>
  );
}

export default App;
