import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => (
  <Spinner animation='grow' role='status' variant='info' size='lg'>
    <span className='sr-only'>Loading...</span>
  </Spinner>
);
export default Loader;
