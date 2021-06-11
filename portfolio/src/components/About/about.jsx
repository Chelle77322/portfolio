/* eslint-disable no-undef */
import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import "../../styles/typewriter.css";
import "../../styles/styles.scss"
//import PropTypes from "prop-types";


export default class About extends React.Component {
	componentDidMount() {
	console.log("Successful");
	}
	render() {
		return (
<section>
      <Container fluid id="about">
        <Container className="about-content">
          <Row>
            <Col md={7} className="about-header bar six"></Col>
			<Col md={100} style={{ paddingBottom:100 }} className = "typewriter h2">
            <div className ="about-header">
				<ul>
            <li><h2 style={{ paddingBottom: 5 }} className="typewriter h3">
               Creative</h2></li>

			<li><h2 style={{ paddingBottom: 5 }} className="typewriter h3">
               Innovative</h2></li>

			<li><h2 style={{ paddingBottom: 5 }} className="typewriter h3">
               UX Design</h2></li>
			</ul> 
              </div>
              <div style={{ padding: 50, textAlign: "justify" }}></div>
            </Col>
			<Col>
			<div className ={ "col-12 col-sm-12 col-md-12 col-lg-6 " + this.props.tada}>
			<div className="progress mb-3">
				<div className="progress-bar fill-80-bar" role="progressbar" style={{ width: 80 + "%" }}
					aria-valuemin="0"aria-valuemax="100">HTML5</div>
				</div>
			
			<div className="progress mb-3">
				<div className="progress-bar fill-80-bar" role="progressbar" style={{ width: 80 + "%" }}
					aria-valuemin="0" aria-valuemax="100">SCSS</div>
				</div>
				<div className="progress mb-3">
			<div className="progress-bar fill-90-bar" role="progressbar" style={{ width: 90 + "%" }}
				aria-valuemin="0" aria-valuemax="100">JQuery</div>
		</div>
		<div className="progress mb-3">
		<div className="progress-bar fill-60-bar" role="progressbar" style={{ width: 60 + "%" }}
				aria-valuemin="0" aria-valuemax="100"> ReactJS </div>
		</div>
		<div className="progress mb-3">
			<div className="progress-bar fill-80-bar" role="progressbar" style={{ width: 80 + "%" }}
				aria-valuemin="0" aria-valuemax="100"> MongoDB </div>
		</div>

		<div className="progress mb-3">
			<div className="progress-bar fill-60-bar" role="progressbar" style={{ width: 60 + "%" }}
				aria-valuemin="0" aria-valuemax="100"> NodeJs </div>
		</div>
		</div>
			</Col>
          </Row>
</Container>			
</Container>
</section>
		);
	}
}
