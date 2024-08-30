import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiDjango,
  DiNodejs,
  DiBootstrap,
} from "react-icons/di";
import {
  SiElasticsearch,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiRedux,
  SiTypescript,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 size={50} />
        <h4>JavaScript</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact size={50} />
        <h4>React</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs size={50} />
        <h4>Nodejs</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress size={50} />
        <h4>Express</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb size={50} />
        <h4>Mongodb</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiElasticsearch size={50} />
        <h4>Elasticsearch</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux size={50} />
        <h4>Redux</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript size={50} />
        <h4>Typescript</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit size={50} />
        <h4>Git</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap size={50} />
        <h4>Bootstrap</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase size={50} />
        <h4>Firebase</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython size={50} />
        <h4>Python</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango size={50} />
        <h4>Django</h4>
      </Col>
    </Row>
  );
}

export default Techstack;
