import React, {Component} from 'react';
import '../components/Container/Card.css';
import '../stylesheets/App.css';


export default class Contact extends Component{
render() {
  return(
    <>
     <div className ="card-user-container">

    <div className ="card-user-avatar">
      <img  className = "thumbnail" src={require("../components/images/profile.jpg")} alt = "Profile designer"/>
     
    <div className ="card-user-bio">
      <h3 className = "h3">Michelle Hall</h3>
      <p className = "lead">UX/UI ,Full-Stack Web Developer, Javascript, JQuery, Ajax, Express, MySQL, Heroku, REACT, MongoDB, Agile Software Development </p>
      <span className ="location"><span className ="location-icon fa fa-map-marker"></span><span className ="location-text">Adelaide, South Australia</span></span>
    </div>
  
    </div>
   
        <div className ="rounded-social-buttons">
        <a className ="social-button linkedin" href="https://www.linkedin.com/in/michelle-hall-08021434/"><i className ="fab fa-linkedin"></i></a>
        <a className ="social-button github" href="https://github.com/Chelle77322/"><i class="fab fa-github"></i></a>
    
    </div>
      
      <div className ="card-user-button">
        <a href="https://github.com/Chelle77322/" className="hollow button">FOLLOW</a>
      </div>
</div> 

 </>   
  );
};

}