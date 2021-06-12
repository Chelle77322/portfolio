/* eslint-disable no-undef */
import React, {Component} from "react";
import {Container, Row, Col} from "react-bootstrap";
import "../../styles/typewriter.css";
import "../../styles/styles.scss"
//import PropTypes from "prop-types";


export default class About extends Component {
	componentDidMount() {
	console.log("Successful");
	}
	render() {
		return (
<section>
      <Container fluid id="about-container"className = "hr six">
        <Container className="tdbc-container">
          <Row>
            <Col md={7} className="tdbc-hero"> </Col>
			<Col md={100} style={{ paddingBottom:100 }} className = "typewriter h2">
            <div className ="about-header"></div>
		<blockquote>
            A designer knows they have achieved perfection not when there is nothing left to add,but when there is nothing left to take away.</blockquote>
    		</Col>
			<Col>
			<div style={{ padding: 20, textAlign: "center" }}>
			<blockquote>
				<p className = "p">
				Welcome, <br/>
				As a full stack web developer, I focus on combining creativity and practicality to all my projects. Combining a depth of knowledge accumulated from various industries allows me to think outside of the box when it comes to delivering UI/UX designs<br/> 
				</p>
			</blockquote>
			</div>
			</Col>
          </Row>
</Container>			
</Container>
</section>
		);
	}
}
