/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from "react";
import ReactDom from "react-dom";

const carouselContainer = document.querySelector(".carousel-container");

//Data for carousel
const carouselSlidesData = [
    {
        project: {
            title: "Catch Style Source",
            desc: 'A style selection website for the beginner web developer',
            image: "assets/projects/catch.jpg",
            
            
        },
       
    },
    {
        project: {
            title: "NoteTaker",
            desc: "A useful note taking web app",
            image: <img src = "../assets/projects/notetaker.jpg" alt = "Catch Style Source"></img>,
        },
    },
    {
        project: {
            title: "Scheduler",
            desc: " An online daily planner for the work day",
            image: "../assets/projects/scheduler.jpg",
        },
    },
    {
        project: {
            title: 'Budgetary',
            desc: 'Track your daily monetary transactions with this useful budget app',
            image: ".../assets/projects/budgetary.jpg",
        },
    },
    {
        project: {
            title: 'RESchedule',
            desc: "An employment shift scheduling app for managers of casual and contract workers",
            image: "../assets/projects/reschedule.jpg",
        },
    }

];
class CarouselLeftArrow extends Component {
    render() {
        return(
            <a href ="#" className = "carousel_arrow carousel_arrow--left"
            onClick={this.props.onClick}>
                <span className = "fa fa 2x fa-angle-left"/>
            </a>
        );
    }
} 
class CarouselRightArrow extends Component {
    render (){
        return (
            <a href = "#"
            className = "carousel_arrow carousel_arrow--right"
            onClick={this.props.onClick}>
                <span className = "fa fa-2x fa-angle-right"/>
            </a>
        );
    }
} 
class CarouselIndicator extends Component{
    render(){
        return(
            <li>
                <a className = {this.props.index === this.props.activeIndex ? "carousel_indicator carousel_indicator--active": "carousel_indicator"}
                onClick={this.props.onClick}/>
            </li>
        );
    }
}
class CarouselSlide extends Component {
    render() {
        return (
            <li className = {this.props.index === this.props.activeIndex? "carousel_slide carousel_slide--active": "carousel_slide"}>
                <div className = "carousel-slide_content">
                    {this.props.slide.project}
                </div>
            </li>
        );
    }
}
//Wraps the Carousel Component all together
class Carousel extends Component {
    constructor(props){
        super(props);
    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
        activeIndex: 0
    };
    }
    gotToSlide(index){
        this.setState({
            activeIndex: index
        });
    }
    goToPrevSlide(event){
        event.preventDefault();
        let index = this.state.activeIndex;
        let { slides } = this.props;
        let slidesLength = slides.length;
        if (index <1){
            index = slidesLength;
        }
        --index;
        this.setState ({
            activeIndex: index
        });
    }
    goToNextSlide(event){
        event.preventDefault();
        let index = this.state.activeIndex;
        let { slides } = this.props;
        let slidesLength = slides.length -1;

        if(index === slidesLength){
            index = -1;
        }
    ++index;
    this.setState({
        activeIndex: index
    });
}
render () {
    return (
        <div className = "carousel">
            <CarouselLeftArrow onClick = {event => this.goToPrevSlide(event)}/>
            <ul className = "carousel_slides">
                {this.props.slides.map((slide, index)=>
                <CarouselSlide
                key= {index}
                index = {index}
                activeIndex = {this.state.activeIndex}
                slide = {slide}/>
                )}
            </ul>

            <CarouselRightArrow onClick = {event => this.goToNextSlide(event)} />
            <ul className = "carousel_indicators">
                {this.props.slides.map((slide, index) =>
                <CarouselIndicator
                key={index}
                index={index}
                activeIndex={this.state.activeIndex}
                isActive={this.state.activeIndex === index}
                onClick={event => this.goToSlide(index)}/>
                )}
            </ul>
        </div>
    );
}
}
//Renders the Carousel Component
ReactDom.render(<Carousel slides = {carouselSlidesData}/>,
    carouselContainer);

    export default Carousel;
