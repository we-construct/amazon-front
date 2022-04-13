import {handleActions} from 'redux-actions'

import {
    loginRequest,
    loginSuccess,
    loginFailure
} from "./action";

const initialState = {
    isLoginSuccess: false,
    isLoginFailure: false,
    userData: {},
    errorMessages: []
}

const reducer = handleActions({
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