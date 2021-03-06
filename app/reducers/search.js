import _ from 'lodash';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import stubdata from '../stubdata';

const defaultState = {
  selected: [],
  options: stubdata,
  address: 'San Francisco, CA',
  location: {
    lat: null,
    lng: null,
  },
};

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'HANDLE_SELECT':
      if (typeof action.item == 'string') {
        return state;
      }
      const selected = _.uniq(state.selected.concat([action.item]));
      const options = _.without(state.options, action.item);
      return {
        ...state,
        selected,
        options,
      };
      break;

    case 'HANDLE_REMOVE':
      const selectedOptions = _.uniq(_.without(state.selected, action.item));
      const filteredOptions = state.options.concat([action.item]);
      return {
        ...state,
        selected: selectedOptions,
        options: filteredOptions,
      };
      break;

    case 'HANDLE_INPUT':
      const filter = new RegExp('^'+action.userInput, 'i');
      const filteredNames = _.filter(stubdata, (item) =>
        filter.test(item.name)  // || filter.test(state.id);
      ).filter(item =>
          _.map(state.selected, filteredItem => filteredItem.name)
          .indexOf(item.name) === -1)
      return {
        ...state,
        options: filteredNames,
      };
      break;

    // case 'HANDLE_FORM_SUBMIT':
    //   event.preventDefault();
    //   const { address } = this.state;
    //   geocodeByAddress(address, (err, { lat, lng }) => {
    //     if (err) {
    //       console.log('error', err);
    //     }
    //
    //     console.log(`latitude and longitude for ${address}`, { lat, lng });
    //     const location = ()
    //   });
    //   return {
    //     ...state,
    //     location,
    //   };
    //   break;

    default:
      return state;
  }
};
export default searchReducer;
