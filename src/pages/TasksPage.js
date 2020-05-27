import React, { useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import TasksList from '../components/TasksList';
import TasksFilter from '../components/TasksFilter';
import { fetchTasks, showModal } from '../redux/actions';

import TaskForm from '../components/TaskForm';

const mapDispatchtoProps = {
  fetchTasks,
  showModal,
};

function TasksPage({ fetchTasks, showModal }) {
  useEffect(() => {
    //Load projects from Database
    fetchTasks();
    // eslint-disable-next-line
  }, []);
  return (
    <React.Fragment>
      <Row>
        <Col md={12}>
          <div className='tasks-page'>
            <header>
              <Row>
                <Col md={3}>
                  <h1>Tasks</h1>
                </Col>
                <Col md={7}>
                  <h2>All</h2>
                </Col>
                <Col md={2}>
                  <Button
                    type='button'
                    className='btn btn-success'
                    onClick={() =>
                      showModal({
                        title: 'Add task',
                        component: TaskForm,
                      })
                    }
                  >
                    Add task
                  </Button>
                </Col>
              </Row>
            </header>

            <Row>
              <Col md={3}>
                <TasksFilter />
              </Col>
              <Col md={9}>
                <TasksList />
                {/* <TaskForm /> */}
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
}
export default connect(null, mapDispatchtoProps)(TasksPage);
