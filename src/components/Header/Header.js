import video from '../Header/logo.mp4'
import React, {Component} from 'react';

import '../Header/Header.css';


export default class Header extends Component {
    render(){
        return (
            <>
            <div className = "Header-background blended">
            <video width="250" height="250" align="center" autoPlay muted>
            <source src={video} type="video/mp4"/>
            </video>
           <h1 className = "h1">Developing Intuitive User Experiences</h1>
           </div>
           </>
          
        )
    }
}

