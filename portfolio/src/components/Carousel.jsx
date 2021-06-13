import React from 'react';
import projectData from "../data/mockData";
import Main from "./Carousel/Main";
import "../styles/styles.scss";
import "../styles/_carousel.scss";
const MyProjects = (props) => {
   
    const config = props.config || {
        "data": projectData.data,
        "infinite": true, 
        "tofro" : false, 
        "autoplay": false, 
        "idleTime" : 2000,
        "showCaption": true,
        "showSlideNum" : true,
        "showDots": true,
        "showArrows": 'both'
    };
    return <Main config={config}/>
};
export default MyProjects;