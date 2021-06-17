/* eslint-disable no-undef */
import React, {Component} from "react";
import {Container, Row, Col} from "react-bootstrap";
import "../../styles/typewriter.css";
import "../../styles/styles.scss"
//import PropTypes from "prop-types";

export default class About extends Component {
	render() {
		return (
<section>
      <Container fluid id="about"className = "hr six">
        <Container className="tdbc-main-container">
          <Row>
            <Col md={7} className="tdbc-hero"> </Col>
			<Col md={100} style={{ paddingBottom:100 }} className = "typewriter h2">
            <div className ="about-header typewrite h2"></div>
		
			<div style={{ padding:10, textAlign: "justify" }} id = "about">
			<br/>
				<p className = "tdbc-lead">
				As a full-stack web developer with a professional background in IT and AV Support with a passion for creativity I bring a unique set of skills which enable me to utilise them in the innovative approach I take to each web developer project I work on to deliver high quality web projects.
			
				
				</p>
			
			</div>
			</Col>
          </Row>
</Container>			
</Container>
</section>
		);
	}
}
