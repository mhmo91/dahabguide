import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PlaceCardComponent } from './place-card.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { IPlace } from 'src/app/models/place.model'

describe('PlaceCardComponent', () => {
  let component: PlaceCardComponent
  let fixture: ComponentFixture<PlaceCardComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceCardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceCardComponent)
    component = fixture.componentInstance
    component.place = {
      layout: {
        bedrooms: 2,
        bathrooms: 2,
        beds: 2
      },
      loading: false,
      guests: {
        adults: 2,
        children: 2,
        Infants: 2
      }
    } as IPlace
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
