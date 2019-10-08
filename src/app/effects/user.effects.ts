import { auth, User as FbUser } from 'firebase/app'
import { User, IUser } from 'src/app/models/user.model'
import { AngularFireAuth } from '@angular/fire/auth'
import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'

import { concatMap, switchMap, map, catchError } from 'rxjs/operators'
import { EMPTY, of, from } from 'rxjs'
import * as userActions from '../actions/user.actions'
import { FirebaseAuth } from '@angular/fire'
import { AngularFirestore } from '@angular/fire/firestore'
import { Router } from '@angular/router'



@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions<userActions.UserActions>,
    private angularFireAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) { }


  @Effect()
  getUser = this.actions$.pipe(
    ofType(userActions.ActionTypes.GET_USER),
    switchMap(() => this.angularFireAuth.authState),
    concatMap((user: FbUser) => {
      if (user) {
        console.log('i came here')
        // get user info from users Collection from firestore "dahab-guide/database/users"
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
      } else {
        return of(null)
      }
    }),
    map((user: User) => {
      if (user) {
        console.log(user)
        return new userActions.Authenticated(user)
      } else {
        return new userActions.NotAuthenticated()
      }
    }),
    catchError(err => of(new userActions.AuthenticationFail()))
  )

  @Effect()
  logout = this.actions$.pipe(
    ofType(userActions.ActionTypes.LOGOUT),
    switchMap(() => this.angularFireAuth.auth.signOut()),
    map(() => {
      this.router.navigate(['/landing'])
      return new userActions.NotAuthenticated()
    })
  )

  @Effect()
  authenticationFail = this.actions$.pipe(
    ofType(userActions.ActionTypes.AUTH_ERROR),
    map(() => new userActions.NotAuthenticated())
  )

  @Effect()
  facebookLogin = this.actions$.pipe(
    ofType(userActions.ActionTypes.FACEBOOK_LOGIN),
    switchMap((x) => this.angularFireAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())),
    map((res) => new userActions.UpdateUser(this.castFirebaseUser(res.user))),
    // map((res) => new userActions.GetUser()),
    catchError(err => of(new userActions.AuthenticationFail()))
  )

  @Effect()
  googleLogin = this.actions$.pipe(
    ofType(userActions.ActionTypes.GOOGLE_LOGIN),
    switchMap((x) => this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())),
    map((res) => new userActions.UpdateUser(this.castFirebaseUser(res.user))),
    catchError(err => of(new userActions.AuthenticationFail()))
  )

  @Effect()
  updateUser = this.actions$.pipe(
    ofType(userActions.ActionTypes.UPDATE_USER),
    switchMap((action) => from(this.afs.doc(`users/${action.payload.uid}`).set(action.payload, { merge: true }))),
    map(() => new userActions.UpdateUserSuccess()),
    catchError(err => of(new userActions.UpdateUserFail(err)))
  )


  castFirebaseUser(user: FbUser) {
    return { uid: user.uid, displayName: user.displayName, email: user.email, photoURL: user.photoURL }
  }

}
