import React , {Component} from "react";
import About from "../About/About";
import Projects from "../Projects/project";
import Contact from "../Contact/Contact";
import {WOW} from "wowjs";
//import Footer from './footer.jsx';


export default class Navbar extends Component {
  constructor(props){
    super(props);
    this.About = React.createRef();
    this.Projects = React.createRef();
    this.Contact = React.createRef();
    this.scrolling = this.scrolling.bind(this);
  
  }
  componentDidMount(){
    const wow = new WOW({live: false}); // disables sync requirement
  wow.init()
    
  }
navEffect(){
    window.addEventListener("scroll", () => {
      var navBar = document.getElementById("navbar");
      var domRect = navBar.getBoundingClientRect();
      var myBackground = document.getElementById("hr six");
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
<a href className="home-style navbar-brand tdbc-h2" onClick={() => {
					window.scrollTo({ top: 0,behavior: "smooth"});}}> 
						</a>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup" aria-expanded="false"
				aria-label="Toggle navigation">About</button>
						<a href onClick={() => {this.scrolling(this.about);}}>
						</a>
            <button className="navbar-toggler tdbc-h4" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup" aria-expanded="false"
				aria-label="Toggle navigation">Projects</button>
						<a href onClick={() => {this.scrolling(this.Projects);}}>
						</a>
                       
                        
               
                      
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup" aria-expanded="false"
				aria-label="Toggle navigation">Contact</button>
						<a href onClick={() => {this.scrolling(this.Contact);}}>
						</a>
                       
						
					</div>
                        </div>
                        </div>
                  
				
	
                    </nav>
    
                    <About
					ref={this.About}
					id="about-container"
					fadeOutRight={"wow fadeOutRight"}
					fadeInLeft={"wow fadeInLeft"}
					fadeInRight={"wow fadeInRight"}
					fadeIn={"wow fadeIn"}
					tada={"wow swing"}
				/>
				<Projects
					ref={this.Projects}
					id="my-projects"
					fadeInRight={"wow fadeInRight"}
					fadeIn={"wow fadeIn"}
				/>
				<Contact
					ref={this.Contact}
					id="my-contact"
					fadeInLeft={"wow fadeInLeft"}
					shake={"wow pulse"}
				/>
      
    </div>
  );
}
}
