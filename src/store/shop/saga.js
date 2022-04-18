import { put, call, takeEvery } from 'redux-saga/effects';
import ShopService from '../../services/shop-service';
import {
  addProductSuccess,
  addProductFailure,
  addProductRequest,
} from './action';

function* addProduct(action) {
  try {
    const {
      payload: { address },
    } = action;
    const response = yield call(() => ShopService.addProduct(action.payload));
    if (response?.status === 200) {
      yield put(addProductSuccess(response.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(addProductFailure(e?.response?.data.message));
    }
  }
}
export default function* () {
  yield takeEvery(addProductRequest, addProduct);
}
