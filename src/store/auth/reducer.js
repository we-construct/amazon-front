import {handleActions} from 'redux-actions'

import {
    loginRequest,
    loginSuccess,
    loginFailure,

    checkAuthRequest,
    checkAuthSuccess,
    checkAuthFailure
} from "./action";

const initialState = {
    isLoginSuccess: false,
    isLoginFailure: false,
    isCheckAuthSuccess: false,
    isCheckAuthFailure: false,
    userData: {},
    errorMessages: []
}

const reducer = handleActions({
    [checkAuthRequest]: (state) => ({
        ...state,
        isCheckAuthSuccess: false,
        isCheckAuthFailure: false,
        userData: {}
    }),
    [checkAuthSuccess]: (state,{ payload} ) => ({
        ...state,
        isCheckAuthSuccess: true,
        userData: payload
    }),
    [checkAuthFailure]: (state, { payload }) => ({
        ...state,
        isCheckAuthFailure: true,
        errorMessages: payload
    }),
    [loginRequest]: (state) => ({
        ...state,
        isLoginSuccess: false,
        isLoginFailure: false,
        userData: {}
    }),
    [loginSuccess]: (state,{ payload} ) => ({
        ...state,
        isLoginSuccess: true,
        userData: payload.user
    }),
    [loginFailure]: (state, { payload }) => ({
        ...state,
        isLoginFailure: true,
        errorMessages: payload
    })
}, initialState)

export default reducer