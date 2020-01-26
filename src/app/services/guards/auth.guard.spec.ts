import { IUser, User } from 'src/app/models/user.model'
import { TestBed } from '@angular/core/testing'

import { AuthGuard } from './auth.guard'
import { AngularFireAuth } from '@angular/fire/auth'
import { provideMockStore, MockStore } from '@ngrx/store/testing'
import { Store } from '@ngrx/store'
import { appStateMock } from 'src/testing/states/app-state-mock'
import { RouterTestingModule } from '@angular/router/testing'

describe('AuthGuard', () => {
  let authGuard: AngularFireAuth
  let store: MockStore<{ user: IUser }>
  const initialState = appStateMock

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthGuard,
        provideMockStore({ initialState }),
      ]
    })
    store = TestBed.inject(Store)
    authGuard = TestBed.inject(AuthGuard)

  })

  it('should ...', () => {
    expect(authGuard).toBeTruthy()
  })
})
