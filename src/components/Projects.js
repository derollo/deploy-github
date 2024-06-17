import React, { useState, useEffect } from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.webp";
import projImg2 from "../assets/img/project-img2.webp";
import projImg3 from "../assets/img/project-img3.webp";
import colorSharp2 from "../assets/img/color-sharp2.webp";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Check if the animation flag is already set in localStorage
    const hasAnimatedStored = localStorage.getItem("hasAnimated");
    if (hasAnimatedStored) {
      setHasAnimated(true);
    }
  }, []);

  const handleVisibilityChange = (isVisible) => {
    // Trigger animation only if not already animated
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
      // Store animation flag in localStorage to persist across page refreshes
      localStorage.setItem("hasAnimated", "true");
    }
  };

  const projects = [
    {
      title: "Web Development",
      description: "ReactJS, Wordpress, Docker and more.",
      imgUrl: projImg1,
    },
    {
      title: "Python",
      description: "Automation that improves life quality.",
      imgUrl: projImg2,
    },
    {
      title: "LLM",
      description: "Locally run LLM's, RAG implementation.",
      imgUrl: projImg3,
    },
  ];

  return (
    <section id="projects" className="project">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility onChange={handleVisibilityChange}>
              {({ isVisible }) => (
                <div
                  className={`animate__animated ${
                    isVisible && hasAnimated ? "animate__fadeIn" : ""
                  }`}
                >
                  <h2>Projects</h2>
                  <p>
                    Right now, I'm diving into the world of Next.js, sharpening
                    my web development skills. On the side, I'm having fun
                    automating tasks with Python to make life a bit easier. I'm
                    also tinkering with Large Language Models (LLMs) and
                    experimenting with running them locally. It's all about
                    learning and exploring new tech frontiers!
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      className={`animate__animated ${
                        isVisible && hasAnimated ? "animate__slideInUp" : ""
                      }`}
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
