import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import {HeroesActionTypes} from "../../../react-redux-typescript-example-master/src/store/heroes/types";
import {callApi} from "../../../react-redux-typescript-example-master/src/utils/api";
import {fetchError, fetchSuccess} from "../../../react-redux-typescript-example-master/src/store/heroes/actions";

function* handleFetch():Generator<void, number> {
        yield call():
        return 0;
}

function* watchFetchRequest():any {
    yield takeEvery(HeroesActionTypes.FETCH_REQUEST, handleFetch)
}

function* heroesSaga():any {
    yield all([fork(watchFetchRequest)])
}
