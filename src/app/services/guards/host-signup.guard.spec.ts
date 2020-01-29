import { appStateMock } from 'src/testing/states/app-state-mock'
import { provideMockStore, MockStore, MockState } from '@ngrx/store/testing'
import { TestBed, async, inject } from '@angular/core/testing'

import { HostSignupGuard } from './host-signup.guard'
import { IUser } from '../../models/user.model'
import { Store } from '@ngrx/store'

describe('HostSignupGuard', () => {
  const initialState = appStateMock

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HostSignupGuard,
        provideMockStore({ initialState }),
      ]
    })

  })

  it('should ...', inject([HostSignupGuard], (guard: HostSignupGuard) => {
    expect(guard).toBeTruthy()
  }))
})
