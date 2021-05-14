import web_logo from '../Header/logo.gif'
import React, {Component} from 'react';


import '../Header/Header.css';


export default class Header extends Component {
    render(){
        return (
            <>
            <div className = "Header-background">
            <img src = {web_logo} className = "Header-img"alt = "Michelle Hall Web Design"/>
           <h1 className = "h1">Developing Intuitive User Experiences</h1>
           </div>
           </>
          
        )
    }
}

