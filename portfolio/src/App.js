import React, {useState, useEffect} from "react";
import Projects from "./components/Projects/project";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navigate from "./components/Navigation/navbar";
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
     <Navigate />
   <div className = " hr six" id = {load ? "no-scroll": "scroll"}>
     
   <Switch>
     <Route exact path = "/" component = {Home}/>
     <Route exact path = "/Projects" component = {Projects}/>
       <Route  exact path = "/About" component = {About}/>
       <Route  exact path = "/Contact" component = {Contact} />
       
      


    
   </Switch>
   <Footer />
   </div>
  <Home />
   </Router>

 )
}

export default App;
