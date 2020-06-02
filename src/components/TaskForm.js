import React, { useState, useEffect, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { fetchProjects, addTaskRequest } from '../redux/actions';

const mapStatetoProps = (state) => ({
  projects: state.projects.projects,
});

const mapDispatchtoProps = {
  fetchProjects,
  addTaskRequest,
};

function TaskForm({ projects, fetchProjects, addTaskRequest }) {
  const formref = useRef();
  useEffect(() => {
    if (projects.length === 0) {
      fetchProjects();
    }
    // eslint-disable-next-line
  }, []);

  const [currentFields, setField] = useState({});

  const changeInputHandler = ({ target: { name, value } }) => {
    setField((prev) => ({
      ...prev,
      ...{
        [name]: value,
      },
    }));
  };

  const changeSelectHandler = (project) => ({ target: { name } }) => {
    //console.log(project);
    setField((prev) => ({
      ...prev,
      PROJECT: project,
    }));
  };

  const showProjectsList = () => {
    return projects.map((project) => (
      <option
        key={project.objectId}
        onClick={changeSelectHandler(project)}
        name='PROJECT'
      >
        {project.NAME}
      </option>
    ));
  };
  const submitFormHandler = (e) => {
    e.preventDefault();
    addTaskRequest({
      ...currentFields,
      PROJECT_ID: currentFields.PROJECT ? currentFields.PROJECT.objectId : null,
      PROJECT_NAME: currentFields.PROJECT ? currentFields.PROJECT.NAME : null,
    });
    formref.current.reset();
  };

  return (
    <Form
      ref={formref}
      className='task-form border-info'
      onSubmit={submitFormHandler}
    >
      <Form.Group controlId='projectName'>
        <Form.Label>Task name</Form.Label>
        <Form.Control
          name='TITLE'
          required
          onChange={changeInputHandler}
          placeholder='Enter task name'
        />
      </Form.Group>

      <Form.Group controlId='projectUrl'>
        <Form.Label>Project</Form.Label>
        <Form.Control as='select' custom>
          <option>None project</option>
          {showProjectsList()}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId='projectDesc'>
        <Form.Label>Task description</Form.Label>
        <CKEditor
          onChange={(e, editor) => {
            const data = editor.getData();
            setField((prev) => ({
              ...prev,
              ...{
                DESCRIPTION: data,
              },
            }));
          }}
          editor={ClassicEditor}
        ></CKEditor>
      </Form.Group>
      <Button variant='primary' className='btn-lg' type='submit'>
        Add
      </Button>
    </Form>
  );
}
export default connect(mapStatetoProps, mapDispatchtoProps)(TaskForm);
