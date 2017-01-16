import _ from 'lodash';
import stubdata from '../../../config/stubdata';

const defaultState = {
  selected: [],
  options: stubdata,
  items: [],
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
      ).filter((item) =>
          _.map(state.selected, filteredItem => filteredItem.name)
          .indexOf(item.name) === -1)
      return {
        ...state,
        options: filteredNames,
      };
      break;

      case 'HANDLE_CHECKOUT':
      console.log(action.items);
        return {
          ...state,
          items: action.items,
        };
        break;

    default:
      return state;
  }
}
export default searchReducer;
