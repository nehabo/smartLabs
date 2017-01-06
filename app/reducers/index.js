import { combineReducers } from 'redux';
import searchReducer from './search';
import cartReducer from './cart';

const searchApp = combineReducers({
  searchReducer,
  cartReducer,
});

export default searchApp;
