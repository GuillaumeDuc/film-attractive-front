import React, { Component } from "react";
import {
  Map,
  Marker,
  Popup,
  TileLayer,
  Circle,
  CircleMarker,
  Rectangle,
  Polygon,
  Polyline,
} from "react-leaflet";
const center = [46, 2];

const infos = [
  { city: "Paris", size: "12" },
  { city: "Marseille", size: "5" },
];

const polyline = [
  [46, 2],
  [46.5, 2.02],
  [46.51, 2.12],
];

const multiPolyline = [
  [
    [46.5, 2],
    [46.5, 2.12],
    [46.52, 2.12],
  ],
  [
    [46.5, 1],
    [46.5, 1.12],
    [46.52, 1.12],
  ],
];

const polygon = [
  [51.515, -0.09],
  [51.52, -0.1],
  [51.52, -0.12],
];

const multiPolygon = [
  [
    [51.51, -0.12],
    [51.51, -0.13],
    [51.53, -0.13],
  ],
  [
    [51.51, -0.05],
    [51.51, -0.07],
    [51.53, -0.07],
  ],
];

const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
];

class DisplayMap extends Component {
  constructor() {
    super();
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
    };
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
          {infos.map(() => {})}
          <Circle center={center} fillColor="blue" radius={200} />
          <CircleMarker
            center={center}
            color="red"
            radius={20}
            onclick={handleClick}
          >
            <Popup>Popup in CircleMarker</Popup>
          </CircleMarker>
          <Polyline color="lime" positions={polyline} />
          <Polyline color="lime" positions={multiPolyline} />
          <Polygon color="purple" positions={polygon} />
          <Polygon color="purple" positions={multiPolygon} />
          <Rectangle bounds={rectangle} color="black" />
        </Map>
      </div>
    );
  }
}

export default DisplayMap;
