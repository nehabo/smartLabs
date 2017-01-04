import React from 'react';
import _ from 'lodash';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import scriptLoader from 'react-async-script-loader';
import AutoCompleteForm from './autocomplete';

const PopUpInfoWindowExampleGoogleMap =
  withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={15}
    center={props.location}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    onClick={props.onMapClick}

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

  constructor(props) {
    super(props);
    this.state = {
      address: '',
      markers: null,
    };

    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleMarkerClose = this.handleMarkerClose.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleMarkerRightClick = this.handleMarkerRightClick.bind(this);
    this.handleMapLoad = this.handleMapLoad.bind(this);
  }

  componentDidMount() {
        const markers = [
          {
            position: new google.maps.LatLng(-27.363882, 137.044922),
            showInfo: false,
            infoContent: (
              <svg
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.5 0c-1.7 0-3 1.6-3 3.5 0 1.7 1 3 2.3 3.4l-.5 8c0
                  .6.4 1 1 1h.5c.5 0 1-.4 1-1L4 7C5.5 6.4 6.5 5 6.5
                  3.4c0-2-1.3-3.5-3-3.5zm10 0l-.8 5h-.6l-.3-5h-.4L11
                  5H10l-.8-5H9v6.5c0 .3.2.5.5.5h1.3l-.5 8c0 .6.4 1 1 1h.4c.6 0
                  1-.4 1-1l-.5-8h1.3c.3 0 .5-.2.5-.5V0h-.4z"
                />
              </svg>
          ),
          },
          {
            position: new google.maps.LatLng(-23.363882, 129.044922),
            showInfo: false,
            infoContent: (
              <svg
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  d="M6 14.5c0 .828-.672 1.5-1.5 1.5S3 15.328 3 14.5 3.672
                13 4.5 13s1.5.672 1.5 1.5zM16 14.5c0 .828-.672 1.5-1.5
                1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zM16
                8V2H4c0-.552-.448-1-1-1H0v1h2l.75 6.438C2.294 8.805 2 9.368
                2 10c0 1.105.895 2 2 2h12v-1H4c-.552 0-1-.448-1-1v-.01L16 8z"
                />
              </svg>
          ),
          },
        ];
        this.setState({ markers: markers });
  }

  handleMapLoad(map) {
    this._mapComponent = map;
    console.log(map);
  }

  handleMapClick(event) {
    const nextMarkers = [
      ...this.state.markers,
      {
        position: event.latLng,
        defaultAnimation: 2,
        key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
      },
    ];
    this.setState({
      markers: nextMarkers,
    });

    if (nextMarkers.length === 3) {
      this.props.toast(
        'Right click on the marker to remove it',
      );
    }
  }

  handleMarkerClick(targetMarker) {
    this.setState({
      markers: this.state.markers.map((marker) => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: true,
          };
        }
        return marker;
      }),
    });
  }

  handleMarkerClose(targetMarker) {
    this.setState({
      markers: this.state.markers.map((marker) => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: false,
          };
        }
        return marker;
      }),
    });
  }


  handleMarkerRightClick(targetMarker) {
    /*
    * All you modify is data, and the view is driven by data.
    * This is so called data-driven-development. (And yes, it's now in
    * web front end and even with google maps API.)
    */
    const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
    this.setState({
      markers: nextMarkers,
    });
  }

  render() {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;

    return (
      <div style={{ height: 500 }}>
        <span> Map Testing </span>
        <div><PopUpInfoWindowExampleGoogleMap

          containerElement={
            <div style={{ width: '100%', height: '100%' }} />
          }
          mapElement={
            <div style={{ width: '100%', height: '100%' }} />
          }
          location={this.props.location}
          markers={this.state.markers}
          onMapLoad={this.handleMapLoad}
          onMapClick={this.handleMapClick}
          onMarkerClick={this.handleMarkerClick}
          onMarkerClose={this.handleMarkerClose}
          onMarkerRightClick={this.handleMarkerRightClick}
        />
        </div>
      </div>

    );
  }

}

export default Map;
