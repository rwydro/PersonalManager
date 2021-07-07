import {SET_SECOND_COLUMN_VIEW} from 'authenticationModule/actions/actionsName'
import secondColumnViewContext from "./secondColumnViewContext";

export default function layoutReducer(state = {
    secondColumnView: secondColumnViewContext.WelcomeScreen
}, action) {
    switch (action.type) {
        case SET_SECOND_COLUMN_VIEW:
            return {
                ...state,
                secondColumnView: action.data.context,
            }
    }
    return state
}