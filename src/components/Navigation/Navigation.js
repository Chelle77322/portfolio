import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
export default class Navigation extends Component {
    render(){
        return (
        <div className = "nav blended">
        <div className ="top-bar">
          <div className = "top-bar-left">
          <ul className = "menu">
            <li className = "menu-text">
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li className = "menu-text">
            
              <NavLink to="/about">About</NavLink>
            </li>
            <li className = "menu-text">
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            </ul>
            </div>
            <div className = "top-bar-right">
              <ul className = "menu">
            <li className = "menu-text">
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className = "menu-text">
              <NavLink to ="/resume">Resume</NavLink>
            </li>
          </ul>
          </div>
          </div>
        </div >
        );
    };
}