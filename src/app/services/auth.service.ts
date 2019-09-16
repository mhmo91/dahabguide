import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth, User } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserService } from './user.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userObservable: Observable<User>;
  constructor(
    private angularFireAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router,
    private userService: UserService) {

    // the "this.angularFireAuth.authState" is an Observable<firebase.User> emit when app authState change
    this.userObservable = this.angularFireAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          // get user info from users Collection from firestore "dahab-guide/database/users"
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      }));
    this.userObservable.subscribe(res => {
      this.userService.fUser = res;
    });
  }


  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();

    // receiving the user info object from his google account
    // if sign up it will add the user info object to "/dahab-guide/authentication/users"
    const credential = await this.angularFireAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }
  async facebookSignin() {
    const provider = new auth.FacebookAuthProvider();
    const credential = await this.angularFireAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }


  async signOut() {
    await this.angularFireAuth.auth.signOut();
    return this.router.navigate(['/landing']);
  }


  private updateUserData({ uid, email, displayName, photoURL }) {

    // if uid exist in "dahab-guide/database/users" it update the info
    // else create NEW ONE
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${uid}`);
    return userRef.set({ uid, email, displayName, photoURL }, { merge: true });
  }
}
