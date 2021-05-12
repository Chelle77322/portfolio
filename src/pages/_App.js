import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer/Footer';



export default class Apply extends Component {
  render(){

    let headerStyle = {
   
      height: 70
    }

    let ulStyle = {
      listStyle: "none",
      margin: 0,
      padding: 26,
    }

    let liStyle = {
      display: "inline",
    }

    let linkStyle = {
      border: "1px solid #E5B13A",
      borderRadius: 90,
      padding: "15px",
      marginRight: "10px",
      textDecoration: "none",
      color: "#E5B13A",
      backgroundColor: "black",
    }

    return(
      <div>
        <div style={headerStyle}>
          <ul style={ulStyle}>
            <li style={liStyle}>
              <NavLink exact to="/" style={linkStyle} activeStyle={{color:"red"}}>Home</NavLink>
            </li>
            <li style={liStyle}>
              <NavLink to="/about" style={linkStyle} activeStyle={{color:"red"}}>About me</NavLink>
            </li>
            <li style={liStyle}>
              <NavLink to="/portfolio" style={linkStyle} activeStyle={{color:"red"}}>Portfolio</NavLink>
            </li>
            <li style={liStyle}>
              <NavLink to="/contact" style={linkStyle} activeStyle={{color:"red"}}>Contact</NavLink>
            </li>
            <li style={liStyle}>
              <NavLink to="/resume" style={linkStyle} activeStyle={{color:"red"}}>Resume</NavLink>
            </li>
          </ul>
        </div >
        <div style={{backgroundImage: "./background.jpg", height: "100vh"}}>
          {this.props.children}
        </div>
      <Footer/>
      </div>
    );
  }
}