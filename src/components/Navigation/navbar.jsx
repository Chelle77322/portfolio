import React, {Component} from "react";
import "../../styles/styles.scss";
import {Link} from "react-scroll";

export default class NavBar extends Component{
	render(){
		return(
			<nav className = "navbar navbar-expand-md">
			<button className = "tdbc-button" type = "button" data-toggle= "collapse" data-target = "#navbarNavMenu" aria-controls="navbarNavMenu"
			aria-expanded="false"
			aria-label="Toggle navigation">
			<i class = "fas fa-bars fa-lg"></i>
			</button>
			<div className = "collapse navbar-collapse justify-content-center" id = "navbarNavMenu">
			<ul className = "navbar-nav">
				<li className = "nav-item navbar-text">
					<Link to = "about"
					className = "nav-link"
					activeClass="active"
					spy={true}
					smooth={true}>About</Link>
				</li>
				<li className = "nav-item navbar-text">
					<Link to = "my-projects"
					className = "nav-link"
					activeClass="active"
					spy={true}
					smooth={true}>Projects</Link>
				</li>
				<li className = "nav-item navbar-text">
					<Link to = "resume"
					className = "nav-link"
					activeClass="active"
					spy={true}
					smooth={true}>Resume</Link>
				</li>
				<li className = "nav-item navbar-text">
					<Link to = "my-contact"
					className = "nav-link"
					activeClass="active"
					spy={true}
					smooth={true}>Contact</Link>
				</li>
			</ul>
			</div>
			</nav>
		);
	}
}