import _ from 'lodash';

const defaultState = {
  address: '',
  location: {
    lat: 17.4015332,
    lng: 78.460165,
  },
  markers: [{
    position: {
      lat: 17.4015332,
      lng: 78.460165,
    },
    key: 'India',
    defaultAnimation: 2,
  }],
  streetAddress: '',
  locality: '',
  city: '',
  district: '',
  postalCode: '',
  _state: '',
};

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ON_LOCATE':
      const latitude = action.coords.latitude;
      const longitude = action.coords.longitude;
      const location = {
        lat: latitude,
        lng: longitude,
      };
      return {
        ...state,
        location,
        markers: [{
          position: {
            lat: latitude,
            lng: longitude,
          },
        }],
      };
      break;

    case 'ON_CHANGE':
      return {
        ...state,
        address: action.address,
      };
      break;

    case 'ON_SELECT':
      return {
        ...state,
        address: action.address,
      };
      break;

    case 'ON_GEOCODESUCCESS':
      const lat = action.lat;
      const lng = action.lng;
      return {
        ...state,
        location: {
          lat,
          lng,
        },
        markers: [{
          position: {
            lat,
            lng,
          },
        }],
      };
      break;

    case 'GET_ADDRESS':
      let streetAddress = '';
      let locality = '';
      let postalCode = '';
      let city = '';
      let district = '';
      let _state = '';
      console.log(action.results);
      _.map(action.results, (Object) => {
        console.log(Object.types);
        if (_.includes(Object.types, 'postal_code')) {
          console.log(_.result(Object, 'address_components[0].short_name'));
          postalCode = Object.address_components[0].short_name;
        } else if (_.includes(Object.types, 'locality')) {
          console.log(Object.address_components[0].short_name + ' city');
          city = Object.address_components[0].short_name;
        } else if (_.includes(Object.types, 'administrative_area_level_1')) {
          console.log(Object.address_components[0].short_name + ' state');
          _state = Object.address_components[0].short_name;
        } else if ((_.includes(Object.types, 'street_address'))
                  || (_.includes(Object.types, 'route'))
                  || (_.includes(Object.types, 'sublocality_level_3'))
                  || (_.includes(Object.types, 'establishment'))
                  || (_.includes(Object.types, 'neighborhood'))) {
          console.log(_.result(Object, 'address_components[0].short_name'));
          if (_.result(Object, 'address_components[0].short_name') === 'Unnamed Road') {
            streetAddress = '';
          } else {
          streetAddress = streetAddress + ' ' + _.result(Object, 'address_components[0].short_name');
          }
        } else if ((_.includes(Object.types, 'sublocality_level_1'))
                  || (_.includes(Object.types, 'sublocality_level_2'))) {
          console.log(Object.address_components[0].short_name);
          locality = locality + ' ' + _.result(Object, 'address_components[0].short_name');
        } else if ((_.includes(Object.types, 'administrative_area_level_2'))) {
          console.log(Object.address_components[0].short_name);
          district = Object.address_components[0].short_name;
        }
      });
      return {
        ...state,
        streetAddress,
        locality,
        district,
        postalCode,
        city,
        _state,
      };
      break;

    case 'HANDLE_CLICK':
      const nextMarkers = action.nextMarkers;
      const markerLat = nextMarkers[0].position.lat();
      const markerLng = nextMarkers[0].position.lng();
      return {
        ...state,
        markers: nextMarkers,
        location: {
          lat: markerLat,
          lng: markerLng,
        },
      };
      break;

    case 'HANDLE_STREETINPUT':
      return {
        ...state,
        streetAddress: action.street,
      };
      break;

    case 'HANDLE_LOCALITYINPUT':
      return {
        ...state,
        locality: action.locality,
      };
      break;

    case 'HANDLE_POSTALINPUT':
      return {
        ...state,
        postalCode: action.pincode,
      };
      break;

    case 'HANDLE_FORMSUBMIT':
      console.log(action.values);
      return {
        ...state,
      }
      break;

    default:
      return state;
  }
};
export default cartReducer;
