import { put, call, takeEvery } from 'redux-saga/effects'
import AddressService from '../../services/address-service'
import {
    addAddressRequest,
    addAddressFailure,
    addAddressSuccess,

    getAddressFailure,
    getAddressSuccess,
    getAddressRequest

} from "./action";
import AuthService from "../../services/auth-service";
import {checkAuthSuccess, loginFailure} from "../auth/action";
function* addAddress(action){

    try {
        const {
            payload: { address },
        } = action;
        const response = yield call(() =>

            AddressService.addAddress(action.payload)
        );
        if (response?.status === 200) {

            yield put(addAddressSuccess(response.data));

        }
    } catch (e) {
        if (e?.response?.data) {
            yield put(addAddressFailure(e?.response?.data.message));
        }
    }
}


function * getAddress() {

    try {
        const response = yield call(() =>
            AddressService.getAddresses()
        );
        if (response?.status === 200) {

            yield put(getAddressSuccess(response.data))
        }
    } catch (e) {
        if (e?.response?.data) {
            yield put(getAddressFailure(e?.response?.data.message));
        }
    }
}


export default function* (){
    yield takeEvery(addAddressRequest, addAddress)
    yield takeEvery(getAddressRequest, getAddress)

}