import {actionData} from "redux/actionsFactory";
import {LOGIN_USER,
    ADD_USER_TO_REDUCER,
CREATE_USER} from 'authenticationModule/actions/actionsName'

export const loginUser = (data) => actionData(LOGIN_USER, data);
export const addLoggedInUser = (data) => actionData(ADD_USER_TO_REDUCER, data);
export const createUser = (data) => actionData(CREATE_USER, data);