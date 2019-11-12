import { angularFireStorageSpy } from './angularfire-storage.stub'
import { angularFireStoreSpy } from './fire-store-stub'
import { AngularFireAuth } from '@angular/fire/auth'
import { NgModule } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { AngularFirestore } from '@angular/fire/firestore'
import { angularFireAuthStub } from './firebase-auth-stub'
import { AngularFireStorage } from '@angular/fire/storage'



@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [
    { provide: AngularFireAuth, useValue: angularFireAuthStub },
    { provide: AngularFirestore, useValue: angularFireStoreSpy },
    { provide: AngularFireStorage, useValue: angularFireStorageSpy }

  ],
  exports: []
})
export class FirebaseTestingModule { }
