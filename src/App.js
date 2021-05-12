import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Apply from './pages/_App';
import Home from './pages/Index';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Apply>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Apply>
      </BrowserRouter>
    );
  }
}

export default App;

