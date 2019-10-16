
import { auth, User as FbUser } from 'firebase/app'
import { User, IUser } from 'src/app/models/user.model'
import { AngularFireAuth } from '@angular/fire/auth'
import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'

import { concatMap, switchMap, map, catchError } from 'rxjs/operators'
import { EMPTY, of, from } from 'rxjs'
import { FirebaseAuth } from '@angular/fire'
import { AngularFirestore } from '@angular/fire/firestore'
import { Router } from '@angular/router'

import * as authActions from '../actions/auth.actions'
import * as userActions from '../actions/user.actions'



@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions<authActions.AuthActions>,
    private angularFireAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) { }


  @Effect()
  facebookLogin = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.FACEBOOK_LOGIN),
    switchMap((x) => this.angularFireAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())),
    map((res) => new userActions.UpdateUser(this.castFirebaseUser(res.user))),
    catchError(err => of(new authActions.AuthenticationFail()))
  )

  @Effect()
  googleLogin = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.GOOGLE_LOGIN),
    switchMap((x) => this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())),
    map((res) => new userActions.UpdateUser(this.castFirebaseUser(res.user))),
    catchError(err => of(new authActions.AuthenticationFail()))
  )


  @Effect()
  authenticationFail = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.AUTH_ERROR),
    map(() => new authActions.NotAuthenticated())
  )
  castFirebaseUser(user: FbUser) {
    return { uid: user.uid, displayName: user.displayName, email: user.email, photoURL: user.photoURL }
  }

}
