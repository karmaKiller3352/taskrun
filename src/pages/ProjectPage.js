import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Project from '../components/Project';
import EditProjectForm from '../components/EditProjectForm';

function ProjectPage() {
  return (
    <Row>
      <Col md={7}>
        <Project />
      </Col>
      <Col md={5}>
        <EditProjectForm />
      </Col>
    </Row>
  );
}

export default ProjectPage;
