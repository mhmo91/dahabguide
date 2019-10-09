import { BehaviorSubject } from 'rxjs'
const fakeAuthState = new BehaviorSubject(null)
const fakeSignOutHandler = (): Promise<any> => {
    fakeAuthState.next(null)
    return Promise.resolve()
}
const angularFireAuthStub = {
    authState: fakeAuthState,
    auth: {
        signOut: jasmine
            .createSpy('signOut')
            .and
            .callFake(fakeSignOutHandler),
        // other functions to be added here
    }
}

export { angularFireAuthStub, fakeAuthState, fakeSignOutHandler }

