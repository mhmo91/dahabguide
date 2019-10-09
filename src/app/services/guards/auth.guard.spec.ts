import { IUser, User } from 'src/app/models/user.model'
import { TestBed } from '@angular/core/testing'

import { AuthGuard } from './auth.guard'
import { AngularFireAuth } from '@angular/fire/auth'
import { provideMockStore, MockStore } from '@ngrx/store/testing'
import { Store } from '@ngrx/store'
import { appStateMock } from 'src/app/reducers'

describe('AuthGuard', () => {
  let authGuard: AngularFireAuth
  let store: MockStore<{ user: IUser }>
  const initialState = appStateMock

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        provideMockStore({ initialState }),
      ]
    })
    store = TestBed.get(Store)

    authGuard = TestBed.get(AuthGuard)

  })

  it('should ...', () => {
    expect(authGuard).toBeTruthy()
  })
})
