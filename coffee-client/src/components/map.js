import React, { Component } from 'react';
import styled from 'react-emotion';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hpbmlucyIsImEiOiJjam4xaHdleWI0a2U4M3FueDgwM2ptN2VtIn0.r0ypAbepxGXZvEwJBR3amg';

const MapDiv = styled('div')`
  height: 50%;
  width: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
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