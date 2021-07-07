import {takeEvery, call, put} from "@redux-saga/core/effects";
import {GET_USERS_FOR_ISSUE} from "../../authenticationModule/actions/actionsName";
import {sendRequest} from "../../coreModule/sendRequest";
import {addUsersForIssue} from "issueModule/actions/issueActions"
export function* onGetUsersSaga(action) {
    try{
        const response = yield call(sendRequest, 'https://localhost:5001/api/Users');
        yield put(addUsersForIssue([...response.users]));
    }
    catch (e) {

    }

}

export default function* getUsersForIssueSaga (){
    yield takeEvery([GET_USERS_FOR_ISSUE], onGetUsersSaga);
}