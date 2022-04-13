import { put, call, takeEvery } from 'redux-saga/effects'
import AuthService from '../../services/auth-service'
import {
    loginRequest,
    loginSuccess,
    loginFailure
} from "../auth/action";


function* login(action){
    console.log(action)
    try {
        const {
            payload: { userName, password },
        } = action;
        console.log(action)
        const response = yield call(() =>

            AuthService.login(action.payload)
        );
        if (response?.status === 200) {
            localStorage.setItem('accessToken', response.data.token);
            localStorage.setItem('userData', JSON.stringify(response.data.user));
            yield put(loginSuccess(response.data));
        }
    } catch (e) {
        if (e?.response?.data) {
            yield put(loginFailure(e?.response?.data.message));
        }
    }
}


export default function* (){
    yield takeEvery(loginRequest, login)

}