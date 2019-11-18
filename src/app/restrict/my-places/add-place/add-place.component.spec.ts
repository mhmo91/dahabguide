import { placeWizardStateMock } from '../place-wizard-state/place-wizard.reducer'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AddPlaceComponent } from './add-place.component'
import { provideMockStore } from '@ngrx/store/testing'
import { appStateMock } from 'src/testing/states/app-state-mock'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RestrictSharedModule } from '../../restrict-shared/restrict-shared.module'
import { FirebaseTestingModule } from 'src/testing/firebase-testing/firebase-testing.module'
import { RouterTestingModule } from '@angular/router/testing'

describe('AddPlaceComponent', () => {
  let component: AddPlaceComponent
  let fixture: ComponentFixture<AddPlaceComponent>
  // tslint:disable-next-line: prefer-const
  let initialState = { ...appStateMock, placeWizardStateMock }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FirebaseTestingModule, RouterTestingModule],
      declarations: [AddPlaceComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlaceComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
