import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import studyhub from "../../Assets/Projects/teacher.jpg";
import contactbook from "../../Assets/Projects/contact book.jpeg";
import Dashboard from "../../Assets/Projects/Dashboard.png";
import Data from "../../Assets/Projects/Data.png";


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
              imgPath={studyhub}
              isBlog={false}
              title="Teacher salary"
              description="In this project i created some of the fetures using the data visulizaton it is represented by the graps, bargraphs,piechart etc it is very quick to see the results"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={contactbook}
              isBlog={false}
              title="Docter Patient Appointment booking System"
              description="Hospital appointment booking system is used to making easy for doctor and patient interaction.
              In this project, between the doctor and patient conversation is going to through online. User not need to wait for booking appointment 
              The main objective of this project  is to develop a website for a medical clinic to provide an efficient and economical way of making appointments and help in all the related task
              In hospital doctor time table management, queue management and patient appointments exportations"
              demoLink="#"Cr
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Data}
              isBlog={false}
              title="Data Visualization"
              description="Data Visualization is a powerful and insightful process that transforms raw data from databases into visually compelling representations. Through a variety of visualization techniques, complex datasets are presented in a way that is easy to understand, facilitating analysis, decision-making, and the identification of patterns or trends"
              ghLink="https://github.com/prasanna-chintamaneni/KIET-RCTS-TASK1"
              demoLink="https://prasanna-kiet-rcts-task-1.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dashboard}
              isBlog={false}
              title="Responsive Dashboard"
              description="This Responsive Dashboard is a web application built using React. It includes components like Navbar, Sidebar, Cards, PieCharts, Table, Form, and Footer. This project aims to provide a responsive and user-friendly interface for various functionalities"
              ghLink="https://github.com/prasanna-chintamaneni/KIET-RCTS-NOV-TASK"
              demoLink="https://nagaprasanna-kiet-rcts-nov-task.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
