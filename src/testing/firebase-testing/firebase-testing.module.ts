import { angularFireStoreSpy } from './fire-store-stub'
import { AngularFireAuth } from '@angular/fire/auth'
import { NgModule } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { AngularFirestore } from '@angular/fire/firestore'
import { angularFireAuthStub } from './firebase-auth-stub'



@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [
    { provide: AngularFireAuth, useValue: angularFireAuthStub },
    { provide: AngularFirestore, useValue: angularFireStoreSpy }

  ],
  exports: []
})
export class FirebaseTestingModule { }
