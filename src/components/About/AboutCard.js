import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">{process.env.REACT_APP_HERO_NAME ?? ""} </span>
            from <span className="purple"> {process.env.REACT_APP_HERO_FROM ?? ""}.</span>
            <br />
            {process.env.REACT_APP_HERO_MEMO ?? ""}
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">{process.env.REACT_APP_HERO_NAME}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
