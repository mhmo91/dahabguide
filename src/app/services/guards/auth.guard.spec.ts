import { RouterTestingModule } from '@angular/router/testing'
import { TestBed, async, inject } from '@angular/core/testing'

import { AuthGuard } from './auth.guard'
import { AuthService } from '../auth.service'
import { Router } from '@angular/router'
import { AngularFireAuth } from '@angular/fire/auth'
import { FirebaseTestingModule } from 'src/testing/firebase-testing/firebase-testing.module'

describe('AuthGuard', () => {
  let afAuth: AngularFireAuth
  let authGuard: AngularFireAuth

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FirebaseTestingModule, RouterTestingModule],
      providers: [
        AuthGuard
      ]
    })
    afAuth = TestBed.get(AngularFireAuth)
    authGuard = TestBed.get(AuthGuard)

  })

  it('should ...', () => {
    expect(authGuard).toBeTruthy()
  })
})
