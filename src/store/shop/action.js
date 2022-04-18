import { createAction } from 'redux-actions';

export const addProductRequest = createAction('ADD_PRODUCT');
export const addProductSuccess = createAction('ADD_PRODUCT_SUCCESS');
export const addProductFailure = createAction('ADD_PRODUCT_FAILURE');
