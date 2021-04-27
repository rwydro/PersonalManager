import {Reducer} from 'redux'
import {AuthenticationActionTypes, AuthenticationState, AuthenticationView} from './types'

// Type-safe initialState!
export const initialState: AuthenticationState = {
    authenticationView: AuthenticationView.Login
};

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<AuthenticationState> = (state = initialState, action) => {
    switch (action.type) {
        case AuthenticationActionTypes.CREATE_USER: {
            return { ...state, authenticationView: action.data }
        }
        default: {
            return state
        }
    }
}

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as authenticationReducer }