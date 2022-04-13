import { createAction } from "redux-actions";

export const loginRequest = createAction('LOGIN_REQUEST')
export const loginSuccess = createAction('LOGIN_SUCCESS')
export const loginFailure = createAction('LOGIN_FAILURE')

export const checkAuthRequest = createAction('CHECK_AUTH')
export const checkAuthSuccess = createAction('CHECK_SUCCESS')
export const checkAuthFailure = createAction('CHECK_FAILURE')