import React from "react";
import PropTypes from "prop-types";

import WOW from "wowjs";

export default class Background extends React.Component {
	componentDidMount() {
		new WOW.WOW().init();
	}

	render() {
		return (
			<div id="my-background" className="background" height ="90%" width = "80%" >
				<div id="stars" />
				<div id="stars2" />
				<div id="stars3" />
				<div className="top-container flex">
					<h1>
						Welcome, I&apos;m Michelle Hall
						<br />
						I&apos;m a Full Stack Web Developer.
					</h1>
					{/* Change offset in the node_modules wowjs folder*/}
					<button
						className={"work-button " + this.props.bounceIn}
						data-wow-offset="1"
						onClick={() => {
							let node = document.getElementById(
								this.props.aboutRef.current.props.id
							);
							window.scroll({
								top: node.offsetTop,
								behavior: "auto"
							});
						}}>
						Let's take a look through
					</button>
				</div>
			</div>
		);
	}
}

Background.propTypes = {
	aboutRef: PropTypes.object,
	fadeInLeft: PropTypes.string
};