import _ from 'lodash';

const defaultState = {
  address: '',
  location: {
    lat: null,
    lng: null,
  },
};

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ON_LOCATE':
      const lat = action.coords.latitude;
      const lng = action.coords.longitude;
      return {
        ...state,
        location: {
          lat,
          lng,
        },
      };
      break;
    default:
      return state;
  }
};
export default cartReducer;
