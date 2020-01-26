import { TestBed } from '@angular/core/testing'
import { provideMockActions } from '@ngrx/effects/testing'
import { Observable } from 'rxjs'

import { AuthEffects } from './auth.effects'
import { RouterTestingModule } from '@angular/router/testing'
import { FirebaseTestingModule } from 'src/testing/firebase-testing/firebase-testing.module'

describe('AuthEffects', () => {
  // tslint:disable-next-line: prefer-const
  let actions$: Observable<any>
  let effects: AuthEffects

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FirebaseTestingModule, RouterTestingModule],
      providers: [
        AuthEffects,
        provideMockActions(() => actions$)
      ]
    })

    effects = TestBed.inject<AuthEffects>(AuthEffects)
  })

  it('should be created', () => {
    expect(effects).toBeTruthy()
  })
})
