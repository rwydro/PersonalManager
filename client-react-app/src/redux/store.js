import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from "redux";
import createReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import {createLogger} from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension";
import startSignalR from "../coreModule/singalR";


const storeEnhancer = async (sagas) =>{
    const arr = [
        sagas
    ];
    arr.push(createLogger());
    const enhancer = applyMiddleware(...arr);
    return composeWithDevTools(enhancer);
};

const initialize = async () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(createReducer(), await storeEnhancer(sagaMiddleware));
    window.store = store;
    sagaMiddleware.run(rootSaga);
    await startSignalR(store);
    return store;
};

function initializeStore() {
    return {
        async init()
        {
            const store = await initialize();
            this.getStore = () => store;
            delete this.init;
        }
    }
}

export const store = initializeStore() ;
export const dispatch = (action) => store.getStore().dispatch(action) ;
export const getState = () => store.getStore().getState();