import { combineReducers } from 'redux';
import searchReducer from './search';

const searchApp = combineReducers({
  searchReducer,
  // cartReducer,
});

export default searchApp;
