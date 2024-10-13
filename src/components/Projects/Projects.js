import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={bitsOfCode}
              isBlog={false}
              title="Invoie Generator"
              description="An Invoice Generator is a simple tool that creates invoices for businesses or individuals.This tool ensures efficiency by automating calculations and providing a downloadable invoice format, streamlining the billing process for users."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://invoice-generator-three-beryl.vercel.app/"
                CardType="Demo"
            />
          </Col>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Eductaion App"
              description="This education app is designed to facilitate learning and enhance educational experiences for users. Built using React, the app offers an intuitive interface that allows students to access various educational resources and tools."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://react-edu-coral.vercel.app/"
                CardType="Demo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="E-commerce"
              description="This e-commerce app is designed to provide a seamless online shopping experience for users. Built with React, the app offers a modern and responsive interface that allows customers to browse products, manage their shopping carts, and complete purchases easily."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://react-ecommerce-smoky-eta.vercel.app/"  
              CardType="Demo"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Modern Website"
              description="This modern marketing website is designed to effectively promote products or services and enhance brand visibility. Built using the latest web technologies, the site provides a visually appealing and user-friendly experience, focusing on conversion and engagement."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://modern-website-kykm.vercel.app/"
                CardType="Demo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Ticketing Tool"
              description="A ticketing tool (or ticketing system) is a software application that helps organizations manage and track customer support requests, IT incidents, or internal issues. These tools streamline communication, prioritize tasks, and enhance overall productivity. Here’s a detailed overview of ticketing tools, including their features, benefits, and popular examples:"
              // ghLink="https://github.com/Rizwan-Ansari-Git/Marketing-Website"
              demoLink="https://ticketing-tool-52i7-9upkp2vfl-rizwan-ansaris-projects-46adf820.vercel.app/"
               CardType="Demo"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Marketing Website"
              description="Your go-to platform for seamless communication and collaboration. Whether you're staying connected with friends or sharing resources, our chat app offers fast, secure, and real-time messaging. Built with cutting-edge technologies, it delivers an intuitive experience with features like instant messaging."
              // ghLink="https://github.com/Rizwan-Ansari-Git/Marketing-Website"
              demoLink="https://marketing-website-psi-one.vercel.app/"
               CardType="Demo"
            />
          </Col>
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
