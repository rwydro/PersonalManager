import {sendPostRequest} from "coreModule/sendRequest";
import { call, takeEvery, put} from 'redux-saga/effects'
import {CREATE_USER} from 'authenticationModule/actions/actionsName'
import {createUsersDto} from 'api/issueModuleDtos'

export function* onCreateUser(action) {
    try {
        const adminObject = !!action.data['admin_key'] ? {role: 1, adminKey: action.data['admin_key']}: {role: 0, adminKey: ''};
        const newUserDto = createUsersDto(action.data['d_name'],  adminObject.role,
            action.data['login'],
            action.data['password'],
            adminObject.adminKey,
            action.data['email'],);
        const response = yield call(sendPostRequest, 'https://localhost:5001/api/Users', {...newUserDto});
    } catch (error) {
        const wwww = JSON.parse(error.message);
        //yield put(Error(error.Name));
    }
}


export default function* createUserSaga (){
    yield takeEvery(CREATE_USER, onCreateUser);
}

