import React, { useState, useRef } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { addProjectRequest } from '../redux/actions';

function ProjectForm({ addProjectRequest }) {
  const [currentFields, setField] = useState({});

  const formref = useRef();
  const IDEref = useRef();

  const changeInputHandler = ({ target: { name, value } }) => {
    setField((prev) => ({
      ...prev,
      ...{
        [name]: value,
      },
    }));
  };
  const submitFormHandler = (e) => {
    e.preventDefault();
    addProjectRequest(currentFields);
    formref.current.reset();
  };

  return (
    <Form
      ref={formref}
      className='project-form border-info'
      onSubmit={submitFormHandler}
    >
      <Form.Group controlId='projectName'>
        <Form.Label>Project name</Form.Label>
        <Form.Control
          name='NAME'
          required
          onChange={changeInputHandler}
          placeholder='Enter project name'
        />
      </Form.Group>

      <Form.Group controlId='projectUrl'>
        <Form.Label>Project URL</Form.Label>
        <Form.Control
          name='URL'
          required
          type='url'
          onChange={changeInputHandler}
          placeholder='Enter project url'
        />
      </Form.Group>
      <Form.Group controlId='projectAccess'>
        <Form.Label>Project's access</Form.Label>
        <FormControl
          onChange={changeInputHandler}
          as='textarea'
          name='FTP'
          placeholder='Enter project`s access'
        />
      </Form.Group>
      <Form.Group controlId='projectDesc'>
        <Form.Label>Project description</Form.Label>
        <CKEditor
          ref={IDEref}
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
const mapStatetoProps = () => ({});

const mapDispatchtoProps = {
  addProjectRequest,
};

export default connect(mapStatetoProps, mapDispatchtoProps)(ProjectForm);
