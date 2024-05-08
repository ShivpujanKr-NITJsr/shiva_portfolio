import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaComment, FaBuilding, FaLaptopCode, FaChalkboardTeacher, FaBriefcase } from "react-icons/fa";
import "./works.css";

const Works = () => {
  return (
    <div className="works-container" id="works-container">
      <h2 className="main-heading">Shorts of <strng className="purple">-My Journey</strng></h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(13 1 20)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "10px solid  rgb(13 1 20)" }}
          date="2021 October - 2022 January"
          iconStyle={{ background: "rgb(13 1 20)", color: "#fff" }}
          icon={<FaChalkboardTeacher />}
        >
          <h3 className="vertical-timeline-element-title">
            Self-Study and Skill Enhancement
          </h3>
          <p>
            During this period, I embarked on a journey of self-study and skill
            enhancement. I learned Java programming language and Android studio
            to develop Android applications.
          </p>
          <p>
            I implemented the Notes You Make app from scratch in a structured
            manner, incorporating various features such as save, read mode,
            options menu, folder creation, drawing, and painting.
          </p>
          <p>
            Additionally, I developed a settings menu with options for sorting,
            drawing, help, and settings management, and integrated
            functionality for sorting screenshots and exporting them as a PDF.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(13 1 20)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "10px solid  rgb(13 1 20)" }}
          date="March 2022 - December 2022"
          iconStyle={{ background: "rgb(13 1 20)", color: "#fff" }}
          icon={<FaBuilding />}
        >
          <h3 className="vertical-timeline-element-title">
            Civil Engineer at KEC Private International Limited
          </h3>
          <p>
            I was placed as a civil engineer at KEC Private International Limited
            in March 2022. During my tenure, I gained valuable hands-on experience
            in civil engineering projects and operations. I resigned from this
            position in December 2022.
          </p>
          <p>
            In between, I practiced Data Structures and Algorithms and solved
            about 1000 problems to enhance my problem-solving skills.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(13 1 20)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "10px solid  rgb(13 1 20)" }}
          date="January 2023 - May 2023"
          iconStyle={{ background: "rgb(13 1 20)", color: "#fff" }}
          icon={<FaLaptopCode />}
        >
          <h3 className="vertical-timeline-element-title">
            Advanced into Java Tech
          </h3>
          <p>
            During this period, I focused on advancing my skills in Java
            technology. I dedicated time to solving Data Structures and
            Algorithms problems and delved deeper into Java technologies.
          </p>
          <p>
            Additionally, I learned JSP, Servlet, and Spring Boot, enhancing my
            proficiency in server-side Java development.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(13 1 20)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "10px solid  rgb(13 1 20)" }}
          date="June 2023 - November 2023"
          iconStyle={{ background: "rgb(13 1 20)", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
           MERN at Sharpner
          </h3>
          <p>
            I transitioned into learner of MERN at Sharpner
            in June 2023. During this period, I focused on learning the MERN
            stack through Sharpner Guidance and practice.
          </p>
          <p>
            I developed web applications using MongoDB, Express.js, React.js,
            and Node.js, leveraging modern web development tools and practices.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(13 1 20)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "10px solid  rgb(13 1 20)" }}
          date="December 2023 - Present"
          iconStyle={{ background: "rgb(13 1 20)", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title"> Web Developer at GBTech Service</h3>
          <p>
            Currently, I am working as a web developer at GBTech Service,
            where I am acting as a full stack developer.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Works;
