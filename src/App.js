import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Projeccts from './Components/Projects';
import Resume from './Components/Resume';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projeccts} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </div>
    );
  }
}

export default App;
