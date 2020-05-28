import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Task from '../components/Task';

function TaskPage() {
  return (
    <Row>
      <Col md={12}>
        <Task />
      </Col>
    </Row>
  );
}

export default TaskPage;
