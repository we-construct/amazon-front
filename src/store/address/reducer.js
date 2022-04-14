import { handleActions } from 'redux-actions';

import {
  addAddressRequest,
  addAddressFailure,
  addAddressSuccess,
  getAddressFailure,
  getAddressSuccess,
  getAddressRequest,
  deleteAddressFailure,
  deleteAddressSuccess,
  deleteAddressRequest,
  updateAddressFailure,
  updateAddressSuccess,
  updateAddressRequest,
} from './action';

const initialState = {
  isAddAddressSuccess: false,
  isAddAddressFailure: false,
  isGetAddressFailure: false,
  isGetAddressSuccess: false,
  isDeleteAddressFailure: false,
  isDeleteAddressSuccess: false,
  isUpdateAddressFailure: false,
  isUpdateAddressSuccess: false,
  myAddresses: [],
  errorMessages: [],
};
const reducer = handleActions(
  {
    [addAddressRequest]: (state) => ({
      ...state,
      isAddAddressSuccess: false,
      isAddAddressFailure: false,
      myAddresses: [],
    }),
    [addAddressSuccess]: (state, { payload }) => ({
      ...state,
      isAddAddressSuccess: true,
    }),
    [addAddressFailure]: (state, { payload }) => ({
      ...state,
      isAddAddressFailure: true,
      errorMessages: payload,
    }),
    [getAddressRequest]: (state) => ({
      ...state,
      isAddAddressSuccess: false,
      isAddAddressFailure: false,
      myAddresses: [],
    }),
    [getAddressSuccess]: (state, { payload }) => ({
      ...state,
      isGetAddressSuccess: true,
      myAddresses: payload,
    }),
    [getAddressFailure]: (state, { payload }) => ({
      ...state,
      isGetAddressFailure: true,
      errorMessages: payload,
    }),
    [deleteAddressRequest]: (state) => ({
      ...state,
      isDeleteAddressSuccess: false,
      isDeleteAddressFailure: false,
    }),
    [deleteAddressSuccess]: (state) => ({
      ...state,
      isDeleteAddressSuccess: true,
    }),
    [deleteAddressFailure]: (state, { payload }) => ({
      ...state,
      isDeleteAddressFailure: true,
      errorMessages: payload,
    }),

    [updateAddressRequest]: (state) => ({
      ...state,
      isUpdateAddressSuccess: false,
      isUpdateAddressFailure: false,
    }),
    [updateAddressSuccess]: (state) => ({
      ...state,
      isUpdateAddressSuccess: true,
    }),
    [updateAddressFailure]: (state, { payload }) => ({
      ...state,
      isUpdateAddressFailure: true,
      errorMessages: payload,
    }),
  },
  initialState
);

export default reducer;
