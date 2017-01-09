import React from 'react';
import _ from "lodash";
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

const PopUpMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={13}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    onClick={props.onMapClick}
  >
  </GoogleMap>
));

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.handleMapLoad = this.handleMapLoad.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleMarkerRightClick = this.handleMarkerRightClick.bind(this);
  }

  handleMapLoad(map) {
    this._mapComponent = map;
  }

  handleMapClick(event) {
    console.log(event.latLng);
  }

  render() {
    return (
      <div style={{height: `350px`}}>
        <PopUpMap
          containerElement={
            <div style={{ height: `300px` }} />
          }
          mapElement={
            <div style={{ height: `300px` }} />
          }
          onMapLoad={this.handleMapLoad}
          onMapClick={this.handleMapClick}
        />
      </div>
    );
  }
}

export default Map;
