import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUserRequest } from '../redux/actions';
import { FormControl } from 'react-bootstrap';

// is-valid
// is-invalid
export default function AuthForm() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  const [currentFields, setField] = useState({});
  const changeInputHandler = ({ target: { name, value } }) => {
    setField((prev) => ({
      ...prev,
      ...{
        [name]: value,
      },
    }));
  };

  if (isAuth) {
    return (
      <Redirect
        to={{
          pathname: '/tasks/',
        }}
      />
    );
  }

  return (
    <form
      className='auth-form'
      onSubmit={(e) => {
        e.preventDefault();

        dispatch(loginUserRequest(currentFields));
      }}
    >
      <div className='navbar-brand auth'>Please log in</div>
      <FormControl
        className='form-group has-success'
        onChange={changeInputHandler}
        name='login'
        placeholder='Enter your email'
      />

      <FormControl
        type='password'
        className='form-group has-success'
        onChange={changeInputHandler}
        name='password'
        placeholder='Enter your password'
      />
      <div className='form-group has-success'>
        <button type='submit' className='btn btn-success'>
          Success
        </button>
      </div>
    </form>
  );
}
