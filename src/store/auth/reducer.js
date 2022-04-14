import { handleActions } from 'redux-actions';

import {
  loginRequest,
  loginSuccess,
  loginFailure,
  checkAuthRequest,
  checkAuthSuccess,
  checkAuthFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
} from './action';

const initialState = {
  isLoginSuccess: false,
  isLoginFailure: false,
  isLogoutSuccess: false,
  isLogoutFailure: false,
  isCheckAuthSuccess: false,
  isCheckAuthFailure: false,
  userData: {},
  accessToken: '',
  errorMessages: [],
};

const reducer = handleActions(
  {
    [checkAuthRequest]: (state) => ({
      ...state,
      isCheckAuthSuccess: false,
      isCheckAuthFailure: false,
      userData: {},
    }),
    [checkAuthSuccess]: (state, { payload }) => ({
      ...state,
      isCheckAuthSuccess: true,
      userData: payload,
    }),
    [checkAuthFailure]: (state, { payload }) => ({
      ...state,
      isCheckAuthFailure: true,
      errorMessages: payload,
    }),
    [loginRequest]: (state) => ({
      ...state,
      isLoginSuccess: false,
      isLoginFailure: false,
      userData: {},
    }),
    [loginSuccess]: (state, { payload }) => ({
      ...state,
      isLoginSuccess: true,
      userData: payload.user,
      accessToken: payload.accessToken,
    }),
    [loginFailure]: (state, { payload }) => ({
      ...state,
      isLoginFailure: true,
      errorMessages: payload,
    }),
    [logoutRequest]: (state) => ({
      ...state,
      isLogoutSuccess: false,
      isLogoutFailure: false,
    }),
    [logoutSuccess]: (state, { payload }) => {
      return {
        ...state,
        isLogoutSuccess: true,
        userData: {},
      };
    },
    [logoutFailure()]: (state, { payload }) => ({
      ...state,
      isLogoutFailure: true,
      errorMessages: payload,
    }),
  },
  initialState
);

export default reducer;
