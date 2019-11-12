import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PlaceCardComponent } from './place-card.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { IPlace } from 'src/app/models/place.model'
import { provideMockStore } from '@ngrx/store/testing'
import { appStateMock } from 'src/testing/states/app-state-mock'

describe('PlaceCardComponent', () => {
  let component: PlaceCardComponent
  let fixture: ComponentFixture<PlaceCardComponent>
  const initialState = appStateMock

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceCardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore({ initialState })]

    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceCardComponent)
    component = fixture.componentInstance
    component.place = initialState.places.entities[initialState.places.ids[0]]
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
