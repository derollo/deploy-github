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
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => <AnimatedImage isVisible={isVisible} />}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
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
                    <p><strong>Email:</strong> <a href="mailto:thomas@tarlsson.pro">thomas@tarlsson.pro</a></p>
                    <p><strong>Discord:</strong> toomtoom</p>
                    <p><strong>Address:</strong> Turku, Finland</p>
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
