import web_logo from '../Header/logo.gif'
import React, {Component} from 'react';
import '../Header/Header.css';


export default class Header extends Component {
    render(){
        return (
            <div className = "App-header">
            <img src = {web_logo} alt = "Michelle Hall Web Design"/>
           <h1>Interactivity with Purpose</h1>
           </div>
          
        )
    }
}

