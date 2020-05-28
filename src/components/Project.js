import React, { useEffect } from 'react';
//import { Row, Col, Button } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import {
  fetchProject,
  removeProjectRequest,
  showEditForm,
} from '../redux/actions';
import Loader from '../components/Loader';
import { Card, Button } from 'react-bootstrap';
import { msToTime } from '../utils/time';
function createMarkup(html) {
  return { __html: html };
}

function Project({
  project,
  loading,
  fetchProject,
  removeProjectRequest,
  showEditForm,
}) {
  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    //Load projects from Database
    fetchProject(id);
  }, [fetchProject, id]);

  if (loading) {
    return <Loader />;
  }
  const removeProjectHandler = (id) => (e) => {
    removeProjectRequest(id);
    history.push('/projects/');
  };

  const changeProjectHandler = (e) => {
    showEditForm();
  };

  return project.objectId ? (
    <React.Fragment>
      <Card className='card border-info bg-primary mb-3 mt-4'>
        <Card.Header className='text-white d-flex justify-content-between'>
          <h1>{project.NAME}</h1>
          <div className='right'>
            <small>
              In work from {new Date(project.created).toLocaleDateString()}
            </small>
            <div className='btn-group'>
              <Button
                type='button'
                className='btn btn-info btn-sm'
                onClick={changeProjectHandler}
              >
                Edit
              </Button>
              <Button
                type='button'
                className='btn btn-danger btn-sm'
                onClick={removeProjectHandler(project.objectId)}
              >
                Delete
              </Button>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          {project.DESCRIPTION && (
            <div
              className='description '
              dangerouslySetInnerHTML={createMarkup(project.DESCRIPTION)}
            ></div>
          )}
          {project.FTP && (
            <>
              <Card.Title>
                <h4>Project access:</h4>
              </Card.Title>
              <div className='assecc'>{project.FTP}</div>
            </>
          )}
          {project.URL && (
            <>
              <Card.Title>
                <h4>Project link:</h4>
              </Card.Title>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={project.URL}
                className='link'
              >
                {project.URL}
              </a>
            </>
          )}

          <>
            <Card.Title>
              <h4>Spent time:</h4>
            </Card.Title>
            <div>{msToTime(project.TIMESPENT)}</div>
          </>
        </Card.Body>
      </Card>
    </React.Fragment>
  ) : (
    <h1>Project not found</h1>
  );
}
const mapStatetoProps = (state) => ({
  project: state.projects.openProject,
  loading: state.app.loading,
});

const mapDispatchtoProps = {
  fetchProject,
  removeProjectRequest,
  showEditForm,
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Project);
