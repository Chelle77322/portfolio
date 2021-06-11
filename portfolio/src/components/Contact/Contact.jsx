import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import Particle from "../Particle";
//import overhome from "./overhome.jsx";
import "../../styles/styles.scss"


function Contact() {
  return (
    <section>
      <Container fluid className="wrapper bar six" id="contact">
        
        <Container className="contact-content">
          <Row>
            <Col md={7} className="home-header bar six">
             
              
            </Col>

            <Col md={100} style={{ paddingBottom:100 }} className = "main">
            <div className ="home-header">
            <h1 style={{ paddingBottom: 5 }} className="heading">
               Contact</h1>
              
              </div>
              <div style={{ padding: 50, textAlign: "center" }}>
                  
               
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <overhome />
    </section>
  );
}

export default Contact;