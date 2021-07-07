import {takeEvery, call, put} from "@redux-saga/core/effects";
import {GET_ISSUES} from "../../authenticationModule/actions/actionsName";
import {sendRequest} from "../../coreModule/sendRequest";
import {addIssues} from "issueModule/actions/issueActions"
import {setSecondColumnViewContext} from "../../layoutModule/actions/layoutActions";
import secondColumnViewContext from "../../layoutModule/secondColumnViewContext";

export function* onGetIssuesSaga(action) {
    try{
        const response = yield call(sendRequest, 'https://localhost:5001/api/Issues');
        yield put(addIssues([...response.issues]));
        yield put(setSecondColumnViewContext({context:secondColumnViewContext.Issues}));
    }
    catch (e) {

    }

}

export default function* getIssuesSaga (){
    yield takeEvery(GET_ISSUES, onGetIssuesSaga);
}