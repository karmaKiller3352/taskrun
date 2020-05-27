import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import ProjectsPage from './pages/ProjectsPage';
import Home from './pages/Home';
import NoMatchPage from './pages/NoMatchPage';
import Navbar from './components/Navbar';
import { Container } from 'react-bootstrap';
import ProjectPage from './pages/ProjectPage';
import TasksPage from './pages/TasksPage';
import AppModal from './components/AppModal';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container className='pt-3'>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route path={'/projects/:id'} component={ProjectPage} />
          <Route path={'/projects/'} component={ProjectsPage} />
          <Route path={'/tasks/'} component={TasksPage} />

          <Route component={NoMatchPage} />
        </Switch>
      </Container>
      <AppModal />
    </BrowserRouter>
  );
}

export default App;
