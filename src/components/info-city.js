import React, { Component } from "react";
import PublicIcon from "@material-ui/icons/Public";
import MovieIcon from "@material-ui/icons/Movie";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

class InfoCity extends Component {
  render() {
    return (
      <Card className="info-wrapper info-city">
        <div className="info-title">Information sur {this.props.info}</div>
        <CardContent>
          <div className="info-row">
            <MovieIcon /> Nombre de films
          </div>
          <div className="info-row">
            <PublicIcon /> Nombre de films étrangers
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default InfoCity;
