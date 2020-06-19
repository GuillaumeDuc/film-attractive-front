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
  handleClick(city) {
    this.setState({ info: city });
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
