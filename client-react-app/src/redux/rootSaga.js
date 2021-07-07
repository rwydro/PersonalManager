import {all} from 'redux-saga/effects'
import loginUserSaga from "authenticationModule/sagas/authenticationSaga";
import createUserSaga from "authenticationModule/sagas/createUserSaga";
import createIssueSaga from "issueModule/sagas/createIssueSaga";
import getUsersForIssueSaga from "issueModule/sagas/getUsersForIssueSaga";
import getIssuesSaga from "issueModule/sagas/getIssuesSaga";

export default function* rootSaga() {
    yield all([
        //jakasSaga()
        createIssueSaga(),
        loginUserSaga(),
        createUserSaga(),
        getUsersForIssueSaga(),
        getIssuesSaga(),
    ])

}