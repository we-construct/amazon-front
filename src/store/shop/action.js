import { createAction } from 'redux-actions';

export const addProductRequest = createAction('ADD_PRODUCT');
export const addProductSuccess = createAction('ADD_PRODUCT_SUCCESS');
export const addProductFailure = createAction('ADD_PRODUCT_FAILURE');

export const getProductsRequest = createAction('GET_PRODUCTS');
export const getProductsSuccess = createAction('GET_PRODUCTS_SUCCESS');
export const getProductsFailure = createAction('GET_PRODUCTS_FAILURE');

export const getProductRequest = createAction('GET_PRODUCT_REQUEST');
export const getProductSuccess = createAction('GET_PRODUCT_SUCCESS');
export const getProductFailure = createAction('GET_PRODUCT_FAILURE');
