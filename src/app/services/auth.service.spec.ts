import { TestBed, fakeAsync } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from './user.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { FirebaseTestingModule } from 'src/testing/firebase-testing/firebase-testing.module';

describe('AuthService', () => {

  let authService: AuthService;
  let afAuth: AngularFireAuth;
  let angularFireStoreSpy: { doc: jasmine.Spy };

  angularFireStoreSpy = jasmine.createSpyObj('AngularFirestore', ['doc']);
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  beforeEach(() => {
    const stubValue = new BehaviorSubject(null); // <= Pay attention to this guy
    TestBed.configureTestingModule({
      imports: [FirebaseTestingModule, RouterTestingModule],
      providers: [
        AuthService,
        UserService]
    });
    afAuth = TestBed.get(AngularFireAuth);
    authService = TestBed.get(AuthService);
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

});
