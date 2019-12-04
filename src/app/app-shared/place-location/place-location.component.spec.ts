import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PlaceLocationComponent } from './place-location.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

describe('PlaceLocationComponent', () => {
  let component: PlaceLocationComponent
  let fixture: ComponentFixture<PlaceLocationComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceLocationComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceLocationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
