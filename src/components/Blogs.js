import React from "react";
import { Container, Row, Col } from "react-bootstrap";




import ProjectCards from "./Projects/ProjectCards";
import Particle from "./Particle";

function Blogs() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blogs </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few blogs I've added on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCards
            //   imgPath={editor}
              isBlog={false}
              title="MySQL vs MongoDB: Choosing the Right Database for Your Application"
              description="When selecting a database for your application, understanding the differences between MySQL and MongoDB is crucial.MySQL is a relational database management system (RDBMS) that uses structured query language (SQL) for database access. It's ideal for applications requiring complex queries, ACID compliance, and transactions."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://www.linkedin.com/pulse/mysql-vs-mongodb-choosing-right-database-your-rizwan-ansari-rgvjf/?trackingId=x5iBAbE%2BT6uYEHWKt88wJg%3D%3D"
              CardType="Blogs"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
            //   imgPath={chatify}
              isBlog={false}
              title="Understanding JWT in Spring Boot: Enhancing Security and Scalability"
              description="JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties. In Spring Boot applications, JWT is widely used for authentication and information exchange, enhancing security and scalability."
              // ghLink="https://github.com/Rizwan-Ansari-Git/Marketing-Website"
              demoLink="https://www.linkedin.com/pulse/securing-spring-boot-applications-jwt-json-web-tokens-rizwan-ansari-gl6df/?trackingId=tkv%2B1KBn%2FBCEXPL4Ei7l3w%3D%3D"
              CardType="Blogs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
            //   imgPath={bitsOfCode}
              isBlog={false}
              title="Core Concept About React"
              description="React is a popular JavaScript library for building user interfaces, primarily for single-page applications. It enables developers to create reusable UI components, manage application state, and efficiently update the user interface."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://www.linkedin.com/pulse/core-concept-you-need-know-react-rizwan-ansari-ymizf/?trackingId=m9FQryOZmzbLrZhpAPaDAA%3D%3D"
               CardType="Blogs"
            />
          </Col>

          

          {/* <Col md={4} className="project-card">
            <ProjectCards
            //   imgPath={leaf}
              isBlog={false}
              title="Modern Website"
              description="This modern marketing website is designed to effectively promote products or services and enhance brand visibility. Built using the latest web technologies, the site provides a visually appealing and user-friendly experience, focusing on conversion and engagement."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://modern-website-kykm.vercel.app/"
            />
          </Col> */}
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

export default Blogs;
