import React, {Component, PropTypes} from 'react';
import './Card.css';

export default class Card extends Component {
  state = {
    hover: false,
  };
  mouseOver = () => {
    this.setState({
      hover: true,
    });
  }
  mouseOut = () => {
    this.setState({
      hover: false,
    });
  }
renderImage() {
  return (
    <img className = "calloutlarge"
    role = "presentation"
    src= {this.props.imageUrl}
    />
  );
}
renderText() {
  return (
    <h2 className = "calloutlarge">
      {this.props.text}
    </h2>
  );
}
render(){
  return(
    <div className = "hero-section" onMouseOver = {this.mouseOver} onMouseOut = {this.mouseOut}>
      {this.state.hover ? this.renderText():
      this.renderImage()}
    </div>
  );
}
}
