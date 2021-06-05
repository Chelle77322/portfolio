/* eslint-disable no-undef */
import React from "react";
import PropTypes from "prop-types";
import reschedule from "../img/reschedule.jpg";
import budgetary from "../img/budgetary.jpg";
import directory from "../img/directory.jpg";
import catchs from "../img/catch.jpg";
import profile from "../img/profile.jpg";
//import scheduler from "../img/scheduler.jpg";
import WOW from "wowjs";

export default class About extends React.Component {
	componentDidMount() {
		new WOW.WOW().init();
	}
	render() {
		return (
			<div id="about-container"
	className="content-containers container text-center mt-5">
	<h1 id="about" className={this.props.fadeInLeft}>
	About
		</h1>
		<div className="row mt-5">
		<div
		className={
		"col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft
		}>
		<img src={reschedule} alt=""/>
		<h4>Responsive</h4>
		</div>
		<div className={ "col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft}>
						
		<img src={budgetary} alt=""/>
		<h4>Design</h4>
					</div>
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInRight
						}>
						<img src={directory} alt=""/>
						<h4>Performance</h4>
					</div>
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInRight
						}>
						<img src={catchs} alt=""/>
						<h4>Agile</h4>
					</div>
				</div>

				<div className="row" style={{ marginTop: 7 + "rem" }}>
					<div className="col-12 col-lg-6 hidden">
						<img
							className={"img-fluid " + this.props.fadeIn}
							src={profile}
							alt=""
							style={{
								borderRadius: 50 + "%",
								height: 75 + "%",
								width: 75 + "%"
							}}
						/>
						<p className={"mytext pt-3 " + this.props.fadeIn}>
							Innovative approach towards developing apps, with a focus on practicality and future growth.
						</p>
					</div>
					<div
						className={
							"col-12 col-sm-12 col-md-12 col-lg-6 " +
							this.props.tada
						}>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								HTML5
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								CSS3
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-90-bar"
								role="progressbar"
								style={{ width: 90 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Javascript
							</div>
						</div>
						<div className="progress mb-3">
		<div className="progress-bar fill-60-bar"
		role="progressbar" style={{ width: 60 + "%" }}
		aria-valuemin="0"
								aria-valuemax="100">
								REACT
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Mongoose
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								NodeJs
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								SASS
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								JavaScript
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								JQuery
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

About.propTypes = {
	bounceLeft: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};