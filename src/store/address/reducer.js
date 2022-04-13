import {handleActions} from "redux-actions";

import {
    addAddressRequest,
    addAddressFailure,
    addAddressSuccess,

    getAddressFailure,
    getAddressSuccess,
    getAddressRequest

} from "./action";

const initialState = {
    isAddAddressSuccess: false,
    isAddAddressFailure: false,
    isGetAddressFailure: false,
    isGetAddressSuccess: false,
    myAddresses: {},
    errorMessages: []
}
const reducer =  handleActions({
    [addAddressRequest]: (state) => ({
        ...state,
        isAddAddressSuccess: false,
        isAddAddressFailure: false,
        myAddresses: {}
    }),
    [addAddressSuccess]: (state,{ payload}) => ({
        ...state,
        isAddAddressSuccess: true,
        myAddresses: payload
    }),
    [addAddressFailure]: (state,{payload}) => ({
        ...state,
        isAddAddressFailure: true,
        errorMessages: payload
    }),
    [getAddressRequest]: (state) => ({
        ...state,
        isAddAddressSuccess: false,
        isAddAddressFailure: false,
        myAddresses: {}
    }),
    [getAddressSuccess]: (state,{ payload}) => ({
        ...state,
        isGetAddressSuccess: true,
        myAddresses: payload
    }),
    [getAddressFailure]: (state,{payload}) => ({
        ...state,
        isGetAddressFailure: true,
        errorMessages: payload
    }),
}, initialState)

export default reducer