import React, {Component} from "react";
import "../../styles/styles.scss";
import {Link} from "react-scroll";

export default class NavBar extends Component{
	render(){
		return(
			<nav className = "tdbc-row">
			{/*<button type = "button" data-toggle= "collapse" data-target = "#navbarNavMenu" aria-controls="navbarNavMenu"
			aria-expanded="false"
			aria-label="Toggle navigation">
		<i className = "fas fa-bars fa-lg"></i>*/}
			
			<div className = "tdbc-row" id = "navbarNavMenu">
		
				<button className = "tdbc-button">
					<Link to = "about"
					className = "nav-link"
					activeClass="active"
					spy={true}
					smooth={true}>About</Link>
				</button>
				<button className = "tdbc-button">
					<Link to = "my-projects"
					className = "nav-link"
					activeClass="active"
					spy={true}
					smooth={true}>Projects</Link>
				</button>
				<button className = "tdbc-button">
					<Link to = "resume"
					className = "nav-link"
					activeClass="active"
					spy={true}
					smooth={true}>Resume</Link>
				</button>
				<button className = "tdbc-button">
					<Link to = "my-contact"
					className = "nav-link"
					activeClass="active"
					spy={true}
					smooth={true}>Contact</Link>
				</button>
			</div>
			{/*</button>*/}
			</nav>
		);
	}
}