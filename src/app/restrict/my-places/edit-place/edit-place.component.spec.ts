import { RouterTestingModule } from '@angular/router/testing'
import { placeWizardStateMock } from './../place-wizard-state/place-wizard.reducer'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { EditPlaceComponent } from './edit-place.component'
import { appStateMock } from 'src/testing/states/app-state-mock'
import { FirebaseTestingModule } from 'src/testing/firebase-testing/firebase-testing.module'
import { provideMockStore } from '@ngrx/store/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

describe('EditPlaceComponent', () => {
  let component: EditPlaceComponent
  let fixture: ComponentFixture<EditPlaceComponent>
  // tslint:disable-next-line: prefer-const
  let initialState = { ...appStateMock, placeWizardStateMock }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FirebaseTestingModule, RouterTestingModule],
      declarations: [EditPlaceComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlaceComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
