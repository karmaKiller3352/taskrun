import React, { useState, useRef, useEffect } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//import InlineEditor from '@ckeditor/ckeditor5-editor-inline';

import { hideEditForm, changeProjectRequest } from '../redux/actions';

function EditProjectForm({
  changeProjectRequest,
  project,
  edit,
  hideEditForm,
}) {
  const [currentFields, setField] = useState();

  useEffect(() => {
    // returned function will be called on component unmount
    return () => hideEditForm();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setField(project);
  }, [project]);

  const formref = useRef();

  const changeInputHandler = ({ target: { name, value } }) => {
    console.log(value);
    setField((prev) => ({
      ...prev,
      ...{
        [name]: value,
      },
    }));
  };
  const submitFormHandler = (e) => {
    e.preventDefault();
    changeProjectRequest(currentFields);
    //formref.current.reset();
  };

  const hideFormHandler = () => {
    hideEditForm();
  };

  if (!edit) return null;
  return (
    <Form
      ref={formref}
      className='project-form border-info mt-4'
      onSubmit={submitFormHandler}
    >
      <button
        type='button'
        className='close'
        onClick={hideFormHandler}
        aria-label='Close'
      >
        <span aria-hidden='true'>&times;</span>
      </button>
      <Form.Group controlId='projectName'>
        <Form.Label>Project name</Form.Label>
        <Form.Control
          name='NAME'
          required
          value={currentFields.NAME}
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
          value={currentFields.URL}
          onChange={changeInputHandler}
          placeholder='Enter project url'
        />
      </Form.Group>
      <Form.Group controlId='projectAccess'>
        <Form.Label>Project's access</Form.Label>
        <FormControl
          onChange={changeInputHandler}
          as='textarea'
          value={currentFields.FTP ? currentFields.FTP : ''}
          name='FTP'
          placeholder='Enter project`s access'
        />
      </Form.Group>
      <Form.Group controlId='projectDesc'>
        <Form.Label>Project description</Form.Label>

        <CKEditor
          data={currentFields.DESCRIPTION ? currentFields.DESCRIPTION : ''}
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
        Save changes
      </Button>
    </Form>
  );
}
const mapStatetoProps = (state) => ({
  project: state.projects.openProject,
  edit: state.app.edit,
});

const mapDispatchtoProps = {
  changeProjectRequest,
  hideEditForm,
};

export default connect(mapStatetoProps, mapDispatchtoProps)(EditProjectForm);
