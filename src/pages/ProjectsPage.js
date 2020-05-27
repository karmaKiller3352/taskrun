import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Projects from '../components/Projects';
import ProjectForm from '../components/ProjectForm';

export default () => {
  return (
    <React.Fragment>
      <Row>
        <Col md={6}>
          <h3>Projects</h3>
          <br />
          <Projects />
        </Col>
        <Col md={6}>
          <h3>Add project</h3>
          <br />
          <ProjectForm />
        </Col>
      </Row>
    </React.Fragment>
  );
};
