import { combineReducers } from 'redux';
import searchReducer from './search';
import cartReducer from './cart';
import patientReducer from './patient';
import orderReducer from './order';

const searchApp = combineReducers({
  searchReducer,
  cartReducer,
  patientReducer,
  orderReducer,
});

export default searchApp;
