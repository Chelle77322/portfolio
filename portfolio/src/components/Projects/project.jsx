import React from "react";

import Carousel from "./carousel";
import carouselContainer from "./carousel";


export default class Project{
    render(){
        return(
            
            <div className = "background">
                <h1 className = "h1"> Latest Projects</h1>
                <div>
                    <Carousel>
                 <carouselContainer/>
                    </Carousel>

                   
            </div>
            </div>

        );
    }
}