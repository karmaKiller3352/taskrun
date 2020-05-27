import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
export default function () {
  return (
    <Navbar className='navbar-dark bg-primary' expand='lg'>
      <Container>
        <NavLink className='navbar-brand' to={'/'}>
          Task-Run
        </NavLink>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <NavLink className='nav-link' exact to={'/tasks/'}>
              Tasks
            </NavLink>
            <NavLink className='nav-link' to={'/projects/'}>
              Projects
            </NavLink>
            <NavLink className='nav-link' to={'/reports/'}>
              Reports
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
