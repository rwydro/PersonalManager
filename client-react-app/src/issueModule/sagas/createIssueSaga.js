import {sendPostRequest} from "coreModule/sendRequest";
import { call, takeEvery, put} from 'redux-saga/effects'
import {CREATE_ISSUE} from 'authenticationModule/actions/actionsName'
import {createIssueDto} from "api/issueModuleDtos";

export function* onCreateIssueSaga(action) {
    try {
        const data = createIssueDto(
            action.data['tittle'],
            action.data['description'],
            action.data['deadLine'],
            action.data['assignedUser'],
            action.data.accessToken
        );
        const response = yield call(sendPostRequest, 'https://localhost:5001/api/Issues/create', data);
    } catch (error) {
        //yield put(Error(error.Name));
    }
}


export default function* createIssueSaga (){
    yield takeEvery(CREATE_ISSUE, onCreateIssueSaga);
}

