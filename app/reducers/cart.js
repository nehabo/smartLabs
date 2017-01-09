import _ from 'lodash';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';

const defaultState = {
  address: '',
  location: {
    lat: 17.401522099999998,
    lng: 78.4600679,
  },
  markers: [{
    position: {
      lat: 17.401522099999998,
      lng: 78.4600679,
    },
    key: 'India',
    defaultAnimation: 2,
  }],
};

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ON_LOCATE':
      const latitude = action.coords.latitude;
      const longitude = action.coords.longitude;
      return {
        ...state,
        location: {
          lat: latitude,
          lng: longitude,
        },
      };
      break;

    case 'ON_CHANGE':
      const address = action.address;
      return {
        ...state,
        address,
      };
      break;

    case 'HANDLE_FORMSUBMIT':
      const myAddress = state.address;
      console.log(action.location);
      return {
        ...state,
        address: myAddress,
        location: action.location,
      };
      break;

    case 'HANDLE_CLICK':
      const nextMarkers = action.nextMarkers;
      return {
        ...state,
        markers: nextMarkers,
      };
      break;

    default:
      return state;
  }
};
export default cartReducer;
