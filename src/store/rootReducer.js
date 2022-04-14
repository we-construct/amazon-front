import { combineReducers } from 'redux';
import auth from './auth/reducer';
import address from './address/reducer';

export default combineReducers({
  auth,
  address,
});
