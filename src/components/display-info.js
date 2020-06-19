import React, { Component } from "react";

import InfoCountry from "./info-country";
import InfoCity from "./info-city";

class DisplayMap extends Component {
  render() {
    return (
      <div className="component-wrapper display-info">
        <InfoCountry />
        <InfoCity info={this.props.info} />
      </div>
    );
  }
}

export default DisplayMap;
