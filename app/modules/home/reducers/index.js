import { combineReducers } from 'redux';
import searchReducer from './search';
import cartReducer from './cart';
import patientReducer from './patient';
import orderReducer from './order';
import homeReducer from './home';

const searchApp = combineReducers({
  searchReducer,
  cartReducer,
  patientReducer,
  orderReducer,
  homeReducer,
});

export default searchApp;
