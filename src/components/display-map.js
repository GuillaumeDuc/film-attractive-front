import React, { Component } from "react";
import { Map, Popup, TileLayer, CircleMarker } from "react-leaflet";
const center = [48.88224, 2.4];

const infos = [
  { city: "Paris", size: "12" },
  { city: "Marseille", size: "5" },
];

class DisplayMap extends Component {
  constructor() {
    super();
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
      countries: [],
    };
  }

  async componentDidMount() {
    const countries = await infos.map(async (c) => {
      const loc = await this.getLocalisation(c);
      if (loc) {
        return { long: loc.longt, lat: loc.latt, city: loc.city };
      }
    });
    await this.setState({ countries });
  }

  async getLocalisation(city) {
    const axios = require("axios");
    const params = {
      auth: "4990841341468377174x6366",
      locate: city,
      json: "1",
    };

    axios
      .get("https://geocode.xyz", { params })
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    const { handleClick } = this.props;
    return (
      <div className="component-wrapper map-wrapper">
        <Map center={center} zoom={6}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {infos.map((c) => {})}
          <CircleMarker
            center={center}
            color="red"
            radius={20}
            onclick={() => handleClick("Paris")}
          >
            <Popup>Popup in CircleMarker</Popup>
          </CircleMarker>
        </Map>
      </div>
    );
  }
}

export default DisplayMap;
