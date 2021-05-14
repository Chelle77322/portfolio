import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Apply from './pages/_App';
import Home from './pages/Index';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

import '../src/stylesheets/App.css';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Apply>
          <Switch>
            <Route exact path ="/about" component={About} />
            <Route exact path ="/portfolio" component={Portfolio} />
            <Route exact path ="/resume" component={Resume} />
            <Route exact path ="/contact" component={Contact} />
            <Route exact path ="/" component={Home} />
          </Switch>
        </Apply>
      </BrowserRouter>
    );
  }
}



