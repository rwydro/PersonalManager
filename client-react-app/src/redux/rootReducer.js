import {combineReducers} from "redux";
import authenticationReducer from 'authenticationModule/authenticationReducer'
import issuesReducer from 'issueModule/issuesReducer'
import layoutReducer from 'layoutModule/layoutReducer'

const createReducer = () => combineReducers({
    authentication: authenticationReducer,
    issues: issuesReducer,
    layout: layoutReducer,
});

export default createReducer;