import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pro1 from "../../Assets/Projects/pro1.jpg"
import pro2 from "../../Assets/Projects/pro2.jpg"
import pro3 from "../../Assets/Projects/pro3.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro1}
              isBlog={false}
              title="Movie Ticket Project"
              description=" Built a responsive movie ticket booking web application using HTML, CSS, and JavaScript.Designed the user interface to allow users to browse available movies, select showtimes,and choose seats through an intuitive and dynamic seating layout"
              ghLink="https://github.coPersonalm/Akashverma2001/Movie-Ticket-Demo"
         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro2}
              isBlog={false}
              title="News App Project"
              description="The main focus of this application is to deliver all types of news with images.Implemented API integration to fetch news data and handle asynchronous data requests efficiently."
              ghLink="https://github.com/Akashverma2001/News-App"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro3}
              isBlog={false}
              title="Responsive Web Portfolio"
              description="The portfolio includes a visually appealing, user-friendly interface with sections for projectdescriptions, resume download, and contact information."
              ghLink="https://github.com/soumyajit4419/Editor.io"
                       
            />
          </Col>

          

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
