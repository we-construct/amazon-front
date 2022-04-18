import { handleActions } from 'redux-actions';

import {
  addProductSuccess,
  addProductFailure,
  addProductRequest,
} from './action';

const initialState = {
  isAddProductSuccess: false,
  isAddProductFailure: false,
  errorMessages: [],
};

const reducer = handleActions(
  {
    [addProductRequest]: (state) => ({
      ...state,
      isAddProductSuccess: false,
      isAddProductFailure: false,
      userData: {},
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
  },
  initialState
);

export default reducer;
