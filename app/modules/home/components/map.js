import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const PopUpMap = withGoogleMap(
    props => (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={16}
      center={props.location}
      onClick={props.onMapClick}
    >
      {props.markers.map(marker => (
      <Marker
        {...marker}
      />
      ))}
    </GoogleMap>
  ),
);

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.handleMapLoad = this.handleMapLoad.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleMapLoad(map) {
    this._mapComponent = map;
  }

  onClick(event) {
    this.props.onMapClick(event.latLng);
  }

  render() {
    const AutocompleteItem = ({ suggestion }) =>
    (<div><i className="fa fa-map-marker suggestion" />{suggestion}</div>);

    return (
      <div className="map container" style={{ height: '300px', width: '1000px' }}>
        <PopUpMap
          containerElement={
            <div style={{ height: '300px', width: '1000px', align: 'center' }} />
          }
          mapElement={
            <div style={{ height: '300px', width: '980px', align: 'center' }} />
          }
          onMapLoad={this.handleMapLoad}
          location={this.props.location}
          onMapClick={this.onClick}
          markers={this.props.markers}
        />
      </div>
    );
  }
}

export default Map;
