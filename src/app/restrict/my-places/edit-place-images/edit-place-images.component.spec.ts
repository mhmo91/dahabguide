import { placeWizardStateMock } from '../place-wizard-state/place-wizard.reducer'
import { appStateMock } from 'src/testing/states/app-state-mock'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { EditPlaceImagesComponent } from './edit-place-images.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { provideMockStore } from '@ngrx/store/testing'
import { Place, IPlace } from 'src/app/models/place.model'
import { MinionsService } from 'src/app/app-shared/services/minions.service'

describe('EditPlaceImagesComponent', () => {
  let component: EditPlaceImagesComponent
  let fixture: ComponentFixture<EditPlaceImagesComponent>
  // tslint:disable-next-line: prefer-const
  let initialState = { ...appStateMock, placeWizardStateMock }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditPlaceImagesComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore({ initialState }), MinionsService]

    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlaceImagesComponent)
    component = fixture.componentInstance
    component.place = new Place()
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
