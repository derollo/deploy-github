import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import LazyLoad from 'react-lazyload';
import TrackVisibility from 'react-on-screen';
import headerImg from "../assets/img/logo.svg";

const AnimatedText = ({ isVisible, text }) => (
  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
    <span className="tagline">Welcome!</span>
    <h1>{`Hi! I'm Thomas and I'm a `} 
      <span className="txt-rotate" data-period="1000" data-rotate='["Tech Enthusiast", "Web Developer", "Nerd"]'>
        <span className="wrap">{text}</span>
      </span>
    </h1>
    <p>I have a passion for learning new things and am always working on projects, whether it's streamlining everyday tasks or enhancing my home server. My experience working on various projects and leading teams has strengthened my ability to handle challenges and collaborate effectively with others.</p>
    <button onClick={() => window.open('https://www.linkedin.com/in/thomas-karlsson-448b65223/', '_blank')}>Let’s Connect <ArrowRightCircle size={25} /></button>
  </div>
);

const AnimatedImage = ({ isVisible }) => (
  <TrackVisibility>
    {({ isVisible: imageVisible }) => (
      <LazyLoad height={200} once>
        <div className={isVisible && imageVisible ? "animate__animated animate__zoomIn" : ""}>
          <img src={headerImg} alt="Header Img" />
        </div>
      </LazyLoad>
    )}
  </TrackVisibility>
);

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const tick = useCallback(() => {
    const toRotate = ["Tech Enthusiast", "Web Developer", "Nerd"];
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [loopNum, isDeleting, text, period]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [tick, delta]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => <AnimatedText isVisible={isVisible} text={text} />}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <AnimatedImage />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
