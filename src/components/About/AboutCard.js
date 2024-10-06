import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>

          {/* I’m Rizwan Ansari, a web developer passionate about creating cutting-edge products, especially in the cybersecurity space. Over the years, I’ve honed my skills in building secure and scalable web solutions.

I’m proficient in Java and have extensive experience working with modern frameworks like React to bring ideas to life on the web.

As someone focused on the intersection of technology and security, I’m constantly exploring new ways to develop products that protect and empower businesses in the digital world. */}







            Hi Everyone, I am <span className="purple">RIZWAN ANSARI </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I am currently employed as a software developer at Velox Solution. <br />
            I’m a web developer passionate about creating cutting-edge products, especially in the cybersecurity space
            <br />
            <br />
            I’m proficient in Java and have extensive experience working with modern frameworks like React to bring ideas to life on the web.
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
  <li className="about-activity">
    <ImPointRight /> Exploring New Programming Languages
  </li>
  <li className="about-activity">
    <ImPointRight /> Contributing to Open Source Projects
  </li>
  <li className="about-activity">
    <ImPointRight /> Building Personal Tech Projects
  </li>
  {/* <li className="about-activity">
    <ImPointRight /> Attending Tech Conferences and Webinars
  </li> */}
  {/* <li className="about-activity">
    <ImPointRight /> Learning About Cloud Computing and DevOps
  </li>
  <li className="about-activity">
    <ImPointRight /> Networking with IT Professionals
  </li> */}
</ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rizwan Ansari</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
