import React from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow, Geocoder } from 'react-google-maps';

const PopUpInfoWindowExampleGoogleMap =
  withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={15}
    center={props.location}
    onClick={props.onMapClick}
  >
    {props.markers.map((marker, index) => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
      >
        {/*
          Show info window only if the 'showInfo' key of the marker is true.
          That is, when the Marker pin has been clicked and 'onCloseClick' has been
          Successfully fired.
        */}
        {marker.showInfo && (
          <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
            <div>{marker.infoContent}</div>
          </InfoWindow>
        )}
      </Marker>
    ))}
  </GoogleMap>
));


class Map extends React.Component {
  handleMapLoad(map) {
    this._mapComponent = map;
  }

  render() {
    return (
      <div style={{ height: 500 }}>
        <div><PopUpInfoWindowExampleGoogleMap

          containerElement={
            <div style={{ width: '500px', height: '500px' }} />
          }
          mapElement={
            <div style={{ width: '600px', height: '500px' }} />
          }
          location={this.props.location}
          markers={this.props.markers}
          onMapLoad={this.handleMapLoad}
          onMapClick={(location) => this.props.handleMapClick(location)}
          onMarkerRightClick={(targetMarker) => this.props.handleMarkerRightClick(targetMarker)}
        />
        </div>
      </div>
    );
  }

}

export default Map;
