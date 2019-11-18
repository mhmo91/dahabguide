import { RouterTestingModule } from '@angular/router/testing'
import { LandingSharedModule } from './../landing-shared/landing-shared.module'
import { FirebaseTestingModule } from 'src/testing/firebase-testing/firebase-testing.module'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import { LandingToolbarComponent } from './landing-toolbar.component'
import { provideMockStore } from '@ngrx/store/testing'
import { appStateMock } from 'src/testing/states/app-state-mock'

describe('LandingToolbarComponent', () => {
  let component: LandingToolbarComponent
  let fixture: ComponentFixture<LandingToolbarComponent>
  const initialState = appStateMock
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [LandingSharedModule, RouterTestingModule],
      declarations: [LandingToolbarComponent],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingToolbarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
