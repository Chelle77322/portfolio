/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {Component} from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Profile from "../../assets/profile.jpg";
import "../../styles/styles.scss"


export default class Contact extends Component{
  render(){
  return (
    <section>
      <Container fluid className="container" id="contact">
        
        <Container className="hr six">
          <Row>
            <Col md={7} className="hr six">
             
              
            </Col>

      <Col md={100} style={{ paddingBottom:50 }} className = "main">
            <div className ="contact-header" id = "my-contact">
            <h2 style={{ paddingBottom: 5 }} className="tdbc-h2">
               Contact</h2>
              
              </div>
              <div style={{ padding: 20, textAlign: "center" }}>
              <p className = "tdbc-h4">Interested in working with me or finding out more about what I can do?<br/>
             Feel free to reach out to me on the socials below </p>
                  
               
              </div>
              <img src={Profile} height = "25%" width = "25%" alt="Web Developer's Avatar"/>;
  <Col md={100} style={{ paddingBottom:50 }} className = "main">
  <div className ="tdbc-card">

   
    <div className ="tdbc-card">
    
   
  
    

    <div className="card-user-bio">
      <h3 className = "tdbc-h3">Michelle Hall</h3>
      <p className = "tdbc-h5">UX/UI ,Full-Stack Web Developer, Responsive Design, HTML5, SCSS Framework, SASS, NodeJS, ReactJS JQuery, Ajax, Express, Mongoose, Heroku,Agile Software Development </p>
      <span className="location"><span className="location-icon fa fa-map-marker"></span><span className="location-text">Adelaide, South Australia</span></span>
    </div>
        <div className="rounded-social-buttons">
        <a className="social-button linkedin" href="https://www.linkedin.com/in/michelle-hall-08021434/"><i className="fab fa-linkedin"></i></a>
        <a className="social-button github" href="https://github.com/Chelle77322/"><i className="fab fa-github"></i></a>
    
    </div>
     <Card>
      <div className="card-user-button">
        <a href="https://github.com/Chelle77322/" className="hollow button">FOLLOW</a>
      </div>
      </Card>
</div>
</div>
              </Col>
            </Col>
          </Row>
        </Container>
      </Container>
    
    </section>
  );
}

}
