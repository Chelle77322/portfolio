import video from '../Header/logo.mp4';
import {web_logo} from '../Header/banner.png';
import React, {Component} from 'react';

import '../Header/Header.css';



export default class Header extends Component {
    render(){
        return (
            <>
            <div className = "header">
                <h1 className = "Header-img">
                <img src = {web_logo} alt = "Michelle Hall Web Design"/>
                </h1>
            
           </div>
           </>
          
        )
    }
}

