import React, {Component} from "react";
import MyProjects from "../Carousel";
import { Container, Row, Col } from "react-bootstrap";



export default class Projects extends Component{
    render(){
        return(
            
            <Container className="hr six">
            <Row>
              <Col md={7} className="hr six">
               
                
              </Col>
  
              <Col md={100} style={{ paddingBottom:50 }} className = "main">
              <div className ="contact-header" id = "my-projects">
              <h2 style={{ paddingBottom: 5 }} className="tdbc-h2">
                 Latest Projects</h2>
                
                </div>
                <div style={{ padding: 20, textAlign: "center" }}>
                    
                 <MyProjects />
                </div>
              </Col>
            </Row>
          </Container>
        
        

        );
    }
}
