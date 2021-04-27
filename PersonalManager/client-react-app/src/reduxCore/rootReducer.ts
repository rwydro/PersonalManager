import {combineReducers} from "redux";
import {authenticationReducer} from "../authenticationModule/authenticationReducer";

export const createRootReducer = () =>
    combineReducers({
        authentication: authenticationReducer
    });
