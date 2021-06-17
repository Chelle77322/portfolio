/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {Component} from "react";
import { Container, Row, Col} from "react-bootstrap";
import Profile from "../../assets/profile.jpg";
import "../../styles/styles.scss"


export default class Contact extends Component{
  render(){
  return (
    <section>
      <Container fluid className="container -fluid" id="contact">
        
        <Container className="hr six">
          <Row>

      <Col md={100} style={{ paddingBottom:50 }} className = "tdbc-main">
            <div className ="contact-header" id = "my-contact">
            <h3 style={{ paddingBottom: 5 }} className="tdbc-h3">
               Contact</h3>
              
              </div>
              <div style={{ padding: 20, textAlign: "center" }}>
              <p className = "tdbc-lead">Interested in working with me or finding out more about what I can do?
             Feel free to reach out to me on the socials below </p>
              </div>
             
             
  <Col md={100} style={{ paddingBottom:50 }} className ="tdbc-main">

  
     
   
 

    <div>
    <h5 className = "tdbc-h4 article">Connect with Me<img src={Profile} className = "tdbc-img"/></h5>
      <span className="location"><span className="location-icon fa fa-map-marker p tdbc-h4"></span><span className="tdbc-h4">Adelaide, South Australia</span></span>
    </div>
        <div className="rounded-social-buttons">
        <a className="social-button linkedin" href="https://www.linkedin.com/in/michelle-hall-08021434/"><i className="fab fa-linkedin tdbc-button_icon"></i></a>
        <a className="social-button github" href="https://github.com/Chelle77322/"><i className="fab fa-github tdbc-button_icon"></i></a>
    
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
