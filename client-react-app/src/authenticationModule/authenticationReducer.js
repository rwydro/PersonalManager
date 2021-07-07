import {ADD_USER_TO_REDUCER} from 'authenticationModule/actions/actionsName'

export default function authenticationReducer(state = {
    uerData: {}
}, action) {

    switch (action.type) {
        case ADD_USER_TO_REDUCER:
            return {
                userData: {...action.data},
                ...state
            }
    }
    return state
}