import React, { Component } from 'react';
import styled from 'react-emotion';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hpbmlucyIsImEiOiJjam4xaHdleWI0a2U4M3FueDgwM2ptN2VtIn0.r0ypAbepxGXZvEwJBR3amg';

const MapDetailDiv = styled('div')`
  height: 35%;
  width: 35%;
  position: absolute;
  bottom: 9%;
  left: 5%;
`;

class MapDetail extends Component {

  constructor(props) {
    super(props);
    this.map = {}
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [66.736466, -1.406542],
      zoom: 2.5
    });
    let marker;
    marker = new mapboxgl.Marker()
      .setLngLat([36.736466, -1.406542])
      .addTo(this.map);
  }


  render() {
    return (
      <MapDetailDiv>
        <div ref={el => this.mapContainer = el} className="absolute top right left bottom"></div>

      </MapDetailDiv>
    )
  }
}

export default MapDetail;