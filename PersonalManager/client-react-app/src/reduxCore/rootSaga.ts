

export function* rootSaga() {
    yield all([fork(heroesSaga), fork(teamsSaga)])
}
