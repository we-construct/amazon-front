import { handleActions } from 'redux-actions';

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

const initialState = {
  isAddProductSuccess: false,
  isAddProductFailure: false,
  isGetProductsSuccess: false,
  isGetProductsFailure: false,
  isGetProductSuccess: false,
  isGetProductFailure: false,
  myProducts: [],
  product: [],
  errorMessages: [],
};

const reducer = handleActions(
  {
    [addProductRequest]: (state) => ({
      ...state,
      isAddProductSuccess: false,
      isAddProductFailure: false,
    }),
    [addProductSuccess]: (state, { payload }) => ({
      ...state,
      isAddProductSuccess: true,
    }),
    [addProductFailure]: (state, { payload }) => ({
      ...state,
      isAddProductFailure: true,
      errorMessages: payload,
    }),
    [getProductsRequest]: (state) => ({
      ...state,
      isGetProductsSuccess: false,
      isGetProductsFailure: false,
    }),
    [getProductsSuccess]: (state, { payload }) => ({
      ...state,
      isGetProductsSuccess: true,
      myProducts: payload,
    }),
    [getProductsFailure]: (state, { payload }) => ({
      ...state,
      isGetProductsFailure: true,
      isGetProductsSuccess: false,
      errorMessages: payload,
    }),
    [getProductRequest]: (state) => ({
      ...state,
      isGetProductSuccess: false,
      isGetProductFailure: false,
    }),
    [getProductSuccess]: (state, { payload }) => ({
      ...state,
      isGetProductSuccess: true,
      isGetProductFailure: false,
      product: payload,
    }),
    [getProductFailure]: (state, { payload }) => ({
      ...state,
      isGetProductFailure: true,
      isGetProductSuccess: false,
      errorMessages: payload,
    }),
  },
  initialState
);

export default reducer;
