import React, {useState, useEffect} from "react";
import Projects from "./components/Projects/project";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navigation/navbar";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer";

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
     <Preloader load = {load} />
     <Navbar />
   <div className = "main.tdbc-container" id = {load ? "no-scroll": "scroll"}>
     
   <Switch>
     <Route path = "/Projects" component = {Projects}/>
       <Route path = "/About" component = {About}/>
       <Route path = "/Contact" component = {Contact} />
      


    
   </Switch>
   <Footer />
   </div>
  <Home />
   </Router>

 )
}

export default App;
