import React from 'react';
import './App.module.css';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import ReaderPage from '../../pages/ReaderPage/ReaderPage';

const App = () => (
  <Switch>
    <Route component={ReaderPage} path="/reader" />
    <Redirect to="/reader" />
  </Switch>
);

export default App;
