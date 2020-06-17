import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logoutUserRequest } from '../redux/actions';

export default function () {
  const dispatch = useDispatch();
  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        dispatch(logoutUserRequest());
      }}
      className='logout btn-danger btn-sm mr-3'
    >
      Log out
    </Button>
  );
}
