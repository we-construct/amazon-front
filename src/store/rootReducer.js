import { combineReducers } from 'redux';
import auth from './auth/reducer';
import address from './address/reducer';
import shop from './shop/reducer';

export default combineReducers({
  auth,
  address,
  shop,
});
