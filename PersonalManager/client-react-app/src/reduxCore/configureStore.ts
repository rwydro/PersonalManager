import { Store, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'connected-react-router'
import {createRootReducer} from "./rootReducer";
import {ApplicationStates} from "../reduxCore/applicationStates";
import {rootSaga} from "../reduxCore/rootSaga";

export default function configureStore(initialState: ApplicationStates): Store<ApplicationStates> {
    // create the composing function for our middlewares
    const composeEnhancers = composeWithDevTools({});
    // create the redux-saga middleware
    const sagaMiddleware = createSagaMiddleware();

    // We'll create our store with the combined reducers/sagas, and the initial Redux state that
    // we'll be passing from our entry point.
    const store = createStore(
        createRootReducer(),
        initialState,
        composeEnhancers(applyMiddleware(routerMiddleware(), sagaMiddleware))
    );

    // Don't forget to run the root saga, and return the store object.
    sagaMiddleware.run(rootSaga);
    return store
}
