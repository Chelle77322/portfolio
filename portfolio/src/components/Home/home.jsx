import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/typewriter.css";
import "../../styles/styles.scss"


function Home() {
  return (
    <section>
      <Container fluid className="wrapper bar six" id="home">
        
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header bar six">
             
              
            </Col>

            <Col md={100} style={{ paddingBottom:100 }} className = "typewriter h1">
            <div className ="home-header typewriter h1">
            <h1 style={{ paddingBottom: 5 }} className="heading">
               Full Stack Web Developer.....</h1>
              
              </div>
              <div style={{ padding: 50, textAlign: "center" }}>
               
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
     
    </section>
  );
}

export default Home;