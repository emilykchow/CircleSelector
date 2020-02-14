import React, { Component } from "react";

import "./CircleSelector.css";

class CircleSelector extends Component {
  render() {
    return (
      <div className='CircleSelector'>
        <button
          className={this.props.selected === "circle1" ? "selected" : ""}
          onClick={this.props.handleClick}
        >
          SELECT CIRCLE 1
        </button>
        <button
          className={this.props.selected === "circle2" ? "selected" : ""}
          name='circle2'
          onClick={this.props.handleClick}
        >
          SELECT CIRCLE 2
        </button>
        <button
          className={this.props.selected === "circle3" ? "selected" : ""}
          name='circle3'
          onClick={this.props.handleClick}
        >
          SELECT CIRCLE 3
        </button>
        <button
          className={this.props.selected === "circle4" ? "selected" : ""}
          name='circle4'
          onClick={this.props.handleClick}
        >
          SELECT CIRCLE 4
        </button>
      </div>
    );
  }
}

export default CircleSelector;
