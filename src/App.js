import React from "react";
import Home from "./components/Home/Home";
import NavBar from "./components/Navigation/navbar"
import About from "./components/About/About";
import Projects from "./components/Projects/project";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer";

function App() {
  
    return(
    <div className = "App">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
      </div>
    );

}
export default App;