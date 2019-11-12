import { placeWizardStateMock } from './../place-wizard-state/place-wizard.reducer'
import { appStateMock } from 'src/app/reducers'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PlaceImagesComponent } from './place-images.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { provideMockStore } from '@ngrx/store/testing'
import { Place, IPlace } from 'src/app/models/place.model'
import { MinionsService } from 'src/app/app-shared/services/minions.service'

describe('PlaceImagesComponent', () => {
  let component: PlaceImagesComponent
  let fixture: ComponentFixture<PlaceImagesComponent>
  // tslint:disable-next-line: prefer-const
  let initialState = { ...appStateMock, placeWizardStateMock }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceImagesComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore({ initialState }), MinionsService]

    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceImagesComponent)
    component = fixture.componentInstance
    component.place = new Place()
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
