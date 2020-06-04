import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTask, changeTaskRequest } from '../redux/actions';
import Loader from '../components/Loader';
import Editor from '../components/editor/src/ckeditor';
import { Row, Col, Button, Accordion, Card } from 'react-bootstrap';
import Timer from './Timer';
import { createMarkup, msToTime } from '../utils';
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
  const editor = useRef('');
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
  // console.log(task);
  return task.TITLE ? (
    <>
      <div className='task'>
        <Row>
          <Col md={6}>
            <h1>{task.TITLE}</h1>
            {task.PROJECT_ID ? (
              <Link
                className='badge badge-pill badge-primary'
                to={`/projects/${task.PROJECT_ID}`}
              >
                Project: {task.PROJECT_NAME}
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
        <div className='task-body'>
          <Row>
            <Col md={8}>
              <div className='task_left-column'>
                {task.DESCRIPTION && (
                  <div
                    className='description '
                    dangerouslySetInnerHTML={createMarkup(task.DESCRIPTION)}
                  ></div>
                )}
              </div>
            </Col>
            <Col md={4}>
              <div className='task_right-column'>
                <Accordion defaultActiveKey='0'>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      className='title'
                      eventKey='0'
                    >
                      Stages
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey='0'>
                      <Card.Body>
                        <div className='stages'>
                          <Row>
                            <Col md={6}>
                              <span className='badge badge-success'>
                                Created
                              </span>
                            </Col>
                            <Col md={6}>{task.created}</Col>
                          </Row>
                          <Row>
                            <Col md={6}>
                              <span className='badge badge-info'>Start</span>
                            </Col>
                            <Col md={6}>{task.START_TIME}</Col>
                          </Row>
                          <Row>
                            <Col md={6}>
                              <span className='badge badge-warning'>
                                Duration
                              </span>
                            </Col>
                            <Col md={6}>{msToTime(task.SPENT_TIME)}</Col>
                          </Row>
                          <Row>
                            <Col md={6}>
                              <span className='badge badge-danger'>
                                Deadline
                              </span>
                            </Col>
                            <Col md={6}>{task.SPENT_TIME}</Col>
                          </Row>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      className='title'
                      eventKey='1'
                    >
                      Information
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey='1'>
                      <Card.Body>
                        <div className='information'>
                          <Row>
                            <Col md={6}>
                              <span className='badge badge-light'>Author</span>
                              <Link to={`#`}>{`Сулейман Алиев`}</Link>
                            </Col>
                            <Col md={6}>
                              <span className='badge badge-warning'>
                                Responsible
                              </span>
                              <Link to={`#`}>{`Сулейман Алиев`}</Link>
                            </Col>
                          </Row>

                          <Row>
                            <Col md={12}>
                              <span className='badge badge-secondary'>
                                Auditors
                              </span>
                            </Col>
                            <Col md={6}>
                              <Link to={`#`}>{`Сулейман Алиев`}</Link>
                            </Col>
                            <Col md={6}>
                              <Link to={`#`}>{`Сулейман Алиев`}</Link>
                            </Col>
                          </Row>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </Col>
          </Row>
        </div>

        <Row>
          <Col md={8}>
            <div className='task-comments'>
              <div className='comments-body'>
                <h3>Comments</h3>
                <div className='comments-intro'>
                  <div className='image'></div>
                  <span>it's time to start commenting</span>
                  <div ref={editor}></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  ) : null;
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Task);
