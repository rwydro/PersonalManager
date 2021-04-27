export enum AuthenticationView {
    Login,
    CreateAccount,
    ForgotPassword
}

export enum AuthenticationActionTypes {
    CREATE_USER = '@@authentication/CREATE_USER'
}

export interface AuthenticationState {
    authenticationView: AuthenticationView
}
