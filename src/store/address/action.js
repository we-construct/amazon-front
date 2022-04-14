import { createAction } from 'redux-actions';

export const addAddressRequest = createAction('ADD_ADDRESS_REQUEST');
export const addAddressSuccess = createAction('ADD_ADDRESS_SUCCESS');
export const addAddressFailure = createAction('ADD_ADDRESS_FAILURE');

export const getAddressRequest = createAction('GET_ADDRESS_REQUEST');
export const getAddressSuccess = createAction('GET_ADDRESS_SUCCESS');
export const getAddressFailure = createAction('GET_ADDRESS_FAILURE');

export const deleteAddressRequest = createAction('DELETE_ADDRESS_REQUEST');
export const deleteAddressSuccess = createAction('DELETE_ADDRESS_SUCCESS');
export const deleteAddressFailure = createAction('DELETE_ADDRESS_FAILURE');

export const updateAddressRequest = createAction('UPDATE_ADDRESS_REQUEST');
export const updateAddressSuccess = createAction('UPDATE_ADDRESS_SUCCESS');
export const updateAddressFailure = createAction('UPDATE_ADDRESS_FAILURE');
