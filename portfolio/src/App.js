import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/navbar";
import Home from "./components/Home/home";
import About from "./components/About/about";
//import Projects from "./components/Projects/projects";
import Footer from "./components/footer";
import Resume from "./components/Resume/resume";
import {BrowserRouter as Router, Route, Switch}  from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/scrolltop";
import Contact from "./components/Resume/contact";

function App() {
  const [load, updateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      updateLoad(false);
    }, 2000);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App gradient" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          {/*<Route path="/project" component={Projects} />*/}
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route patch = "/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
