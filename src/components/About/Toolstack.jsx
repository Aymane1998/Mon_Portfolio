import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiGitlab,
  SiJira,
  SiConfluence,
  SiPycharm,
  SiJupyter,
} from 'react-icons/si';
import { DiGithubAlt} from "react-icons/di";
function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h4>Visual studio code</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h4>Postman</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <h4>Slack</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
        <h4>Jira</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubAlt size={50} />
        <h4>GitHub</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab size={50} />
        <h4>GitLab</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiConfluence />
        <h4>Confluence</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
        <h4>Pycharm</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <h4>Jupyter Notebook</h4>
      </Col>
    </Row>
  );
}

export default Toolstack;
