import React, {Component} from "react";
import PropTypes from "prop-types";

import {WOW} from "wowjs";

export default class Background extends Component {
	componentDidMount() {
        const wow = new WOW({live: false}); // disables sync requirement
        wow.init()
	}

	render() {
		return (
			<div id="my-background" className="tdbc-main-container">
					{/* Change offset in the node_modules wowjs folder*/}
           
                
					
				</div>
			
		);
	}
}

Background.propTypes = {
	AboutRef: PropTypes.object,
    ProjectsRef: PropTypes.object,
    ResumeRef: PropTypes.object,
    ContactRef: PropTypes.object,

	fadeInLeft: PropTypes.string
};