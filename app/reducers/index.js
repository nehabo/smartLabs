import { combineReducers } from 'redux';
import searchReducer from './search';

const searchApp = combineReducers({
  searchReducer,
});

export default searchApp;
