import { RouterTestingModule } from '@angular/router/testing'
import { TestBed } from '@angular/core/testing'
import { provideMockActions } from '@ngrx/effects/testing'
import { Observable } from 'rxjs'

import { UserEffects } from './user.effects'
import { FirebaseTestingModule } from 'src/testing/firebase-testing/firebase-testing.module'
import { AngularFireAuth } from '@angular/fire/auth'

describe('UserEffects', () => {
  // tslint:disable-next-line: prefer-const
  let actions$: Observable<any>
  let effects: UserEffects
  let afAuth: AngularFireAuth
  let angularFireStoreSpy: { doc: jasmine.Spy }
  angularFireStoreSpy = jasmine.createSpyObj('AngularFirestore', ['doc'])
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl'])

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FirebaseTestingModule, RouterTestingModule],
      providers: [
        UserEffects,
        provideMockActions(() => actions$)
      ]
    })
    afAuth = TestBed.inject(AngularFireAuth)
    effects = TestBed.inject<UserEffects>(UserEffects)
  })

  it('should be created', () => {
    expect(effects).toBeTruthy()
  })
})
