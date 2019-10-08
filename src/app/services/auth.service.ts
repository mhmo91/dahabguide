import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { auth, User } from 'firebase/app'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth'
import { Observable, of } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { UserService } from './user.service'



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userObservable: Observable<User>
  constructor(
    private angularFireAuth: AngularFireAuth, private afs: AngularFirestore, private userService: UserService, private router: Router) {

    // the "this.angularFireAuth.authState" is an Observable<firebase.User> emit when app authState change
    this.userObservable = this.angularFireAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          // get user info from users Collection from firestore "dahab-guide/database/users"
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
          return of(null)
        }
      }))
    this.userObservable.subscribe(res => {
      this.userService.fUser = res
    })
  }



}
