import { RouterTestingModule } from '@angular/router/testing';
import { LandingSharedModule } from './../landing-shared/landing-shared.module';
import { FirebaseTestingModule } from 'src/testing/firebase-testing/firebase-testing.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LandingToolbarComponent } from './landing-toolbar.component';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';

describe('LandingToolbarComponent', () => {
  let component: LandingToolbarComponent;
  let fixture: ComponentFixture<LandingToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FirebaseTestingModule, RouterTestingModule, LandingSharedModule],
      declarations: [LandingToolbarComponent],
      providers: [UserService, AuthService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
