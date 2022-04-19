import { put, call, takeEvery } from 'redux-saga/effects';
import ShopService from '../../services/shop-service';
import {
  addProductSuccess,
  addProductFailure,
  addProductRequest,
  getProductsRequest,
  getProductsSuccess,
  getProductsFailure,
  getProductRequest,
  getProductSuccess,
  getProductFailure,
} from './action';

function* addProduct(action) {
  try {
    const { payload } = action;
    const response = yield call(() => ShopService.addProduct(payload));
    if (response?.status === 200) {
      yield put(addProductSuccess(response.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(addProductFailure(e?.response?.data.message));
    }
  }
}
function* getProducts() {
  try {
    const response = yield call(() => ShopService.getProducts());
    if (response?.status === 200) {
      yield put(getProductsSuccess(response.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(getProductsFailure(e?.response?.data.message));
    }
  }
}
function* getProduct(action) {
  const { payload } = action;
  try {
    const response = yield call(() => ShopService.getProduct(payload));
    if (response?.status === 200) {
      yield put(getProductSuccess(response.data));
    }
  } catch (e) {
    if (e?.response?.data) {
      yield put(getProductFailure(e?.response?.data.message));
    }
  }
}
export default function* () {
  yield takeEvery(addProductRequest, addProduct);
  yield takeEvery(getProductsRequest, getProducts);
  yield takeEvery(getProductRequest, getProduct);
}
