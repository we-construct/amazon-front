import { all } from 'redux-saga/effects';
import auth from './auth/saga';
import address from './address/saga';
import shop from './shop/saga';

export default function* () {
  yield all([auth(), address(), shop()]);
}
