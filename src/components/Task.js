import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTask, changeTaskRequest } from '../redux/actions';
import Loader from '../components/Loader';
import { Row, Col, Button } from 'react-bootstrap';
import Timer from './Timer';
const status = {
  ALL: {
    class: '',
    text: 'All tasks',
    included: ['OPEN', 'IN_WORK', 'PAUSED', 'FINISHED'],
  },
  OPEN: {
    class: 'danger',
    text: 'Open',
    included: ['OPEN', 'IN_WORK', 'PAUSED'],
  },
  IN_WORK: {
    class: 'info',
    text: 'In work',
    included: ['IN_WORK'],
  },
  PAUSED: {
    class: 'warning',
    text: 'Paused',
    included: ['PAUSED'],
  },
  FINISHED: {
    class: 'secondary',
    text: 'Finished',
    included: ['FINISHED'],
  },
};
const mapStatetoProps = (state) => ({
  task: state.tasks.openTask,
  loading: state.app.loading,
});

const mapDispatchtoProps = { fetchTask, changeTaskRequest };

function Task({ task, loading, fetchTask, changeTaskRequest }) {
  let localtime = '';
  const getSpentTime = (currenTime) => {
    localtime = currenTime;
  };

  const { id } = useParams();
  useEffect(() => {
    // load task from database
    fetchTask(id);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Loader />;
  }
  const hadlePause = (e) => {
    changeTaskRequest({ ...task, STATUS: 'PAUSED', SPENT_TIME: localtime });
  };
  const hadleStart = (e) => {
    changeTaskRequest({ ...task, STATUS: 'IN_WORK', START_TIME: Date.now() });
  };
  const hadleFinish = (e) => {
    changeTaskRequest({ ...task, STATUS: 'FINISHED', SPENT_TIME: localtime });
  };
  console.log(task);
  return task.TITLE ? (
    <>
      <div className='task'>
        <Row>
          <Col md={4}>
            <h1>{task.TITLE}</h1>
            {task.PROJECT ? (
              <Link
                className='badge badge-pill badge-primary'
                to={`/projects/${task.PROJECT.objectId}`}
              >
                Project: {task.PROJECT.NAME}
              </Link>
            ) : null}
          </Col>
          <Col md={12}></Col>
        </Row>
        <header>
          <Row>
            <Col md={2}>
              <div className='text-group'>
                <span className={`badge badge-${status[task.STATUS].class}`}>
                  {status[task.STATUS].text}
                </span>
              </div>
            </Col>
            <Col md={2}>
              <div className='task-info'>
                <span>Created:</span>
                <span>{new Date(task.created).toLocaleDateString()}</span>
              </div>
            </Col>
            <Col md={3}>
              <div className='task-time'>
                <Timer
                  status={task.STATUS}
                  spentTime={task.SPENT_TIME}
                  start={task.START_TIME}
                  getTime={getSpentTime}
                />
              </div>
            </Col>
            <Col md={1}></Col>
            <Col md={4}>
              <div className='task-btn'>
                <Button
                  className='btn-info'
                  disabled={task.STATUS === 'IN_WORK' ? 'disabled' : ''}
                  onClick={hadleStart}
                >
                  Start
                </Button>
                <Button
                  className='btn-warning'
                  disabled={
                    task.STATUS === 'PAUSED' || task.STATUS === 'FINISHED'
                      ? 'disabled'
                      : ''
                  }
                  onClick={hadlePause}
                >
                  Pause
                </Button>
                <Button
                  disabled={task.STATUS === 'FINISHED' ? 'disabled' : ''}
                  className='btn-secondary'
                  onClick={hadleFinish}
                >
                  Finish
                </Button>
              </div>
            </Col>
          </Row>
        </header>
      </div>
    </>
  ) : null;
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Task);
