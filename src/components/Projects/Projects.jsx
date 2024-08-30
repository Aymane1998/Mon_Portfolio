import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Logo from "../../Assets/Logo.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Logo}
              isBlog={false}
              title="Boilerplate Front-End"
              description="This application aims to present all the front-end components used for all my projects, this application was built with React Js , Redux & Material UI."
              ghLink="https://github.com/Aymane1998/boilerplate_front"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Logo}
              isBlog={false}
              title="Boilerplate Back-End"
              description="This application aims to present all the back-end components used for all my projects, this application was built with Django & Python."
              ghLink="https://github.com/Aymane1998/boilerplate_back"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Logo}
              isBlog={false}
              title="Movies App"
              description="The Movies App is a web application built with React.js, leveraging the IMDb API to provide users with an interactive and comprehensive platform to explore, search, and discover movies. The app allows users to search for movies by title with real-time suggestions as they type and view detailed information about movies, including ratings, reviews, cast, and more, by seamlessly integrating IMDb’s extensive database."
              ghLink="https://github.com/Aymane1998/movies-project/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Logo}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Logo}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Logo}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
