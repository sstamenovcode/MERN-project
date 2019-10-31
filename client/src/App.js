import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Football from './components/Football/Football';
import Tennis from './components/Tennis/Tennis';
import TableTennis from './components/TableTennis/TableTennis';
import Basketball from './components/Basketball/Basketball';
import Volleyball from './components/Volleyball/Volleyball';
import Cycling from './components/Cycling/Cycling';
import NoMatch from './components/NoMatch/NoMatch';

import './App.scss';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/football">
            <Football />
          </Route>
          <Route path="/tennis">
            <Tennis />
          </Route>
          <Route path="/table-tennis">
            <TableTennis />
          </Route>
          <Route path="/basketball">
            <Basketball />
          </Route>
          <Route path="/volleyball">
            <Volleyball />
          </Route>
          <Route path="/cycling">
            <Cycling />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
