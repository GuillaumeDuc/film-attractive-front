import React, { Component } from "react";
import PublicIcon from "@material-ui/icons/Public";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Slider from "@material-ui/core/Slider";

class InfoCountry extends Component {
  constructor() {
    super();
    this.state = {
      value: [1945, 2018],
    };
  }

  valuetext(value) {
    return `${value}°C`;
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  render() {
    return (
      <Card className="info-wrapper info-world">
        <div className="info-title">Classements national</div>
        <CardContent>
          <div className="info-row">
            <TrendingUpIcon /> Villes les plus populaires
          </div>
          <div className="info-row">
            <TrendingDownIcon /> Villes les moins populaires
          </div>
          <div className="info-row">
            <PublicIcon /> Villes avec le plus de films étrangers
          </div>
          <div className="info-slider">
            <Slider
              value={this.state.value}
              onChange={this.handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={this.valuetext}
              min={1945}
              max={2018}
            />
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default InfoCountry;
