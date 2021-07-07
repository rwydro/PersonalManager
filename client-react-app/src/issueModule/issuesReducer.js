import {ADD_USERS_FOR_ISSUE, ADD_ISSUES} from 'authenticationModule/actions/actionsName'

export default function issuesReducer(state = {
    usersData: [],
    issueList: []
}, action) {

    switch (action.type) {
        case ADD_USERS_FOR_ISSUE:
            return {
                ...state,
                usersData: action.data,
            };
        case ADD_ISSUES:
            return {
                ...state,
                issueList: action.data,
            }
    }
    return state
}