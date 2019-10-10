
export interface IAuthState {
    authenticating?: boolean
    authenticated: boolean
}
export class AuthState implements IAuthState {
    constructor(public authenticated, public authenticating = false) {

    }
}

