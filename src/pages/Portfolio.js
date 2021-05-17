import React, {Component} from 'react';
import Card from '../components/Container/Card';
import '../stylesheets/App.css';

export default class Portfolio extends Component{
    render(){
        return(
                 
 <div className="row">          
<h2 className = "h2">Recent Work</h2>
<Card>
<div className ="work-feature-block row">
  <div className ="columns medium-7">
    <a href = "https://github.com/Chelle77322/RESchedule"><img className ="work-feature-block-image" alt = "RESchedule App" src={require("../components/images/reschedule.jpg")}/></a>
 
  </div>
  <div className ="columns medium-5">
    <h3 className ="h3">RESchedule</h3>
    <p>A full stack web based content management system that allows managers of casual and contract work force<br/>
    to facilitate shift allocations based on employee availability</p>
    <h3 className = "h3">Project Details</h3>
    <ul>
      <li>HTML5 - Responsive Design</li>
      <li>Bulma - CSS Framework</li>
      <li>Express</li>
      <li>Model View Control</li>
      <li>Handlebars</li>
      <li>MySQL</li>
      <li>Bulma-Calendar</li>
  </ul>
  </div>
</div>
</Card>
       <div className ="work-feature-block row">
          <div className ="columns medium-7">
            <a href = "https://chelle77322.github.io/Catch-Source-Style/"><img class="work-feature-block-image" alt = "Catch-Source-Style" src={require("../components/images/catch.jpg")}/></a>
          </div>
          <div className ="columns medium-5">
            <h3 className ="h3">Catch Source Style</h3>
            <p>A quick and  efficient web design tool that allows the user to preview font selections and colour selections from image uploads  </p>
            <h3 className = "h3">Project Details</h3>
            <ul>
              <li>HTML5 - Responsive Design</li>
              <li>Bulma - CSS Framework</li>
              <li>Google Font API</li>
              <li>Imagga API</li>
              <li>FileReader API</li>
              <li>Ajax</li>
              <li>Base64.js</li>
          </ul>
          </div>
        </div>
        <div className ="work-feature-block row">
          <div className ="columns medium-7">
            <a href = "https://github.com/Chelle77322/e-commerce">E-Commerce</a>
              <video width="320" height="240">
                <source src = "assets/files/eCommerce Part 1.mp4" type="video/mp4"/>
              </video>
          </div>
          <div className ="columns medium-5">
            <h3 className ="h3">E-Commerce</h3>
            <p/>A project that showcases the latest backend technologies for a internet retail company<br/><p/>
            <h3 className = "h3">Project Details</h3>
            <ul>
              <li>NodeJS</li>
              <li>Insomnia</li>
              <li>Sequelize</li>
              <li>Inquirer</li>
              <li>JSON</li>
            </ul>
  </div>  
  
<div className ="work-feature-block row">
            <div className ="columns medium-7">
              <a href = "https://github.com/Chelle77322/takeNote/"><img className ="work-feature-block-image"alt = "Take Note"src={require("../components/images/notetaker.jpg")}/></a>
            </div>
            <div className ="columns medium-5">
              <h3 className="h3">Take Note</h3>
              <p>A simple interactive note taker app that allows you to create, save and edit notes.<br/>
              This app would work simultaneously with the Daily Planner featured below<br/>
              </p>
              <h3 className = "h3">Project Details</h3>
              <ul>
                <li>HTML5 - Responsive Design</li>
                <li>Foundation - CSS Framework</li>
                <li>Express</li>
                <li>NodeJS</li>
                <li>Dotenv</li>
                <li>Heroku</li>
              </ul>
            </div>  
          </div>
          
          <div className ="work-feature-block row">
            <div className ="columns medium-7">
              <a href = "https://chelle77322.github.io/weekly_organiser/index.html"><img className ="work-feature-block-image"alt = "Live Daily Planner"src={require("../components/images/scheduler.jpg")}/></a>
            </div>
            <div className ="columns medium-5">
              <h3 className="h3">Daily Planner</h3>
              <p>A simple autogenerating daily planner that allows the user to enter information<br/>
              Timeslots are colour coded based on whether they are in the past present of future</p>
              <h3 className = "h3">Project Details</h3>
              <ul>
                <li>HTML5 - Responsive Design</li>
                <li>Bootstrap - CSS Framework</li>
                <li>Javascript</li>
                <li>JQuery</li> 
              </ul>
            </div>  
          </div>   
        
    </div>  
   </div>  
  
     
    );
        
}
}