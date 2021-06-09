import React, {useState, useEffect} from "react";
import Projects from "./components/Projects/project";
import Home from "./components/Home/Home";
import Navbar from "./components/Navigation/navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Preloader from "./components/Pre";
import "./styles/styles.scss";


function App() {
const [load, updateLoad] = useState(true);
   useEffect(() => {
     setTimeout(()=> {
       updateLoad(false);
     }, 2000);
   }, []);
   return (
   <Router>
     <Navbar />
   <div className = "App" id = {load ? "no-scroll": "scroll"}>
   <Switch>
     <Route path = "/projects" component = {Projects}>

     </Route>
   </Switch>
   </div>
  <Home />
   </Router>

 )
}

export default App;
