import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PlaceAvailabilityCalendarComponent } from './place-availability-calendar.component'

describe('PlaceAvailabilityCalendarComponent', () => {
  let component: PlaceAvailabilityCalendarComponent
  let fixture: ComponentFixture<PlaceAvailabilityCalendarComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceAvailabilityCalendarComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceAvailabilityCalendarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
