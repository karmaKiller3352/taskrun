import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import ProjectsPage from './pages/ProjectsPage';
import HomePage from './pages/HomePage';
import NoMatchPage from './pages/NoMatchPage';
import Navbar from './components/Navbar';
import { Container } from 'react-bootstrap';
import ProjectPage from './pages/ProjectPage';
import TasksPage from './pages/TasksPage';
import AppModal from './components/AppModal';
import TaskPage from './pages/TaskPage';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  const baseHref = process.env.PUBLIC_URL ? process.env.PUBLIC_URL : '/';
  return (
    <BrowserRouter basename={baseHref}>
      <Navbar />
      <Container className='pt-3'>
        <Switch>
          <ProtectedRoute exact path={'/'} component={HomePage} />
          <ProtectedRoute path={'/projects/:id'} component={ProjectPage} />
          <ProtectedRoute path={'/projects/'} component={ProjectsPage} />
          <ProtectedRoute path={'/tasks/:id'} component={TaskPage} />
          <ProtectedRoute path={'/tasks/'} component={TasksPage} />
          <Route exact path={'/login/'} component={Login} />
          <Route component={NoMatchPage} />
        </Switch>
      </Container>
      <AppModal />
    </BrowserRouter>
  );
}

export default App;
