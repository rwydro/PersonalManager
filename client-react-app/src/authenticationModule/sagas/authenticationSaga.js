import {sendPostRequest} from "coreModule/sendRequest";
import { call, takeEvery, put } from 'redux-saga/effects'
import {LOGIN_USER} from 'authenticationModule/actions/actionsName'
import {addLoggedInUser} from 'authenticationModule/actions/authenticationActions'

export function* onLoginUser(action) {
    try {
        const response = yield call(sendPostRequest, 'https://localhost:5001/api/Users/Authenticate', action.data);
        yield put(addLoggedInUser(response));

    } catch (error) {
        //yield put(Error(error.Name));
    }
}


export default function* loginUserSaga (){
    yield takeEvery(LOGIN_USER, onLoginUser);
}

