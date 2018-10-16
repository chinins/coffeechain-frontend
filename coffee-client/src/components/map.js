import React, { Component } from 'react';
import styled from 'react-emotion';
import mapboxgl from 'mapbox-gl';
import { mapAccessToken } from '../constants/connections';

mapboxgl.accessToken = mapAccessToken;

const MapDiv = styled('div')`
  height: 65%;
  width: 40%;
  position: fixed;
  bottom: 1em;
  right: 1em;
`;

class Map extends Component {
  constructor (props) {
    super(props);
    this.map = {};
    this.state = { propsLoaded: false };
  }

  componentDidMount () {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [16.336466, 47.406542],
      zoom: 2.5
    });
  }

  componentDidUpdate () {
    for (let i = 0; i < this.props.result.length; i++) {
      if (
        this.props.result.length > 0 &&
        this.props.data[this.props.result[i]]
      ) {
        new mapboxgl.Marker()
          .setLngLat([
            this.props.data[this.props.result[i]].geo_location.coordinates[1],
            this.props.data[this.props.result[i]].geo_location.coordinates[0]
          ])
          .addTo(this.map);
      }
    }
  }

  render () {
    return (
      <MapDiv>
        <div
          ref={el => (this.mapContainer = el)}
          className="absolute top right left bottom"
        />
      </MapDiv>
    );
  }
}

export default Map;
