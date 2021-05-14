import React, { Component } from 'react';
import '../stylesheets/App.css';
import '../components/Container/Card.css'

export default class Resume extends Component{
  render(){
 return (
   <>

<div className ="card-user-container">
        <div className ="card-user-container card-user-avatar user-image">
          <img className ="thumbnail-profile" src="../components/images/profile.jpg" alt = " Profile of designer"/>
        
        <div className ="medium-4 columns">
          <h3 className ="h3">UI/UX Designer</h3>
          <p>Passionate about delivering responsive designs that enhance user interactivity and experience</p>
        </div>
        <div className="row">
          <h3 classname ="h3">Front-End Developer</h3>
          <p>Enhancing the users experience with fluid intuitive designs highlighting skills in Javascript,JQuery, Heroku, REACT, Foundation and Bootstrap</p>
        </div>
        <div className ="row">
            <h3 className ="h3">Back-End Developer</h3>
            <p>Focusing on delivering functional content management systems through quality back-end development that utilises multiple paradigms with skills in NodeJS, Express, Heroku, MySQL, OOP, ORM, MVC, Handlebars, JSON, MongoDB</p>
          </div>
        </div>
         
      </div> 
  
        <div className ="card-user-container card-user-avatar user-image">
          <h2 className = "h2">Michelle Hall</h2>
<blockquote className="blockquote"> 
A intuitive UI/UX Full Stack Developer who believes that agility and adaptability are key in developing innovative websites. Recent gradudate of the Full Stack Development course at the University of Adelaide

</blockquote> 
<blockquote className="blockquote"> 
Focusing on delivering functional content management systems through quality back-end development that utilises multiple paradigms with skills in NodeJS, Express, Heroku, MySQL, MongoDB, REACT, MVC, Handlebars, JSON, CSS, Bootstrap, Foundation, JavaScript,JQuery, Ajax, Base64.js and Agile Software Development </blockquote>

<blockquote className="blockquote"> 
Improving user experience and interaction with each and every web development project I work on by delivering 
apps that are both innovative and practical
</blockquote>
<blockquote className="blockquote"> 
A lateral and forward thinker utilizing skills to bring cohesive solutions to the corporate business and
not-for-profit sectors.
</blockquote>
<h3 className ="h3">Skills</h3>
<ul>
<li>HTML5 : Responsive Web Design</li>
<li>CSS Framework : including Bootstrap, Halfmoon, Bulma, Foundation</li>
<li>Javascript</li>
<li>JQuery</li>
<li>Ajax</li>
<li>REACT</li>
<li>Node.js</li>
<li>Base64</li>
<li>MySQL</li>
<li>MongoDB</li>
<li>Express</li>
<li>Handlebars</li>
<li>Agile Software Development</li>
</ul>

</div>


</>
  );
}
}

