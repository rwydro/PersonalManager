import {actionData} from "redux/actionsFactory";
import {SET_SECOND_COLUMN_VIEW} from 'authenticationModule/actions/actionsName'

export const setSecondColumnViewContext = data => actionData(SET_SECOND_COLUMN_VIEW, data);