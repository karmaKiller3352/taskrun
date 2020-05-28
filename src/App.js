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
function App() {
  const baseHref = process.env.PUBLIC_URL ? process.env.PUBLIC_URL : '/';
  return (
    <BrowserRouter basename={baseHref}>
      <Navbar />
      <Container className='pt-3'>
        <Switch>
          <Route exact path={'/'} component={HomePage} />
          <Route path={'/projects/:id'} component={ProjectPage} />
          <Route path={'/projects/'} component={ProjectsPage} />
          <Route path={'/tasks/:id'} component={TaskPage} />
          <Route path={'/tasks/'} component={TasksPage} />

          <Route component={NoMatchPage} />
        </Switch>
      </Container>
      <AppModal />
    </BrowserRouter>
  );
}

export default App;
