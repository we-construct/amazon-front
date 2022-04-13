import { put, call, takeEvery } from 'redux-saga/effects'
import AuthService from '../../services/auth-service'
import {
    loginRequest,
    loginSuccess,
    loginFailure,
    checkAuthRequest,
    checkAuthSuccess
} from "../auth/action";


function* login(action){
    try {
        const {
            payload: { userName, password },
        } = action;
        const response = yield call(() =>
            AuthService.login(action.payload)
        );
        if (response?.status === 200) {
            localStorage.setItem('accessToken', response.data.access_token);
            localStorage.setItem('userData', JSON.stringify(response.data.user));
            yield put(loginSuccess(response.data));
        }
    } catch (e) {
        if (e?.response?.data) {
            yield put(loginFailure(e?.response?.data.message));
        }
    }
}

function* checkAuthFunction(){

    try {
        const response = yield call(() =>
            AuthService.me()
        );
        if (response?.status === 200) {

            localStorage.setItem('userData', JSON.stringify(response.data));
            yield put(checkAuthSuccess(response.data))
        }
    } catch (e) {
        if (e?.response?.data) {
            yield put(loginFailure(e?.response?.data.message));
        }
    }

}


export default function* (){
    yield takeEvery(loginRequest, login)
    yield takeEvery(checkAuthRequest, checkAuthFunction)
}