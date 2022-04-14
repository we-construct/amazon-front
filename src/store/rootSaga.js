import { all } from 'redux-saga/effects';
import auth from './auth/saga';
import address from './address/saga';

export default function* () {
  yield all([auth(), address()]);
}
