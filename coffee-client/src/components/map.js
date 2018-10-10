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
    this.map = {}
  }

  componentDidMount () {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [66.736466, -1.406542],
      zoom: 2.5
    });
  }


  render() {
    return (
      <MapDiv>
        <div ref={el => this.mapContainer = el} className="absolute top right left bottom"></div>
      </MapDiv>
    )
  }
}

export default Map;