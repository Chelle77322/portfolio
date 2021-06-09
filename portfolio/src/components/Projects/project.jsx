import React from "react";
import PropTypes from "prop-types";
import Carousel from "./carousel";


export default class Project{
    render(){
        return(
            
            <div className = "background">
                <h1 className = "h1"> Latest Projects</h1>
                <div>
                    <Carousel />

                   
            </div>
            </div>

        );
    }
}