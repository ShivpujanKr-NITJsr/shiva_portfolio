

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { expensetrackerss, groupchatss, nymss, reacttshirtss, springapiss } from "../assets";

// import "./projects.css"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" id="projects">
          My Works, <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Insert ProjectCards here */}
          {/* ProjectCard 1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nymss}
              isGitHub={false}
              title="Notes You Make App"
              description="work below android 10 version,The Notes You Make app is an Android application designed for note-taking, organizing notes into folders, and creating drawings. It provides a user-friendly interface with features such as saving, reading mode, options menu, and folder creation. Users can also draw and paint within the app, and there is a settings menu for sorting, drawing, and other configurations. Additionally, the app supports a floating window with functions for adjusting opacity, taking screenshots, and creating new folders."
              ghLink="https://play.google.com/store/apps/details?id=com.spnkowncomp.notesyoumake&pcampaignid=web_share"
              demoLink=""
            />
          </Col>
          {/* ProjectCard 2 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={groupchatss}
              isGitHub={true}
              title="GROUP CHAT APP (Backend Preferences)"
              description="The Group Chat app is a web-based platform for real-time communication with authentication and group management capabilities. It allows users to create and join chat rooms, send messages, and receive notifications. The app is built using Node.js with Express.js for the backend, utilizing technologies such as Bcrypt for password encryption, JSONWebToken for authentication, and WebSocket for real-time chat functionality. It also includes features for multimedia sharing, user group creation, and admin controls."
              ghLink="https://github.com/ShivpujanKr-NITJsr/GroupChatApp"
              demoLink=""
            />
          </Col>
          {/* ProjectCard 3 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expensetrackerss}
              isGitHub={true}
              title="EXPENSE TRACKER APP (Backend Preferences)"
              description="The Expense Tracker app is a web application for managing personal expenses with premium features. It allows users to track their expenses, categorize them, and view spending trends. Premium users have access to additional features such as leaderboards, advanced analytics, and expense history tracking. The app is built using Node.js with Express.js for the backend and MongoDB for data storage. It includes authentication features, password encryption, and integration with payment gateways for premium subscriptions."
              ghLink="https://github.com/ShivpujanKr-NITJsr/NoSqlExpenseTrackerApp"
              demoLink=""
            />
          </Col>
          {/* ProjectCard 4 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reacttshirtss}
              isGitHub={true}
              title="SHIRT SHOP ORDER APP (REACT-APP)"
              description="The Shirt Shop Order app is a React-based web application for managing orders in a shirt shop. It allows users to browse available shirt designs, select sizes and quantities, and place orders. The app includes features such as user authentication, order tracking, and inventory management. It is built using React.js for the frontend and CSS for styling. The app provides a user-friendly interface with intuitive navigation and responsive design."
              ghLink="https://github.com/ShivpujanKr-NITJsr/React-Shirt-Shop-order-App"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={springapiss}
              isGitHub={true}
              title="Rest Api Using Spring Boot Jpa Mysql"
              description="A showcase of learning achievements (Tested by Postman), RestApiUsingSpringBootJpaMysql demonstrates mastery in developing RESTful APIs using Spring Boot, JPA, and MySQL. Explore the codebase to witness a learner's journey towards becoming a proficient backend developer."
              ghLink="https://github.com/ShivpujanKr-NITJsr/RestApiUsingSpringBootJpaMysql"
              demoLink=""
            />
          </Col>

          {/* Add more ProjectCards here */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
