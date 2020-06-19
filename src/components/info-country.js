import React, { Component } from "react";
import PublicIcon from "@material-ui/icons/Public";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

class InfoCountry extends Component {
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
        </CardContent>
      </Card>
    );
  }
}

export default InfoCountry;
