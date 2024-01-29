import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Manaswi Medavarapu </span>
            from <span className="purple"> Draksharama, India.</span>
            <br /> I am currently in the Pre final year of my B.Tech program, specializing in csd at KIET, Kakinada.
            <br />
            Additionally, I am currently working as an intern at IIIT-RCTS, Hyderabad.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening music
            </li>
            <li className="about-activity">
              <ImPointRight /> reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> playing games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Manaswi Medavarapu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
