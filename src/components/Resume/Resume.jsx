/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {Component} from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/styles.scss"
import download from "../../assets/Michelle Hall.pdf";


export default class Resume extends Component {
    render(){
        return(
            <section>
                <Container fluid className = "container-fluid" id = "resume">
            <Container className = "hr six">
                <Row>
                    <Col md = {200} style = {{paddingBottom:30}} className = "tdbc-main">
                        <div className = "resume-header" id = "my-resume">
                            <h2 style = {{paddingBottom: 3}}
                            className = "tdbc-h2">
                                Resume
                            </h2>
                    </div>

                    <div  className = "tdbc-main" style = {{ padding: 20, textAlign: "center" }}>
                    <p className = "tdbc-lead">
                    Delivering full stack web development apps through quality back-end development and intuitive  front-end UI/UX design to enhance user experience</p>
                    </div>
            </Col>
            <Col md={200} style = {{paddingBottom:30}} className = "tdbc-main">
              
                    <div className = "tdbc-main-container">
                    <h3 className = "tdbc-h3">Languages and Technologies</h3>
                    <div className = "tdbc-main-container"> 
<table className = "tdbc-row">
    <tbody>
    <tr className = "tdbc-row tdbc-h3">
   
    <th style = {{padding: 5}}><i className="fab fa-react tdbc-button_icon"></i>  <td className = "tdbc-h4">ReactJS</td></th>
    <th style = {{padding: 5}}><i className="fab fa-node-js tdbc-button_icon"></i>  <td className = "tdbc-h4">NodeJS</td></th>
    <th style = {{padding: 5}}><i className="fas fa-database tdbc-button_icon"></i><td className = "tdbc-h4">MongoDB</td></th>
    <th style = {{padding: 5}}><i className="fab fa-js tdbc-button_icon"></i><td className = "tdbc-h4">JQuery</td></th>
    <th style = {{padding: 5}}><i className="fab fa-sass tdbc-button_icon"></i><td className = "tdbc-h4">Responsive CSS</td></th>
    <th style = {{padding: 5}}><i className="fab fa-bootstrap tdbc-button_icon"></i><td className = "tdbc-h4">Bootstrap</td></th>
    <th style = {{padding: 5}}> <i className="fab fa-html5 tdbc-button_icon"></i><td className = "tdbc-h4">HTML5</td></th>
        </tr>
    <tr>
    
  
    
    
    
    
    
    </tr>
        </tbody>
</table>

</div>
                    
                    < a href= {download}><button className="tdbc-button" type="submit">View Full Resume</button></a>
                   </div>


           </Col>  
           </Row> 
 


</Container>
 </Container>
            </section>
        );
    }
}