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

      <Col md={100} style={{ paddingBottom:50 }} className = "tdbc-main">
            <div className ="contact-header" id = "my-contact">
            <h2 style={{ paddingBottom: 5 }} className="tdbc-h2">
               Contact</h2>
              
              </div>
              <div style={{ padding: 20, textAlign: "center" }}>
              <p className = "tdbc-lead">Interested in working with me or finding out more about what I can do?
             Feel free to reach out to me on the socials below </p>
              </div>
             
             
  <Col md={100} style={{ paddingBottom:50 }} className ="tdbc-main">
  <Card>
  <div className ="tdbc-card">
  <img src={Profile} className = "img:first-child" alt="Web Developer's Avatar"/>;
   </div>
    <div className ="tdbc-card">
    <h3 className = "tdbc-card__title">Michelle Hall</h3>
      <p className = "lead">UX/UI ,Full-Stack Web Developer, Responsive Design, HTML5, SCSS Framework, SASS, NodeJS, ReactJS JQuery, Ajax, Express, Mongoose, Heroku,Agile Software Development </p>
      <span className="location"><span className="location-icon fa fa-map-marker p"></span><span className="lead">Adelaide, South Australia</span></span>
    </div>
        <div className="rounded-social-buttons tdbc-card">
        <a className="social-button linkedin" href="https://www.linkedin.com/in/michelle-hall-08021434/"><i className="fab fa-linkedin"></i></a>
        <a className="social-button github" href="https://github.com/Chelle77322/"><i className="fab fa-github"></i></a>
    
    </div>

    </Card>

              </Col>
            </Col>
          </Row>
        </Container>
      </Container>
    
    </section>
  );
}

}
