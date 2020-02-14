import React, { Component } from "react";

import "./Circles.css";

class Circles extends Component {
  render() {
    return (
      <div className='Circles'>
        <div className={this.props.selected === "circle1" ? "selected" : ""}>
          1
        </div>
        <div className={this.props.selected === "circle2" ? "selected" : ""}>
          2
        </div>
        <div className={this.props.selected === "circle3" ? "selected" : ""}>
          3
        </div>
        <div className={this.props.selected === "circle4" ? "selected" : ""}>
          4
        </div>
      </div>
    );
  }
}

export default Circles;
