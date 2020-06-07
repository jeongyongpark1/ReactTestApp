import React, {Component} from 'react';
import {HashRouter as Router, Route } from 'react-router-dom';
import AppShell from './AppShell';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Texts from './Texts';
import Words from './Words';

class App extends Component {
  render() {
    return (
      <Router>
        <AppShell>
          <div>
              <Route exact path="/" component={Home}/>
              <Route exact path="/texts" component={Texts}/>
              <Route exact path="/words" component={Words}/>
          </div>
        </AppShell>
      </Router>
    );
  }
}

export default App;
