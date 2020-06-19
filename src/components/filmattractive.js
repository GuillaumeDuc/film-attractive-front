import React, { Component } from "react";
import DisplayInfo from "./display-info";
import DisplayMap from "./display-map";

class Filmattractive extends Component {
  constructor() {
    super();
    this.state = {
      info: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const info = "Clicked";
    this.setState({ info });
  }
  render() {
    return (
      <div className="filmattractive-wrapper">
        <DisplayMap handleClick={this.handleClick} />
        <DisplayInfo info={this.state.info} />
      </div>
    );
  }
}

export default Filmattractive;
