import React from "react";
import About from "../About/About";
import Projects from "../Projects/project";
import Contact from "../Contact/Contact";

//import Footer from './footer.jsx';


class Navbar extends React.Component {
  constructor(props){
   super(props);
    this.About = React.createRef();
    this.Projects = React.createRef();
    this.Contact = React.createRef();
    this.scrolling = this.scrolling.bind(this);
  }
  
  navEffect(){
    window.addEventListener("scroll", () => {
      var navBar = document.getElementById("navbar wrapper bar six");
      var domRect = navBar.getBoundingClientRect();
      var myBackground = document.getElementById("tdbc-main");
      var domBGRect = myBackground.getBoundingClientRect();

      if(domRect.y <= -domRect.height){
        navBar.classList.add("fade-in-nav");
      }
      if (-domBGRect.height <domBGRect.top){
        navBar.classList.remove("fade-in-nav");
      }
    });
  }

scrolling(instance){
  let node = document.getElementById(instance.current.props.id);
  window.scrollTo({
    top: node.offsetTop,
    behavior: "smooth"
  });
}
render() {
  return(
    <div> 
<nav id ="navbar" className="navbar navbar-expand-lg navbar-light bg-light blend">
<div className="container">
<a href className="home-style navbar-brand" onClick={() => {
					window.scrollTo({ top: 0,behavior: "smooth"});}}> 
						</a>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup" aria-expanded="false"
				aria-label="Toggle navigation">About</button>
						<a href onClick={() => {this.scrolling(this.about);}}>
						</a>
                        </div>
                        </div>
                  
					<div className="navbar-nav">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup" aria-expanded="false"
				aria-label="Toggle navigation">Projects</button>
						<a href onClick={() => {this.scrolling(this.Projects);}}>
						</a>
                        </div>
                        
               
                        <div className="navbar-nav">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup" aria-expanded="false"
				aria-label="Toggle navigation">Contact</button>
						<a href onClick={() => {this.scrolling(this.Contact);}}>
						</a>
                        </div>
						
					</div>	
                    </nav>
    
				<About
					ref={this.About}
					id="about-container"
                    className = "tdbc-main"
				
				/>
				<Projects
					ref={this.Projects}
					id="my-projects"
         className = "tdbc-main"
					
				/>
			    <Contact
					ref={this.Contact}
					id="my-contact"
					className = "tdbc-main"
                />
      
    </div>
  );
}
}
export default Navbar;