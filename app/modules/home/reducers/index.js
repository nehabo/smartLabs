import { combineReducers } from 'redux';
import searchReducer from './search';
import addressReducer from './address';
import patientReducer from './patient';
import orderReducer from './order';
import homeReducer from './home';

const searchApp = combineReducers({
  searchReducer,
  addressReducer,
  patientReducer,
  orderReducer,
  homeReducer,
});

export default searchApp;
