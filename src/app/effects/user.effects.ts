import { auth, User as FbUser } from 'firebase/app'
import { User, IUser } from 'src/app/models/user.model'
import { AngularFireAuth } from '@angular/fire/auth'
import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'

import { concatMap, switchMap, map, catchError } from 'rxjs/operators'
import { EMPTY, of, from } from 'rxjs'
import * as userActions from '../actions/user.actions'
import { AngularFirestore } from '@angular/fire/firestore'
import { Router } from '@angular/router'

import * as authActions from '../actions/auth.actions'


@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions<userActions.UserActions>,
    private angularFireAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) { }


  @Effect()
  getUser = this.actions$.pipe(
    ofType(userActions.ActionTypes.GET_USER),
    switchMap(() => {
      return this.angularFireAuth.authState
    }),
    switchMap((user: FbUser) => {
      if (user) {
        // get user info from users Collection from firestore "dahab-guide/database/users"
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
      } else {
        return of(null)
      }
    }),
    map((user: IUser) => {
      if (user) {
        return new userActions.GetUserSuccess(user)
      } else {
        return new userActions.GetUserFail('user not logged in') // user not logged in
      }
    }),
    catchError(err => of(new userActions.GetUserFail(err))) // this means api failure
  )


  @Effect()
  getUserSuccess = this.actions$.pipe(
    ofType(userActions.ActionTypes.GET_USER_SUCCESS),
    map(() => new authActions.AuthenticationSuccess())
  )

  @Effect()
  getUserFail = this.actions$.pipe(
    ofType(userActions.ActionTypes.GET_USER_FAIL),
    map(() => new authActions.AuthenticationFail())
  )


  @Effect()
  logout = this.actions$.pipe(
    ofType(userActions.ActionTypes.LOGOUT),
    switchMap(() => this.angularFireAuth.auth.signOut()),
    map(() => {
      this.router.navigate(['/landing'])
      return new authActions.NotAuthenticated()
    })
  )


  @Effect()
  updateUser = this.actions$.pipe(
    ofType(userActions.ActionTypes.UPDATE_USER),
    map((action) => {
      console.log(action)
      return action
    }),
    switchMap((action) => from(this.afs.doc(`users/${action.payload.uid}`).set(action.payload, { merge: true }))),
    map(() => new userActions.GetUser()),
    catchError(err => of(new userActions.UpdateUserFail(err)))
  )

  castFirebaseUser(user: FbUser) {
    return { uid: user.uid, displayName: user.displayName, email: user.email, photoURL: user.photoURL }
  }

}
