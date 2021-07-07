import {action, actionData} from "redux/actionsFactory";
import {CREATE_ISSUE,
    GET_USERS_FOR_ISSUE,
    ADD_USERS_FOR_ISSUE,
    ADD_ISSUES,
    GET_ISSUES} from 'authenticationModule/actions/actionsName'

export const createIssue = (data) => actionData(CREATE_ISSUE, data);
export const getUsersForIssue = () => action(GET_USERS_FOR_ISSUE);
export const addUsersForIssue = (users) => actionData(ADD_USERS_FOR_ISSUE, users);
export const addIssues = (issuesList) => actionData(ADD_ISSUES, issuesList);
export const getIssues = () => action(GET_ISSUES);