import web_logo from '../Header/logo.mp4'
import React, {Component} from 'react';


import '../Header/Header.css';


export default class Header extends Component {
    render(){
        return (
            <>
            <div className = "Header-background blended">
            <img src = {web_logo} className = "Header-img blend"alt = "Michelle Hall Web Design"/>
           <h1 className = "h1">Developing Intuitive User Experiences</h1>
           </div>
           </>
          
        )
    }
}

