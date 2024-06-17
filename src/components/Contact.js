import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorSharp from "../assets/img/color-sharp.webp";

const AnimatedImage = ({ isVisible }) => (
  <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
);

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={5}>
            <TrackVisibility>
              {({ isVisible }) => <AnimatedImage isVisible={isVisible} />}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} className="text-center">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <a
                    href="https://www.linkedin.com/in/thomas-karlsson-448b65223/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <button className="button"><span>LinkedIn</span></button>
                  </a>
                  <div className="contact-info">
                    <p><strong>EMAIL:</strong> <a href="mailto:thomas@tarlsson.pro" className="email-link">
                      thomas@tarlsson.pro
                    </a></p>
                    <p><strong>DISCORD:</strong> <a href="https://discord.gg/G9UetnQh" className="email-link">toomtoom</a></p>
                    <p><strong>ADDRESS:</strong> Turku, Finland</p>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
