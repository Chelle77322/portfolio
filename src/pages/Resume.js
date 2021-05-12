import React, { Component } from 'react';
import Navigation from  '../components/Navigation/Navigation';
import Jumbo from '../components/Container/Jumbo';
//import Icon from '../components/Container/Icon';
import Footer from '../components/Footer/Footer';
import '../App.css';

export default class Resume extends Component{
  render(){
 return (
   <>
   <Navigation />
   <Jumbo phrase="Michelle Hall: FullStack Web Developer" subtitle="Leveraging an IT and AV background to build a more intuitive user experience on the web" />

     <div className = "card-user-container">
    <div className ="callout large">
        <div className ="row column text-center">
          <h1 className = "h1">Developing Innovative Designs</h1>
          <p className ="lead">The key is agility</p>
          
        </div>
      </div>

      <div className ="row">
        <div className ="medium-6 columns medium-push-6">
          <img className ="thumbnail-profile" src="./components/images/profile.jpg" alt = " Profile of designer"/>
        
        <div className ="medium-4 columns">
          <h3 className ="h3">UI/UX Designer</h3>
          <p>Passionate about delivering innovative responsive designs to enhance user experience and enjoyment</p>
        </div>
        <div className="medium-4 columns">
          <h3 class="h3">Front-End Developer</h3>
          <p>Focusing on writing efficient and adaptable code with a user experience focus with skills in CSS, Bootstrap, Foundation, Ajax, JavaScript, jQuery</p>
        </div>
        <div className ="medium-4 columns">
            <h3 class="h3">Back-End Developer</h3>
            <p>Focusing on delivering functional content management systems through quality back-end development that utilises multiple paradigms with skills in NodeJS, Express, Heroku, MySQL, OOP, ORM, MVC, Handlebars, JSON</p>
          </div>
        </div>
         
      </div> 
  
        <div className ="medium-6 columns medium-pull-6">
          <h2 class = "h2">Michelle Hall</h2>
<blockquote className="blockquote">     
Full-stack web developer leveraging an IT and AV background to build a more intuitive user
experience on the web. Recently earnt a certificate in full stack development from the University of
Adelaide, with newly developed skills in responsive web design.
</blockquote> 
<blockquote className="blockquote"> 
Focusing on delivering functional content management systems through quality back-end development that utilises multiple paradigms with skills in NodeJS, Express, Heroku, MySQL, MongoDB, REACT, MVC, Handlebars, JSON, CSS, Bootstrap, Foundation, JavaScript,JQuery, Ajax, Base64.js and Agile Software Development </blockquote>

<blockquote className="blockquote"> 
Innovative approach towards developing apps, with a focus
on practicality and future growth. My aim for each web development project I work on is to deliver a
product to my audience that improves their user experience and productivity.
</blockquote>
<blockquote className="blockquote"> 
I am highly motivated to help others to gain the skills necessary to achieve their own goals by
inspiring others to develop long term goals and work systematically towards them.
A lateral and forward thinker utilizing skills to bring cohesive solutions to the corporate business and
not-for-profit sectors.
</blockquote>
<h3 class="h3">Skills</h3>
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
</div>
<Footer />
</>
  );
}
}

