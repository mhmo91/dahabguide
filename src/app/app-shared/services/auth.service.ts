import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

user: Observable<User>;
  constructor( private afAuth: AngularFireAuth,
               private afs: AngularFirestore,
               private router: Router) {
    this.user = this.afAuth.authState.pipe(
    switchMap(user => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return of (null);
      }
    }));
 }


 async googleSignin() {
   const provider = new auth.GoogleAuthProvider();
   const credential = await this.afAuth.auth.signInWithPopup(provider);
   return this.updateUserData(credential.user);
  }
  async facebookSignin() {
    const provider = new auth.FacebookAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
   }
  // async Signin(email: string, password: string) {
  //   const credential = await this.afAuth.auth.signInWithEmailAndPassword(email , password);
  //   return this.updateUserData(credential.user);
  //  }

  async signOut() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/']);
  }


  private updateUserData({uid, email, displayName, photoURL}: User) {

    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);
    const data = {
      uid,
      email,
      displayName,
      photoURL
    };
    return userRef.set(data, {merge: true});
  }
}
