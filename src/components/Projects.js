import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProjects, removeProjectRequest } from '../redux/actions';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';

const mapDispatchtoProps = {
  fetchProjects,
  removeProjectRequest,
};
const mapStatetoProps = (state) => {
  return {
    loading: state.app.loading,
    projects: state.projects.projects.sort((a, b) => b.created - a.created),
  };
};

function Projects({ projects, loading, fetchProjects, removeProjectRequest }) {
  useEffect(() => {
    //Load projects from Database
    fetchProjects();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Loader />;
  }
  const removeProjectHandler = (id) => (e) => {
    removeProjectRequest(id);
  };

  return projects.length > 0
    ? projects.map((project) => {
        return (
          <Card className='border-info mb-1' key={project.objectId}>
            <Card.Body>
              <Card.Title>
                <Link to={`/projects/${project.objectId}`}>{project.NAME}</Link>
                <button
                  type='button'
                  className='close'
                  aria-label='Close'
                  onClick={removeProjectHandler(project.objectId)}
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </Card.Title>
            </Card.Body>
          </Card>
        );
      })
    : null;
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Projects);
